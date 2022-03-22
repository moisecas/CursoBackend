//funciones como argumentos de otras funciones, callbacks 

function hacerAlgoTresVeces(algo){
    algo()
    algo()
    algo()
}
//algo es el callback del a funcion hacer algo 3 veces 

//funciones anonimas 
hacerAlgoTresVeces(function(){console.log("hola")}) //me muestra 3 veces hola 