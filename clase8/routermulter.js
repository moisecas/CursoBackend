const express = require('express')
const {Router} = express 
const app = express()


app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const routerAutos = new Router() //nueva ruta para darle al server que va a hacer con que 

routerAutos.get('/', (req,res)=>{ //acá toma la variable y le damos un destino para un fin, le de una rta al usuario 
    res.json({mensaje:'recibi una petición con el metodo get'}) 
})

routerAutos.post('/', (req,res)=>{
    res.json({mensaje:'recibi una petición con el metodo post'}) 
})



app.use('/api/autos', routerAutos) 

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`))

//lo que tenga dentro de exports es lo que voy a poder usar hacia otro archivo
module.exports= routerAutos //routerdeautos es un objeto que voy a obtener cuando haga una require en otra ruta o hacia un crud
