const { application } = require('express')
const {textfunction}=require('../controller/textcontroller')
const express=require('express')
const router=express.Router()

router.get('/test', textfunction)
module.exports=router