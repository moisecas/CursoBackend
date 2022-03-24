//setTimeout
//función natia, no hace falta importarla. La función recibe un callback
//luego de un tiempo ejecuta la función 

//setInterval parecido al setTimeout

// let i = 0
// const timer = setInterval (()=> {
//     console.log(i++)
//     if (i>10){
//         clearInterval(timer)
//     }
// }, 500) //cuando la variable llega a 10 limpie el intervalo 

let i = 0
const timer = setTimeout (()=> {
    console.log("salgo de viaje")
    
    
}, 10_000) //espera 10 seg y me muestra el console.log 