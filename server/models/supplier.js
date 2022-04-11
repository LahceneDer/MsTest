const Sequelize = require('sequelize');
const sequelize = require('../utils/database')

const Supplier = sequelize.define('supplier', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true    
    },
    name: Sequelize.STRING,
    address: Sequelize.STRING,
})

module.exports = Supplier;