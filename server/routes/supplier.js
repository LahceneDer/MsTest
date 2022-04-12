const express = require('express');
const supplierController = require('../controllers/supplierController')
const router = express.Router();

//Request all suppliers from db => API
router.get('/suppliers', (req, res, next) => {
    return supplierController.getSuppliers(req, res, next)
} )


// create suppliers from suppliersdata.js "fake data"=> API
router.get('/fakesuppliers', (req, res, next) => {
     supplierController.createSuppliers()
     suppliers = supplierController.getSuppliers(req, res, next)
     return res.status(200).send(suppliers)
} )


// get single supplier by id from db => API
router.get('/suppliers/:supplierId', (req, res, next) => {
    return supplierController.getSupplierById(req, res, next)   
} )

module.exports = router