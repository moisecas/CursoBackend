function dividir(dividiendo,divisor){
    if (divisor===0){
        throw new Error("no se puede dividir por cero")
    }
    return dividiendo/divisor
}
const resultado = dividir(4,2)
const resultado1= dividir(resultado,2) //necesito que resultado este listo para hacer la operación de resultado 1, no puedo ejecutar la segunda si la primera no se termino
console.log(resultado1)

let datos 
const json = fetch('http://jsonlaceholder.typicode.com/post/1')//hago el fetch me devuelve la promesa, busca esto 
    .then(function (res){
        return res.json()//cuando la promesa este resuelta voy a hacer esto, extrae los datos de la promesa 
    })
    .then(function(obj){ //a esa promesa cuando se resuelva 
        console.log(obj)
        datos = obj // el resultado guardalo 
    })

    


