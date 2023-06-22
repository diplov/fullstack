const express = require("express");
const { postCategory, getAllCategories, getCategory, updateCategory, deleteCategory} = require("../controller/categoryController");
const { reqiuiresignin } = require("../controller/userController");
const { categoryValidationRules, validate } = require("../validator");
const router = express.Router();

// category
router.post("/addcategory",categoryValidationRules,validate,reqiuiresignin,postCategory);
router.get('/getallcategories',getAllCategories)
router.get('/categorydetail/:id',getCategory)
router.put('/updatecategory/:id', reqiuiresignin, updateCategory)
router.delete('/deletecategory/:id', reqiuiresignin, deleteCategory)

module.exports = router;