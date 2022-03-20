export {}

let username: any;
username = 'berereddig';

// Assertion Type:  Mecanismo de conversión de tipos de datos
// permite definir el tipo de dato para poder por ej trabajar con las 
// funciones q corresponde a cada tipo de dato

// sintaxis <type> angle bracket 
let message: string = (<string>username).length;

// sintaxis as: variable as type
let message2: string = (username as string).length;
