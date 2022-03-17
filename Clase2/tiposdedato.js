const array = [1,2,3,4]

const diccionario = {
    nombre: "moises", //key:value ==> k,v
    apellido: "castro", 
    rol: "estudiante"
}
array.push(6) 

array = [] //no funciona da error porque es const, no puede ser vacio 


//así si es posible 
diccionario ["pais"] = "colombia" //agregamos valores a diccionario 
diccionario.provincia = "capital federal"

//esto no funciona da error porque es const
diccionario = {
    animales: perros
}
//declaración de funciones con la palabra reservada function 
function nombre (parametros){
    //contenido o cuerpo
    return 
}
function sumar (num1,num2){
    return num1+num2

}
function mostrarPlabra(p){console.log(p)} // no devuelve nada la declaración de una función 

//clouser o clausura 
function sumar (num1,num2){
    return num1+num2

}
console.log(sumar(4,5))//da 9
console.log(sumar("hola", "tyson"))//concatena holatyson
//el tipo de dato lo da según yo ingrese el valor

function cuentaDoble (num1,num2,operacion) { //operacion es una función 
    const result = operacion(num1,num2)
    const result2 = operacion(num1,num2)
    return result + result2
}
console.log(cuentaDoble(2,3, sumar)) 

function crearMultiplicador(multip){ //una función que cree otra función
    return function (n){
        return multip*n
    }
}

const doble = crearMultiplicador(2) 
const triple = crearMultiplicador(3) //rehusar codigo 

console.log(doble(2))
console.log(triple(2))

