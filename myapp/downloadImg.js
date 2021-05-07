const fs = require('fs');  
const path = require('path');  
const axios = require('axios');
const dirJuegos = __dirname +'/public/file/juegos.json' ;

async function downloadImage (dato) {  
  const urlApi = dato.thumbnail;
  let pathDate = path.resolve(__dirname + '/public/', 'images', 'juego' + dato.id + '.jpg');
  

  const response = await axios({
    url: urlApi,
    method: 'GET',
    responseType: 'stream'
  })

  const writer = fs.createWriteStream(pathDate);
  response.data.pipe(writer)

  return new Promise((resolve, reject) => {
    response.data.on('end', () => {
      resolve()
    })

    response.data.on('error', () => {
      reject()
    })
  })

}

let datosApi = JSON.parse(fs.readFileSync(dirJuegos, 'utf-8'))

/**for (const elemento of datosApi) {
    
    downloadImage(elemento)
    .then(result => {
         console.log(result)
    }) 

}**/

downloadImage(datosApi[0])
    .then(result => {
         console.log('exito')
    })

