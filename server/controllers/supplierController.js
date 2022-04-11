const Supplier = require('../models/supplier');
const { data } = require('../utils/suppliersData')


exports.createSuppliers = () => {
    data.map(supplier => {
        Supplier.create(supplier)
        .then((res) => console.log(res) )
        .catch((err) => console.log(err))
    })
}

exports.getSuppliers = (req, res, next) => {
    Supplier.findAll()
    .then((suppliers) => {
        return res.status(200).send(suppliers)
    })
    .catch((err) => {
        return res.send(err)
    })
}

exports.getSupplierById = (req, res, next) => {
    Supplier.findOne({ where: { id: req.params.supplierId } })
    .then((supplier) => {
        return res.status(200).send(supplier)
    })
    .catch((err) => {
        return res.send(err)
    })
}