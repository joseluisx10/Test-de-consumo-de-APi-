'use strict';
module.exports = (sequelize, DataTypes) => {

    const Genre = sequelize.define('Genre', {
      nombre : { 
          type: DataTypes.STRING(50),
          primaryKey: true,
          allowNull: false
      },
      cantidad_Total:{
          type: DataTypes.INTEGER(10),
      }
    },{
        tableName : 'genre',
        timestamps: false
    });
  
    return Genre;
  };