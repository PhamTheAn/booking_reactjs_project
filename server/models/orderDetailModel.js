const {DataTypes} = require('sequelize');
const sequelize = require('../config/sequelize');
const Order = require('./orderModel');

const OrderDetail = sequelize.define('order_details', {
    userName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    userPhoneNumber: {
        type: DataTypes.STRING(15),
        allowNull: false,
    },
    roomName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    roomNumber: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    checkInDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    checkOutDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    note: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    paymentStatus: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    idOrder: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

OrderDetail.belongsTo(Order, {foreignKey: 'idOrder'})

module.exports = OrderDetail;