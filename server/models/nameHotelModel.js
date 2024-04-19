const {DataTypes} = require('sequelize');
const sequelize = require('../config/sequelize');
const Room= require('./roomModel')

const Hotel = sequelize.define('hotels', {
    hotelName: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

Hotel.hasMany(Room, {as: 'rooms'});
Room.belongsTo(Hotel)

module.exports = Hotel;

