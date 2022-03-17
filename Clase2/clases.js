//clases poo(paradigma de programación que propone que nuestro bloque de codigo se agrupe en objetos)
class cliente { //creacion
    constructor(nombre,fecha,direccion) { //contenido
        this.nombre=nombre; //this, paralabra reservada para asignar los parametros del constructor
        this.fechaNacimiento=fecha;
        this.direccion=direccion; 
    }
    verStringPresentacion(){
        return `nombre: ${this.nombre}`
    }
} 

const cliente1=new cliente("moises", "2022-17-03","san pacho") //le damos datos a la clase según sus keys del contenido
console.log(cliente1)
console.log(cliente1.verStringPresentacion()) 

