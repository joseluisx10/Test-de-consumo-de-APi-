'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('games', {
      id: {
        type: Sequelize.INTEGER(10),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        
      },
      title: {
        type : Sequelize.STRING(45),
        allowNull: false
      },
      thumbnail: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      short_description: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      game_url: {
        type: Sequelize.STRING(80),
        allowNull: false
      },
      genre: {
        type: Sequelize.STRING(50),
        allowNull: false,                
      },
      platform: {
        type: Sequelize.STRING(120),
        allowNull: false
      },
      publisher: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      developer: {
        type: Sequelize.STRING(45),
        allowNull: false
      },
      release_date: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      freetogame_profile_url: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      
    });

  },

  down:(queryInterface, Sequelize) => {
    return queryInterface.dropTable('games');
  }
};