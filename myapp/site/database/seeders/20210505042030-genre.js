'use strict';

const fs = require('fs');

module.exports = {
  up: async (queryInterface, Sequelize) => {

    let leeArcJson = fs.readFileSync(__dirname + '/../../../public/file/juegos.json','utf8'); 
    let arraysJuegos = JSON.parse(leeArcJson);
    
  
    return queryInterface.bulkInsert('games', [])
    
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('games', null, {});
  
  }
};
