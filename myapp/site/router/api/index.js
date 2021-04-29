let express = require ( 'express' );
let router = express.Router();
let juegosResource = require('../../requestsAPi/requests')

router.get('/', function(req, res){
    
    juegosResource.getListJuegos()
    .then(function(results){
        
        console.log(results);
    })
})

module.exports =router;