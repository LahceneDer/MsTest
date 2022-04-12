const express = require('express');
const cors = require('cors');
const sequelize = require('./utils/database')
const bodyParser = require('body-parser')
const path = require('path')
const YAML = require('yamljs')

//models
const Supplier = require('./models/supplier')
const Order = require('./models/order')

//routes
const supplierRouter = require('./routes/supplier')
const orderRouter = require('./routes/order')

//swagger
const swaggerJsdoc = YAML.load('./api.yaml') // require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')




//settings
const app = express()

//cors policy
app.use(cors())
app.use(bodyParser.json())


//middlewares
app.use(supplierRouter)
app.use(orderRouter)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsdoc))

app.use('/', (req, res, next) => {
    res.render('index')
})




// Relationship between Supplier and Order
Supplier.hasMany(Order)
Order.belongsTo(Supplier)

// database sync
sequelize.sync({ alter: true })
app.listen(4000, () => {
    console.log('listening on port 4000');
})