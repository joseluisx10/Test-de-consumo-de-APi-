# test2804
Nombre de la página:  GameStart

Game Start es un sitio en el que te vas a aventurar en un mundo de información detallada sobre juegos y accesos a plataformas donde pondrás a juego tus habilidades  para que tu visita sea de tu agrado. 

La página consta de una vista home en la que te encontrarás con información detallada por género y una gran variedad de juegos con sus respectivas  fotos en blanco y negro que resaltan con la  portada de la pagina.
Para que tu visita tenga un toque, también consta de una vista “detalle” .al cual tendrás acceso a través de las fotos.


La página se diseñó completamente con javascript y nodeJS. 



Primer Punto

Para la obtención de la lista de juegos. se generó un archivo js ejecutable llamada “requestApi ” .
en la que encontrará todo el código backend que se usó para la obtención de dicha lista.
Misma que tiene que ejecutar o correr. mediante el siguiente comando (node  requestApi).
Una vez ejecutada la acción se generará un archivo JSON con toda la lista.

En este punto antes de ejecutar el archivo:

debe cambiar el nombre del archivo  “.env.example” que se encuentra en la carpeta myapp  a “.env ”
completar API_URL= http……
guardar

herramientas: Fetch y dotenv

Segundo Punto

Para subir todos los registros obtenidos de la APi.a la base de datos se
genero un código que crea la tabla juegos en My SQL y migra los datos a dicha DB.
Cabe resaltar que este código permite realizar controles de versiones independientemente de la base de datos.

Para realizar la conexión con su BD edite el archivo .env con sus datos.
para ejecutar la migración debe ejecutar dichos comandos:

a) npx sequelize db:migrate 
b) npx sequelize db:seed:all 

herramienta : Sequelize-.Migration

.Tercer punto

Para generar y almacenar localmente una segunda imagen (thumbnail) del juego con un tamaño del 50% y en blanco y negro. Se creó un archivo ejecutable (js) llamada “downloadimg”. la cual se encarga de guardar todos las imágenes en la carpeta “ image” 

herramientas: agudo y Axios

Cuarto Punto 

Se realizó el mismo proceso que el “segundo punto” para generar una tabla genre y subir las cantidad total de c/género registrado.
debe ejecutar los mismos comandos mencionados en el Punto 2.

herramienta: sequelize-migration

Quinto Punto y Sexto Punto

El diseño de la vista home y detalle se encuentra realizado totalmente con html y css

herramienta: html y css

