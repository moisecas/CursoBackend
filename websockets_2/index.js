const express = require('express'); //traemos la librería 
const app = express(); //setear iniciamos express 
const server = require('http').Server(app); //iniciamos servidor de node tradicional http modulo por defecto de node 
const io = require('socket.io')(server); //preparamos el socket io, le pasamos el server para inicializarlo 
const PORT = 8080; 

app.use(express.static('public')); //para conectarnos desde un cliente 

io.on('connection', (socket) => { //preparamos las conexiones 
    console.log('Nuevo cliente conectado'); //mensaje para cuando alguien se conecte 
    socket.emit('mensaje', 'Bienvenido'); //para enviarle un mensaje, cada vez que se genere una conexión nueva 
})

setInterval( () => {
    io.emit('mensaje', 'Hola, les estoy saludando a todos');
}, 3000) //cada 3 segundos le esta mandando info al cliente 

server.listen(PORT, () => { //para iniciar le server 
    console.log(`Servidor iniciado en el puerot: http://localhost:${PORT}`);
})