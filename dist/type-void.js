"use strict";
// Void: es lo opuesto de any
// representa la ausencia de tipo
// comunmente se usa como tipo de retorno de funciones
// Explicito
function showInfo(user) {
    console.log('User Info ', user.id, user.username, user.firstname);
}
showInfo({ id: 1, username: 'berereddig', firstname: 'berenice' });
//Inferido
function showFormattedInfo(user) {
    console.log('User Info ', `
    id: ${user.id}
    username: ${user.username}
    firstname: ${user.firstname}
  `);
}
showFormattedInfo({ id: 1, username: 'berereddig', firstname: 'berenice' });
// Type: Void, como tipo de dato en una variable
let unusable;
//unusable = null; //error
unusable = undefined;
