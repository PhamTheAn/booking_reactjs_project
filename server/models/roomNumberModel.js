const {DataTypes} = require('sequelize');
const sequelize = require('../config/sequelize');
const Room = require('./roomModel')

const RoomNumber = sequelize.define('roomsnumber', {
    roomNumber: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    }
})

RoomNumber.belongsTo(Room, {foreignKey: "idRoom"})
Room.hasMany(RoomNumber, {foreignKey: "idRoom"})

module.exports = RoomNumber