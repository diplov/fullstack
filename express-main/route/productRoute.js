const express = require("express")
const { addProduct, getallproducts, getProductDetails, deleteproduct, getproductbycategory, updateProduct } = require("../controller/productController")
const { reqiuiresignin } = require("../controller/userController")
const upload = require("../utils/fileUpload")
const {  validate, productValudationRule } = require("../validator")

const router = express.Router()

// product
router.post("/addproduct", upload.single('product_image'),productValudationRule,validate, reqiuiresignin, addProduct)
router.get("/getallproducts",getallproducts)
router.get("/getproduct/:id", getProductDetails)
router.delete("/deleteproduct/:id", reqiuiresignin, deleteproduct)
router.get("/productbycategory/:category_id", reqiuiresignin, getproductbycategory)
router.put("/productupdate/:id", reqiuiresignin, updateProduct)

module.exports=router