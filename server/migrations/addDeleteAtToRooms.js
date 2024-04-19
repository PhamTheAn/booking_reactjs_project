'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('rooms', 'deletedAt', {
      type: Sequelize.DATE, // Loại dữ liệu của trường mới
      allowNull: true, // Có cho phép giá trị null không
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('rooms', 'deletedAt');
  }
};

