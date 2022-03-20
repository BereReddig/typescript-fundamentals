console.log('hola platzi haha!')

// Type: Number
// Explicito
let phone: number;
phone = 545641;
// phone = 'hola'; //eror

// Inferido
let phoneNumber = 456454;
// phoneNumber = '465465'; //eror
// phoneNumber = false;  //error

let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// Type: Boolean
// Explicito
let isPro: boolean;
isPro = true;

//isPro = 1; //error

// Inferido
let isUserPro = false;
isUserPro = true;
//isUserPro = 10; //error

// Type: String
// Explicito
let userName: string = 'luis';
userName =  "pedro";
//userName = true; //error

// Type: Template String ``
// Explicito
let userInfo: string;
userInfo = `
    User Info:
    User Name: ${userName}
`;

console.log('user Info: ', userInfo);

