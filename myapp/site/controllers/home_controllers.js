const db = require("../database/models");


module.exports =  {

    home: async (req, res) => {

       await db.Games.findAll()
       .then(lista =>{
           res.render('home', { juegos: lista });
       })

   
    }

}