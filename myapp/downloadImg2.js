const fs = require('fs');  
const path = require('path');  
const axios = require('axios');
const  {imagen} =  require ( 'image-js' ) ;
const dirJuegos = __dirname +'/public/file/juegos.json' ;

let datosApi = JSON.parse(fs.readFileSync(dirJuegos, 'utf-8'))



async function execute(datosApi) {
  let pathDate = path.resolve(__dirname + '/public/', 'images', 'juego' + datosApi.id + '.jpg');
  let url = datosApi.thumbnail;
  let image = await imagen.load(pathDate);
  let grey = image
    .grey() // convert the image to greyscale.
    .resize({ width: 50 }) // resize the image, forcing a width of 200 pixels. The height is computed automatically to preserve the aspect ratio.
    //.rotate(30); // rotate the image clockwise by 30 degrees.
  return grey.save(pathDate);
}
execute(datosApi[0]).catch(console.error);