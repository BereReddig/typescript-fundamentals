"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// definimos tipos para parametros requeridos
function createPicture1(title, date, size) {
    // se crea la fotografia
    console.log('create picture using ', title, date, size);
}
createPicture1('My birthday', '2020-03-10', '500x500');
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
// Tipo de retorno con TypeScript
function handleError(code, message) {
    // procesamiento del codigo y del mensaje
    if (message === 'error') {
        throw new Error(`${message}. Code error: ${code}`);
    }
    else {
        return 'An error has ocurred';
    }
}
let result = handleError(200, 'OK'); // string
console.log('result', result);
result = handleError(404, 'error'); // never hace referencia a lanzar un error
