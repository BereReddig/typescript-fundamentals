"use strict";
// Crear una fotografia
// function createPicture(title, date, size) {
//   title
// }
// Usamos TS, definimos tipos para parametros
// function createPicture(title: string, date: string, size: SquareSize) {
//   // se crea la fotografia
//   console.log('create picture using ', title, date, size);
// }
// createPicture('My birthday', '2020-03-10', '500x500');
// Parametros opcionales en funciones con '?'
function createPicture(title, date, size) {
    // se crea la fotografia
    console.log('create picture using ', title, date, size);
}
// en este caso todos los parametros son opcionales
createPicture('Colombia Trip', '2020-03', '500x500');
createPicture('Colombia Trip', '2020-03');
createPicture('Colombia Trip');
createPicture();
// Flat Array Functions
let createPic = (title, date, size) => {
    return { title, date, size };
};
const picture = createPic('platzi session', '2020-03', '100x100');
console.log('picture ', picture);
