"use strict";
/*  Type: Tuple
- permiten expresar un arreglo con un numero fijo de elementos
- los tipos de datos son conocidos
Una tupla en TypeScript es un array de elementos que están tipados.
De esta manera cada vez que haya que insertar un elemento se validará
que dicho elemento coincida con el tipo de dato establecido en la tupla.
*/
// tupla con notacion: [Array<[tipo][tipo][tipo]>,...]
let matriz = [];
// Tupla con notacion: []
let userTuple;
userTuple = [1, 'bere'];
console.log('username ', userTuple[1]);
// Tuplas con varios valores
let userInfoTuple;
userInfoTuple = [2, 'paparazzi', true];
// Array de tuplas
let array = [];
array.push([1, 'sjdjasd']);
array.push([2, 'fghjh']);
array.push([3, 'ghfghfgh']);
console.log('array', array);
