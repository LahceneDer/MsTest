const express = require('express');
const cors = require('cors');
const sequelize = require('./utils/database')
const bodyParser = require('body-parser')
const path = require('path')

//models
const Supplier = require('./models/supplier')
const Order = require('./models/order')

// routes
const supplierRouter = require('./routes/supplier')
const orderRouter = require('./routes/order')

//swagger
const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'MSTest',
            description: 'Microservice Test - Nodejs with React js',
            contact: {
                name:'Lahcene Dergham',
                email: "l.dergham@esi-sba.dz", 
            },
            servers: ['http://localhost:4000']
        }
    },
    apis: [`${path.join(__dirname, "./routes/*.js")}`]
}

const swaggerDocs = swaggerJsdoc(swaggerOptions)


//settings
const app = express()

//cors policy
app.use(cors())
app.use(bodyParser.json())

// routes/order.js



//middlewares
app.use(supplierRouter)

// orders
/** 
* @swagger
* components:
*  schemas:
*       Order: object
*       properties:
*           name:
*               type: string
*/
app.use(orderRouter)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

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