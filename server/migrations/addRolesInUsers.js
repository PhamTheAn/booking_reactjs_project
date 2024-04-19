'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.addColumn('Users', 'roles', {
        type: Sequelize.STRING,
        allowNull: true // or false, depending on your requirements
      });
    },
  
};