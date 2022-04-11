const express = require('express');
const orderController = require('../controllers/orderController')
const router = express()


// Request all orders from db => API
router.get('/orders', (req, res, next) => {
    return orderController.getOrders(req, res, next)
} )


// create orders from ordersdata.js "fake data" => API
router.get('/fakeorders', (req, res, next) => {
    orderController.createOrders()
    orders = orderController.getOrders(req, res, next)
    return res.status(200).send(orders)
})


// get signle order by id from db => API
router.get('/orders/:orderId', (req, res, next) => {
    return orderController.getOrdersById(req, res, next)   
} )

module.exports = router