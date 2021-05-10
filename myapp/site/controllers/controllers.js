const db = require("../database/models");


module.exports =  {

    home:async(req, res) => {
        
        let games = await db.Games.findAll({
        order: [
            ['genre', 'ASC']
        ]
        });
        let genre= await db.Genre.findAll();

        Promise.all( [games, genre] )
        .then(( [games, genre] ) => {
            
            return res.render('home', {games, genre})
        }) 
    },

    detail: async (req, res) =>{

        await db.Games.findByPk(req.params.id)
        .then(result =>{
            res.render('detail', {result:result});
        });
        
    }

}