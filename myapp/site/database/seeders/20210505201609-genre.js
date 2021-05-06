'use strict';
const fs = require('fs');
let arraysJuegos = JSON.parse(fs.readFileSync(__dirname+'/../../../public/file/juegos.json','utf8'));


module.exports = {
  up: async (queryInterface, Sequelize) => {

    let arraysGeneros= arraysJuegos.map(element =>{
      return element.genre;
    })
  
    arraysGeneros= arraysGeneros.filter((value, index)=>{
      return arraysGeneros.indexOf(value) === index;
    })
  
    let datos = [];
    arraysGeneros.forEach(element1 => {
      let contador = 0;
      arraysJuegos.forEach(element2 => {
          if(element1 == element2.genre){
              contador++;           
          }
      });
      datos.push({nombre: element1, cantidad_Total: contador})     
    });
  

  
    return queryInterface.bulkInsert('genre', datos)
    
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('genre', null, {});
  
  }
};