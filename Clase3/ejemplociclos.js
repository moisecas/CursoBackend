
//un json es java script object notation un objeto de memoria en string, es diferente a un objeto de js

const diccionario = { //objeto de js, diccionario o array 
    nombre:"marian", 
    rol: "profe", 
    edad: 35,
    colorFavorito: "rojo"
}

console.log(diccionario); 
const {nombre} = diccionario //extrayendo el valor de campo nombre del diccionario 
console.log(nombre)

//arrays, diccionarios guardan los indices de la posición a medida que los creo 

const col=["a","b","c"]
console.log(col)
//posiciones de un diccionario 
for(const cosa in col){console.log(cosa)}
for(const cosa of col){console.log(cosa)}
Object.entries(col)
console.table(Object.entries(col)) //mostrar en tabla




//for in, recorre los valores en orden de un array
//for of 


