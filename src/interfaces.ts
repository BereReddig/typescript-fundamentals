export {};
// mostrar fotografia
enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama
}

function showPicture(picture: {
  title: string, 
  date: string, 
  orientation: PhotoOrientation
}) {
  console.log(`[
    title: ${picture.title}, 
    date: ${picture.date}, 
    orientation: ${picture.orientation}
  ]`);
};

let myPic = {
  title: 'Test Title',
  date: '2020-03',
  orientation: PhotoOrientation.Landscape
}

showPicture(myPic);
showPicture({
  title: 'Another Title',
  date: '2020-20',
  orientation: PhotoOrientation.Portrait,
  //extra: 'test' //error
});

// esto lo podemos resolver mejor con una Interface
// lo hace mas facil de leer y mas claro
interface Picture {
  title: string;
  date: string;
  orientation: PhotoOrientation;
}

function showPicture2(picture: Picture) {
  console.log(`[
    title: ${picture.title}, 
    date: ${picture.date}, 
    orientation: ${picture.orientation}
  ]`);
};

showPicture2(myPic);

// No todas las propiedades de una interfaz son requeridas
// Establecemos una propiedad como opcional con el simbolo '?'
// despues del nombre
// ej

interface Picture2 {
  title?: string;
  date?: string;
  orientation?: PhotoOrientation;
}

// en una interface tambien podemos declarar q un tipo no debe ser modificable
// con la palabra readonly
interface User {
  readonly id: number,
  username: string,
  isPro: boolean
}

let user: User;
user = { id: 10, username: 'bereddig', isPro: true };
//user.id = 20; //error
