require ('dotenv').config()
const fetch = require("node-fetch");
const fs = require('fs');
const dirfileJson = __dirname + process.env.PATH_FILE_JSON;

fetch(process.env.API_URL)
.then((respuesta)=>{
    return respuesta.json();
})
.then(resultado =>{
    let leerArchivoJson= fs.readFileSync(dirfileJson, 'utf8');
    if(leerArchivoJson.length == 0){
        fs.writeFileSync(dirfileJson, JSON.stringify(resultado));
            
    }
})
.catch(err => console.log(err))
        
