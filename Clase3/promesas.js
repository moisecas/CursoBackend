function dividir(dividiendo,divisor){
    if (divisor===0){
        throw new Error("no se puede dividir por cero")
    }
    return dividiendo/divisor
}
const resultado = dividir(4,2)
const resultado1= dividir(resultado,2) //necesito que resultado este listo para hacer la operación de resultado 1
