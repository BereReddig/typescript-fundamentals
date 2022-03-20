// Type: Array 
// Notacion: []
// Explicito
let users: string[];
users = ['maria', 'pepe', 'martina'];
//users = [1, 'marcela', true]; //error

// Inferido
let otherUsers = ['andrea', 'julia', 'pepita'];
//otherUsers = [1, 'marcela', true]; //error

// Notacion: Array<Tipo>
let pictureTitles: Array<string>;
pictureTitles = ['favourite sunset', 'vacation time', 'landscape'];
//pictureTitles = [55, 'vacation time', true]; //error

// Accediendo a los valores en un array
console.log(' first user ', users[0]);

