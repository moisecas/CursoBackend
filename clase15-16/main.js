import knex from "knex"; 

const dbconfig={
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '',
    database: 'registro'
}

const dbconfigstring = `mysql://<user>:<password>@<host>:<33006>/<registro>`;
const knexconfig = {
    client: 'mysql',
    connection: dbconfig  
}
const cliente = knex(knexconfig); 

knex.shcema.createTable('tabla_personas', (table)=>{ //crear tabla, nombre  tabla, callback 
    //datos de la tabla
    table.increments('id').primary(); //tipo numerico autoincremental 
    table.string('nombre').notNullable();
    table.string('apellido').notNullable();
    table.string('email').notNullable();
    table.string('password').notNullable();
    table.string('foto').notNullable();
    table.boolean('activo').notNullable();
    table.boolean('admin').notNullable();
}) //usamos promesas para darle manejo a los errores
    .then(()=>{
    console.log('tabla creada') //si se crea la tabla se ejecuta el then 
    })
    .finally(()=>{
        knex.destroy(); //cerrar conexion 
    })