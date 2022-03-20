// Representa el tipo de valor que nunca ocurre
// Funciones que lanzan excepciones
// Funciones que nunca retornan un valor

//Type: never
function handleError(code: number, message: string): never {
  // logica de gestion de error
  throw new Error(`${message}. Code: ${code}`);
}

try {
  handleError(404, 'Not Found');
} catch(error) {}

function sumNumbers(limit: number): never {
  let sum = 0;
  while(true) {
    sum++;
  }
}