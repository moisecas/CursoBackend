import express from 'express'; //importar express  
import session  from 'express-session'; 

const app = express(); 

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World')
}) 

function crearusuario(datos){
    if(!datos.username){
        return {
            error: "Falta el nombre de usuario"
        }
    }
}

const server = app.listen(3000, () => {
    console.log(`Listening on port ${server.address().port}`);
}); 


