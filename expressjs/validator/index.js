const { check, validationResult } = require("express-validator");

exports.categoryValidationRules = [
  check("category_name", "Category name is required")
    .notEmpty()
    .isLength({ min: 3 })
    .withMessage("category name must be at least 3 chearacters"),
];
exports.validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array()[0].msg });
  }
  next();
};
exports.productValudationRule = [
  check("product_name", "Product name is required")
    .notEmpty()
    .isLength({ min: 3 })
    .withMessage("Product name must be at least 3 chearacters"),

  check("product_price", "Product price is required")
    .notEmpty()
    .isNumeric()
    .withMessage("Product price must be number"),
  check("product_description", "Product description is required")
    .notEmpty()
    .isLength({ min: 20 })
    .withMessage("Product nadescriptionme must be at least 20 chearacters"),
  // check('category', 'Category is required').notEmpty(),
  check("count_in_stock", "count_in_stock is required")
    .notEmpty()
    .isNumeric()
    .withMessage("count_in_stock must be number"),
];
