const {DataTypes} = require('sequelize');
const sequelize = require('../config/sequelize');

const Room = sequelize.define('rooms',{
    roomname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    namehotel: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    acreage: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING
    },
}, {
    paranoid: true
}
);


sequelize.sync().then(() => {
    console.log('Room table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });

module.exports = Room;