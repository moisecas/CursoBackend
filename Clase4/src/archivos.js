const fs = require('fs'); //con require importo 

fs.writeFile('prueba.txt', 'probando...', ()=>{}) //así como esta le falta un callback, se agrega el cb y listo
fs.readFile('prueba.txt', 'utf-8', (err, result)=>{
    if (err){
        console.log(err)
    }else {
        console.log(result)
    }//ahora si tengo garantizado que funcione, confirme si hay error y si no haga
}) //busque el archivo y esta escrito en este formato, requiere callback
console.log("txt creado") 
//callbacks en nodejs, primer argumento con el que se llama internamente, espera recibir un error primero y datos despues 


//manejo con try y catch y finally, el objetivo del backend es que el servidor resuelva todas las solicitudes 
try {
    fs.writeFileSync('prueba.txt', 'probando...'. repeat(3_000)) //cree
    const result = fs.readFileSync('prueba.txt', 'utf-8')//lea
    console.log(result) //muestre
}catch(err){ //capture error
    console.log(err)
}finally { //termine el proceso 
    console.log('termine')
}
//nodejs, monohilo, una sola lista 

//ahora con base a promesas 
fs.watchFile('prueba.txt', 'probando...'. repeat(3_000))
    .then(()=>{return fs.readFile('prueba.txt', 'utf-8')})
    .then ((datos)=>{
        console.log(datos)
    })
    .catch((err)=>{console.log(err)})
    .finally(()=>{console.log('terminé')})
console.log(10+10) 

//async, delegado al sistema operativo 
async function trabajarConArchivos(){
    try {
        await fs.promises.writeFileSync('prueba.txt', 'probando...'. repeat(3_000)) //cree
        const result = await fs.promises.readFile('prueba.txt', 'utf-8')//lea
        console.log(result) //muestre
    }catch(error){ //capture error
        console.log(error)
    }finally { //termine el proceso 
        console.log('termine')
    }
}

