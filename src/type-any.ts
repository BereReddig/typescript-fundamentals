//Type: Any
//Explicito
let idUser: any;
idUser = 1; //number
idUser = 'hello'; //string

// Inferido
let otherId;
otherId = 1; //number
otherId = 'hello'; //string

let surprise:any = 'hello world';
const result = surprise.substring(6);
console.log('result ', result);