"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// mostrar fotografia
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
function showPicture(picture) {
    console.log(`[
    title: ${picture.title}, 
    date: ${picture.date}, 
    orientation: ${picture.orientation}
  ]`);
}
;
let myPic = {
    title: 'Test Title',
    date: '2020-03',
    orientation: PhotoOrientation.Landscape
};
showPicture(myPic);
showPicture({
    title: 'Another Title',
    date: '2020-20',
    orientation: PhotoOrientation.Portrait,
    //extra: 'test' //error
});
function showPicture2(picture) {
    console.log(`[
    title: ${picture.title}, 
    date: ${picture.date}, 
    orientation: ${picture.orientation}
  ]`);
}
;
showPicture2(myPic);
let user;
user = { id: 10, username: 'bereddig', isPro: true };
//user.id = 20; //error
