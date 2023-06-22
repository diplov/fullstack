const express = require("express")
const { placeOrder,  viewOrders, orderdetails, userorder, orderstatus, deleteuserorder, updateorder } = require("../controller/orderController")
const router = express.Router()

router.post('/placeorder',placeOrder)
router.get('/vieworders', viewOrders)
router.get('/orderdetails/:order_id', orderdetails)
router.get('/userorder/:user_id', userorder)
router.post('/findorderbystatus', orderstatus)
router.delete('/deleteuserorder/:id', deleteuserorder)
router.post('/updateorder/:id', updateorder)


module.exports=router