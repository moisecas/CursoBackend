const express = require('express'); 
const app = express(); 

require('dotenv').config({path:'./.env'}); //le definimos el path de .env para que se pueda usar la variable de entorno 

const puerto = process.env.PORT = process.env.PORT || 3000; //le definimos el puerto que va a usar el servidor

app.listen(puerto, () => { // listen on port 3000, callback function
    console.log('Server corriendo ' + puerto); //puerto tiene el valor de la variable de entorno PORT que se definio en .env en el archivo .env 
})