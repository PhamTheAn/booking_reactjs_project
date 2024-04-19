const {DataTypes} = require('sequelize');
const sequelize = require('../config/sequelize');
const User = require('./userModel')


const Role = sequelize.define('roles', {
    roleName : {
        type: DataTypes.STRING,
        allowNull: false
    }
});

User.belongsToMany(Role, { through: 'UserRole' });

module.exports = Role;