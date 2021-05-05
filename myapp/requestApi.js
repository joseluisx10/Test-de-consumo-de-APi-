const fetch = require("node-fetch");
const fs = require('fs');
const dirJuegos = __dirname +'/public/file/juegos.json' ;

fetch('https://www.freetogame.com/api/games')
.then((respuesta)=>{
    return respuesta.json();
})
.then(resultado =>{
    let leerArchivoJson= fs.readFileSync(dirJuegos, 'utf8');
    if(leerArchivoJson.length == 0){
        console.log(resultado)
        fs.writeFileSync(dirJuegos, JSON.stringify(resultado));
            
    }
})
.catch(err => console.log(err))
        
