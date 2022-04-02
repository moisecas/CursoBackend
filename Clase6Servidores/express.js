//traernos la librería, en si mismo es una función, cuando la invocamos creamos el servidor 
//luego debemos crear configurar un callback controlador que reciba las peticiones y configurar las rta 
const express = require('express') //traer la libería 

const app = express()

//aca van todas las entradas o accesos a las cuales el cliente tiene acceso, en caso de querer entrar a una que no exista el cliente recibirá un mensaje que no existe 
//configuración de las rta, para cada ruta voy a configurarle un contolador 
app.get('/', (req, res) => {
    console.log("servidor operando en puerto 8080") //enviando  texto como rta al cliente, res.sendFile, para enviar un archivo 
 })


//ponerlo a ecuchar 
const port = 8080
const server = app.listen(port, () => {
    console.log(`servidor http escuchando en el puerto`) 
}) //escuchando peticiones  


