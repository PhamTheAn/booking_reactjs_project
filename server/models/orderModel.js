const {DataTypes} = require('sequelize');
const sequelize = require('../config/sequelize');
const User = require('./userModel');

const Order = sequelize.define('orders', {
    idUser:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idRoom: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
});

Order.belongsTo(User, {foreignKey: 'idUser'});

module.exports = Order;