const Category = require("../model/categoryModel");
//add category
exports.postCategory = async (req, res) => {
  let category = await Category.findOne({
    category_name: req.body.category_name,
  });
  if (!category) {
    let CategoryToAdd = new Category({
      category_name: req.body.category_name,
    });
    CategoryToAdd = await CategoryToAdd.save();
    if (!CategoryToAdd) {
      return res.status(400).json({ error: "Something went wrong." });
    }
    res.send(CategoryToAdd);
  
  } else {
    return res.status(400).json({ error: "Category already exists." });
  }
};



// to get all categories
exports.getAllCategories = async (req, res) => {
  let categories = await Category.find();
  if (!categories) {
    return res.status(400).json({ error: "Something went wrong." });
  }
  res.send(categories);
};

// to get category details
exports.getCategory = async (req, res) => {
  let category = await Category.findById(req.params.id);
  if (!category) {
    return res.status(400).json({ error: "Something went wrong." });
  }
  res.send(category);
};
// to update category
exports.updateCategory = async (req, res) => {
  let categoryToUpdate = await Category.findByIdAndUpdate(
    req.params.id,
    { category_name: req.body.category_name },
    { new: true }
  );
  if (!categoryToUpdate) {
    return res.status(400).json({ error: "Something went wrong." });
  }
  res.send(categoryToUpdate);
};

// to delete category
exports.deleteCategory = (req, res) => {
  Category.findByIdAndDelete(req.params.id)
    .then((category) => {
      if (!category) {
        return res.status(400).json({ error: "category not found." });
      }
      return res.status(200).json({ message: "Category deleted successfully" });
    })
    .catch((error) => {
      return res.status(400).json({ error: "error message." });
    });
};