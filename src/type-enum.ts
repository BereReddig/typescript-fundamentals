// Orientacion para fotografias
// const landscape = 0;
// const portrait = 1;
// const square = 2;
// const panorama = 3;

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama
}

const landscape: PhotoOrientation = PhotoOrientation.Landscape;
console.log('landscape ', landscape);