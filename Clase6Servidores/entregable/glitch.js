//traernos la librería, en si mismo es una función, cuando la invocamos creamos el servidor 
//luego debemos crear configurar un callback controlador que reciba las peticiones y configurar las rta 
const express = require('express') //traer la libería 

const app = express()

//aca van todas las entradas o accesos a las cuales el cliente tiene acceso, en caso de querer entrar a una que no exista el cliente recibirá un mensaje que no existe 
//configuración de las rta, para cada ruta voy a configurarle un contolador 
app.get('/productos1', (req, res) => {
    res.sendFile(process.cwd() + '/index.html')  //enviando  texto como rta al cliente, res.sendFile, para enviar un archivo 
 })

 app.get('/productos2', (req, res) => {
    res.sendFile(process.cwd() + '/array.html')   //enviando  texto como rta al cliente, res.sendFile, para enviar un archivo 
 })

 app.get('/productos3', (req, res) => {
     const array = [{"title": "Escuadra", "price": 123.45,"thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
          "id": 1},
        {"title": "Calculadora","price": 234.56,"thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
          "id": 2},
        {"title": "Globo Terráqueo","price": 345.67,"thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
          "id":3}]
       res.send(array)        
       
})

app.get('/productorandom', (req, res) => {
    const array = [{"title": "Escuadra", "price": 123.45,"thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
         "id": 1},
       {"title": "Calculadora","price": 234.56,"thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
         "id": 2},
       {"title": "Globo Terráqueo","price": 345.67,"thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
         "id":3}]
    const rand = Math.floor(Math.random()*array.length)
    const rValue=array[rand] 
      res.send(rValue)        
      
})


 app.get('/salida', (req, res) => { //punto de acceso a algo que va a hacer 
    res.send(`<h1> hasta la proxima </h1>` ) //enviando  texto como rta al cliente, acá puedo escribir en etiquetas de html  
 }) //cuando te digan tal cosa, esta es la respuesta, para eso es el get 
//a que puerto me conecto para que se dispare el callback 

 

//ponerlo a ecuchar 
const port = 8080
const server = app.listen(port, () => {
    console.log(`servidor http escuchando en el puerto ${server.address().port}`)
}) //escuchando peticiones 

