const Order = require('../models/order');
const { ordersData } = require('../utils/ordersData')


// Create orders controller 
exports.createOrders = () => {
    ordersData.map(order => {
        Order.create(order)
        .then((res) => console.log(res) )
        .catch((err) => console.log(err))
    })
}


// Get all orders controller
exports.getOrders = (req, res, next) => {
    Order.findAll()
    .then((orders) => {
        return res.status(200).send(orders)
    })
    .catch((err) => {
        return res.send(err)
    })
}


// Get single order by id controller
exports.getOrdersById = (req, res, next) => {
    Order.findOne({ where: { id: req.params.orderId } })
    .then((order) => {
        return res.status(200).send(order)
    })
    .catch((err) => {
        return res.send(err)
    })
}