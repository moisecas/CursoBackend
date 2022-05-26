import fs from 'fs'; 
function cargarcredenciales(ruta){

    const archivo = fs.readFileSync(ruta, 'utf8');
    const credenciales = {};
    const pares = archivo.split('\n'); 
    for (const par of pares) {
        const [key, value] = par.split('=');
        credenciales[key] = value;
    }
    return credenciales;
}
//cargar credenciales de la base de datos 
const credenciales = cargarcredenciales('./credenciales.txt');
console.log(credenciales)   

