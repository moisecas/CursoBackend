const express = require('express')
const app = express()

app.use(express.static('public')) //la carpeta public ahora va a poder ser accedida desde el navegador 

const port = 8080
const server = app.listen(port,()=>{
    console.log('servidor escuchando en localhost 8080')
})
server.on('error', error => console.log('error de lectura')) 