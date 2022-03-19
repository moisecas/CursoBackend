//declarar clase usuario con sus atributos 

class usuario { //creacion
    constructor(nombres,apellidos,libros,mascotas) { //contenido
        this.nombre=nombres; //this, paralabra reservada para asignar los parametros del constructor
        this.apellido=apellidos;
        this.libro=libros;
        this.mascota=mascotas;  
       
    }
    verUsuario(){
        return `nombres: ${this.nombre} ${this.apellido}` 
    }
    verBookNombre(){
        return `Libro: ${this.libro} ${this.nombre}` 
    }
    countArray(){
        return this.mascota.length  
    }
    set addMascota(pet){
        this.mascota=pet; 
        return `mascotas: ${this.mascota}`     
            
    }
    get retornaMascota(){
        return this.mascota 
    }
}
const usuario1=new usuario("moises", "castro","the book", "aves") //le damos datos a la clase según sus keys del contenido
usuario1.addMascota = ["gato","aves"] 
usuario1.retornaMascota

console.log(usuario1)
console.log(usuario1.verUsuario()) 
console.log(usuario1.verBookNombre()) 
console.log(usuario1.countArray()) 

 

 
// otra opción de intento, puntos 1 y 2

// class usuario { //creacion
//     constructor(nombres,apellidos,libros,mascotas) { //contenido
//         this.nombre=nombres; //this, paralabra reservada para asignar los parametros del constructor
//         this.apellido=apellidos;
//         this.libro=libros;
//         this.mascota=mascotas;  
       
//     }
//     verUsuario(){
//         return `nombres: ${this.nombre}`
//     }
//     set addMascota(pet){
//         this.mascota=pet;      
            
//     }
//     get retornaMascota(){
//         return this.mascota 
//     }
// }
// const usuario1=new usuario("moises", "castro","the book", "aves") //le damos datos a la clase según sus keys del contenido
// usuario1.mascota = ["gato","aves"]
// console.log(usuario1)
// console.log(usuario1.verUsuario()) 