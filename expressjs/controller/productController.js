const Product = require("../model/productModel");

// add product
exports.addProduct = async (req, res) => {
  let productToAdd = new Product({
    product_name: req.body.product_name,
    product_price: req.body.product_price,
    product_description: req.body.product_description,
    product_image: req.file.path,
    category: req.body.category,
    count_in_stock: req.body.count_in_stock,
  });
  productToAdd = await productToAdd.save();
  if (!productToAdd) {
    return res.status(400).json({ error: "something went wrong" });
  }
  res.send(productToAdd);
};
// view productlists
exports.getallproducts = async (req, res) => {
  let products = await Product.find().populate("category", "category_name");
  if (!products) {
    return res.status(400).json({ error: "something went wrong" });
  }
  res.send(products);
};
// view product Details
exports.getProductDetails = async (req, res) => {
  let product = await Product.findById(req.params.id).populate(
    "category",
    "category_name"
  );
  if (!product) {
    return res.status(400).json({ error: "something went wrong" });
  }
  res.send(product);
};
// delete product
exports.deleteproduct = async (req, res) => {
  // Product.findAndDelete(req.params.id)
  Product.findByIdAndDelete(req.params.id)
    .then((product) => {
      if (!product) {
        return res.status(400).json({ error: "Product not found." });
      }
      return res.status(200).json({ message: "Product deleted successfully" });
    })
    .catch((error) => {
      return res.status(400).json({ error: "error message." });
    });
};
// to get products bt category
exports.getproductbycategory = async (req, res) => {
  let products = await Product.find({
    category: req.params.category_id,
  });
  if (!products) {
    return res.status(400).json({ error: "something went wrong" });
  }
  res.send(products);
};
// update
exports.updateProduct = async (req, res) => {
  let productToUpdate = await Product.findByIdAndUpdate(
    req.params.id,
    req.file
      ? {
          product_name: req.body.product_name,
          product_price: req.body.product_price,
          product_description: req.body.product_description,
          product_image: req.file.path,
          category: req.body.category,
          count_in_stock: req.body.count_in_stock,
          rating: req.body.rating,
        }
      : {
          product_name: req.body.product_name,
          product_price: req.body.product_price,
          product_description: req.body.product_description,

          category: req.body.category,
          count_in_stock: req.body.count_in_stock,
          rating: req.body.rating,
        },
    {
      new: true,
    }
  );
  if (!productToUpdate) {
    return res.status(400).json({ error: "something went wrong" });
  }
  res.send(productToUpdate);
};

// to get filtered product
exports.filterProduct = async (req, res) => {
  let Args = {};
  for (let key in req.body.filters) {
    if (req.body.filters[key] > 0) {
      if (key === "category") {
        Args[key] = req.body.filters[key];
      } else {
        Args[key] = {
          $gte: req.body.filters[key][0],
          $lte: req.body.filters[key][1],
        };
      }
    }
  }
  let filteredProduct = await Product.find(Args).populate("category");
  if (!filteredProduct) {
    return res.status(400).json({ error: "something went wrong" });
  }
  res.send(filteredProduct);
};
