const Sequelize = require('sequelize');
const sequelize = require('../utils/database')

const Order = sequelize.define('order', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true    
    },
    NoOfProducts: Sequelize.INTEGER,
    amount: Sequelize.FLOAT,
})

module.exports = Order;