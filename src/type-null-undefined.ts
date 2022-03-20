// Type: null
// Explicito
let nullVariable: null;
nullVariable = null;
//nullVariable = 1; //error

// Type: undefined
// Explicito
let undefinedVariable: undefined = undefined;
//undefinedVariable = 'test'; //error

// Null y Undefined como subtipos
// no funciona en modo estricto
let albumName: string;
// albumName = null; //error
// albumName = undefined; //error