const Order = require('../model/ordermodels')
const OrderItems = require('../model/orderitems')

// place order
exports.placeOrder = async (req, res) => {
    let orderids = await Promise.all(
        req.body.orderItems.map(async (orderitem) => {
            let orderitems = new OrderItems({
                product: orderitem.product,
                quantity: orderitem.quantity
            })
            orderitems = await orderitems.save()
            if (!orderitems) {
                return res.status(400).json({ error: "something went wrong" })
            }
            return orderitems._id
        })
    )
    let individual_total = await Promise.all(
        orderids.map(async (orderitem) => {
            let item = await OrderItems.findById(orderitem).populate('product', 'product_price')
            return item.product.product_price * item.quantity
        })
    )

    let total_price = individual_total.reduce((acc, cur) => acc + cur)
    let order = new Order({
        orderItemsIds: orderids,
        total: total_price,
        user: req.body.user,
        shipping_address: req.body.shipping_address,
        alternate_shipping_address: req.body.alternate_shipping_address,
        city: req.body.city,
        zip: req.body.zip,
        country: req.body.country,
        phone: req.body.phone
    })
    order = await order.save()
    if (!order) {
        return res.status(400).json({ error: "Something went wrong" })
    }
    res.send(order)
}
// to view all orders
exports.viewOrders = async (req, res) => {
    let orders = await Order.find().populate('user')
        .populate({ path: "orderItemsIds", populate: ({ path: "product", populate: ({ path: "category" }) }) })
    if (!orders) {
        return res.status(400).json({ error: "something went wrong" })
    }
    res.send(orders)
}
// view order details
exports.orderdetails = async (req, res) => {
    let order = await Order.findById(req.params.order_id).populate('user')
        .populate({ path: "orderItemsIds", populate: ({ path: "product", populate: ({ path: "category" }) }) })
    if (!order) {
        return res.status(400).json({ error: "something went wrong" })
    }
    res.send(order)
}
// order of user
exports.userorder = async (req, res) => {
    let orders = await Order.find({ user: req.params.user_id }).populate('user', 'username')
        .populate({ path: "orderItemsIds", populate: ({ path: "product", populate: ({ path: "category" }) }) })
    if (!orders) {
        return res.status(400).json({ error: "something went wrong" })
    }
    res.send(orders)
}
// find order by status
exports.orderstatus = async (req, res) => {
    let orders = await Order.find({ status: req.body.status }).populate('user', 'username')
        .populate({ path: "orderItemsIds", populate: ({ path: "product", populate: ({ path: "category" }) }) })
    if (!orders) {
        return res.status(400).json({ error: "something went wrong" })
    }
    res.send(orders)
}
// update order
exports.updateorder = async (req, res) => {
    let order = await Order.findByIdAndUpdate(req.params.id, {
        status: req.body.status
    }, { new: true })
    if (!order) {
        return res.status(400).json({ error: "something went wrong" })
    }
    res.send(order)
}

// delete user orders
exports.deleteuserorder =  (req, res) => {
    Order.findByIdAndDelete(req.params.id)
        .then((order) => {
            if (order==null) {
                return res.status(400).json({error:"Order not found"})
            }
            order.orderItemsIds.map(async (orderitem) => {
               let orderItems= await OrderItems.findByIdAndDelete(orderitem)
                if (!orderItems) {
                    return res.status(400).json({ error: "Something went wrong" })
                }
            })
            return res.status(200).json({ message: "order removed successfully" })
        })
        .catch((error) => {
            return res.status(400).json({ error: "error message." });
        });
}