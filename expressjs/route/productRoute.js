const express = require("express");
const {
  addProduct,
  getallproducts,
  getProductDetails,
  deleteproduct,
  getproductbycategory,
  updateProduct,
  filterProduct,
} = require("../controller/productController");
const { reqiuiresignin } = require("../controller/userController");
const upload = require("../utils/fileUpload");
const { validate, productValudationRule } = require("../validator");

const router = express.Router();

// product
router.post(
  "/addproduct",
  upload.single("product_image"),
  productValudationRule,
  validate,
  reqiuiresignin,
  addProduct
);
router.get("/getallproducts", getallproducts);
router.post("/filteredproduct", filterProduct);
router.get("/getproduct/:id", getProductDetails);
router.delete("/deleteproduct/:id", reqiuiresignin, deleteproduct);
router.get(
  "/productbycategory/:category_id",
  reqiuiresignin,
  getproductbycategory
);
router.put(
  "/productupdate/:id",
  upload.single("product_image"),
  reqiuiresignin,
  updateProduct
);

module.exports = router;
