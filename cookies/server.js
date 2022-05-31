const express = require('express'); 
const cookieParser = require('cookie-parser'); 

const app = express();

app.use(cookieParser());
app.use(cookieParser('secret')); //para la firma digital de la cookie 

app.get('/set', (req, res) => {
    res.cookie('server', 'express').send('cookie set');
    
})

app.use((req, res, next) => {
    console.log(req.cookies); //me guarda algo acá para ver que se guarda en el navegador 
    console.dir(req.signedCookies);
    
})

app.get('/', (req, res) => {
    res.send('servidor ok');
})

app.get('/set', (req, res) => {
    res.cookie('regular', 'cookie')
    res.send('cookie set');

})

app.get('/getjson', (req, res) => {
    res.cookie('json', {tipo:'cookie', valor:'json'})
    res.send('json cookie set');
})

//firma digital 
app.get('/setfirma', (req, res) => { //firma digital 
    res.cookie('firma', 'cookie', {signed: true}) //signed: true es para que se guarde en el navegador, signed firmado 
    res.send('cookie set'); //debo agregar algo, un secret para que no se vea en el navegador. 
})

//borrar cookie
app.get('/delete', (req, res) => { //borrar cookie
    for (const cokiname of Object.keys(req.cookies)) { //Object.keys me devuelve un array con todas las keys de los objetos
        res.clearCookie(cokiname); //recorro todas las keys y las borro 
    }
    for (const firmadacokiname of Object.keys(req.signedCookies)) { //cookies firmadas 
        res.clearCookie(firmadacokiname, {signed: true});//signed: true es para que se guarde en el navegador, signed firmado 
    }
    res.clearCookie('server');
    res.send('cookie deleted');
})

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

//se debe probar por medio de peticiones http://localhost:3000/set y http://localhost:3000/ para ver que se guarda en el navegador
//usar postman o thunderclient para probar las peticiones 


