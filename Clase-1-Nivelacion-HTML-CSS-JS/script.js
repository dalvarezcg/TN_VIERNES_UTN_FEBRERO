//Let y Const NO tienen hoisting
//console.log(nombre)

//Ambitos/Scope
//Ambito global
/* 
if(true){
    
    //Ambito local
    let nombre = 'juan'
}

console.log(nombre) */

/* 
let nombre = 'x'
{
    nombre = 'b'
    {
        let nombre = 'c'
        console.log(nombre)
    }
    console.log(nombre)
}
console.log(nombre) 
*/

/* 
Number('pepe') - Number('hola')
NaN - NaN
NaN

console.log('pepe' - 'hola') */

/* let nombre = []

if(nombre){
    console.log('Hay nombre')
}
else{
    console.log('No hay nombre')
} */

/* if(true === 1){
    console.log('verdadero')
}
else{
    console.log('falso')
} */
/* console.log('pepe' || 'juan')

console.log(1 || NaN) //NaN

let enviroment = {}
let PORT = enviroment.port || 3000
console.log(PORT)

console.log('pepe' && NaN) */

/* let nombre = 'pepe'

//ELSE IF MODERNO
if(!nombre){
    console.log('Error no hay nombre')
}
else if(nombre === 'pepe'){
    console.log('Bienvenido admin')
}
else {
    console.log('Bienvenido ' + nombre)
} */

//ELSE IF ANIDADO A LA ANTIGUA
//Else if hell
/* if(!nombre){
    console.log('Error no hay nombre')
}
else{
    if(nombre === 'pepe'){
        console.log('Bienvenido admin')
    }
    else {
        console.log('Bienvenido ' + nombre)
    }
}
 */

