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

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const input = document.querySelector("#input-note");
    const notesContainer = document.querySelector("#notes-container");
    
    //Estado de las notas
    let notes = [];
    
    function generateId() {
        return '_' + Math.random().toString(36).substr(2, 9);
    }
    
    function renderNotes() {
        notesContainer.innerHTML = "";
        notes.forEach(note => {
            const noteElement = document.createElement("div");
            
            //Es una decision mia
            noteElement.dataset.id = note.id;
            
            const span = document.createElement("span");
            span.textContent = note.text;
            
            const button = document.createElement("button");
            button.classList.add("delete-btn");
            button.innerHTML = '<i class="bi bi-trash3"></i>';
            button.addEventListener("click", () => deleteNote(note.id));
            
            noteElement.appendChild(span);
            noteElement.appendChild(button);
            notesContainer.appendChild(noteElement);
        });
    }
    
    function deleteNote(id) {
        notes = notes.filter(note => note.id !== id);
        renderNotes();
    }
    
    form.addEventListener("submit", (event) => {
        //Prevenimos el comportamiento por defecto del formulario (osea que no se recargue la pagina)
        event.preventDefault();
        const noteText = input.value.trim();
        if (noteText) {
            // NO seria correcto manipular el HTML aca
            notes.push({ id: generateId(), text: noteText });
            input.value = "";
            renderNotes();
        }
    });
    
    renderNotes();
});
