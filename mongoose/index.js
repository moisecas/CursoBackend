import {MongoClient} from 'mongodb';

const host = 'localhost'; 
const port= 27017; 

const username = 'root'; 
const password = 'root'; 
const uri= `mongodb://${host}:${port}/test?authSource=admin`;

const client = new MongoClient(uri,
     {useNewUrlParser: true,
     useUnifiedTopology: true,
    authSource: 'admin',
    auth:{
        user: username,
        password: password
    }    
});

await client.connect(); 
const db = client.db('ecommerce'); 
const dbpersonas= db.collection('productstdatas');
const personas = await dbpersonas.find({}).toArray();
console.log(personas);
await client.close();  
     

     
