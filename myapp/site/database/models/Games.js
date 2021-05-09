'use strict';

module.exports = (sequelize, DataTypes) => {

  const Games = sequelize.define('Games', {
    id : { 
        type: DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    title:{
        type: DataTypes.STRING(45),
        allowNull: false
    },
    thumbnail:{
        type: DataTypes.STRING(100),
        allowNull: false
    },
    short_description:{
        type: DataTypes.STRING(100),
        allowNull: false
    },
    game_url: {
        type: DataTypes.STRING(80),
        allowNull:false
    },
    genre:{
        type: DataTypes.STRING(50),
    },
    platform:{
        type: DataTypes.STRING(120),
        allowNull:false
    }, 
    publisher:{
        type: DataTypes.STRING(100),
        allowNull:false
    },
    developer: {
        type: DataTypes.STRING(45),
        allowNull:false
    },
    release_date: {
        type: DataTypes-String(20),
        allowNull: false
    },
    freetogame_profile_url: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
  },{
      tableName : 'games',
      timestamps: false
  });

  return Games;
};