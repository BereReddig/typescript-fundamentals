export {}
// 10, '10'
// let idUser: number | string;
// idUser = 10;
// idUser = '10';

// // Buscar username dado un Id
// function getUsernameById(id: number | string) {
//   //Logica de negocio, encontrar usuario
//   return 'elUsuario';
// }

// getUsernameById(20);
// getUsernameById('14');

// Alias de Tipos para TS, se usa la palabra 'type'
// es la union de 2 (o mas) tipos
type IdUser = number | string;
type UserName = string;

let idUser: IdUser;
idUser = 10;
idUser = '10';

// Buscar username dado un Id
function getUsernameById(id: IdUser): UserName {
  //Logica de negocio, encontrar usuario
  return 'elUsuario';
}

getUsernameById(20);
getUsernameById('14');

// Tipos Literales 
// Nos permite crear tipos personalizados
// 100x100, 500x500, 1000x1000
type SquareSize = '100x100' | '500x500' | '1000x1000';
// let smallPicture: SquareSize = '200x200'; //error
let smallPicture: SquareSize = '100x100';
let mediumPicture: SquareSize = '500x500';
let bigPicture: SquareSize = '1000x1000'; 
