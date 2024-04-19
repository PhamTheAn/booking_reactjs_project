const {DataTypes} = require('sequelize');
const sequelize = require('../config/sequelize');
const Room = require('./roomModel');

const ImagesRoom = sequelize.define('imagesRoom', {
    imageName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

// Liên kết bảng "image" với bảng "room"
Room.hasMany(ImagesRoom, { as: 'images' });
ImagesRoom.belongsTo(Room);

module.exports = ImagesRoom;
