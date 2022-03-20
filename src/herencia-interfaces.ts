export {}
// Herencia de propiedades de una interfaz a otra 
enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama
}

interface Entity {
  id: number;
  title: string;
}

interface Album extends Entity {
  description: string;
}

interface Picture extends Entity {
  orientation: PhotoOrientation
}

const album: Album = {
  id: 1,
  title: 'Meetups',
  description: 'Community events'
}