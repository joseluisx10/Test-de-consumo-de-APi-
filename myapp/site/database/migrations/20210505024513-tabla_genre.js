'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('genre', {
      nombre: {
        type: Sequelize.STRING(50),
        allowNull: false,
        primaryKey: true, 

      },
      cantidad_Total:{
        type: Sequelize.INTEGER(10),
      }
      
    });

  },

  down:(queryInterface, Sequelize) => {
    return queryInterface.dropTable('games');
  }
};

