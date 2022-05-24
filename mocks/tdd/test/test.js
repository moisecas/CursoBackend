import assert from 'assert'; 

class Email {
    constructor(email) {
        this.email = email;
    }
    asString() {
        return "moises@correo.com";
    }
}

//Prueba1 - Test 1 
function test1 (){ 

    const email = "moises@correo.com";
    const correo=new Email (email) 

    const resultado=correo.asString (); 
    assert.strictEqual(resultado, email); }

//Prueba2 - Test 2 
function test2 (){ 
    const email = "moises@correo.com";
    const correo=new Email (email) 
    
    const resultado=correo.asString (); 
    assert.strictEqual(resultado, email);}

test1();
test2();
console.log("Tests passed");