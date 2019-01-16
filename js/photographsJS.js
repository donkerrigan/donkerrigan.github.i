const fs = require('fs');

// Array of all images to be displayed
let theImages = [];
let portrait = [];
let landscape = [];
let nature = [];
let wildlife = [];

const portraitFolder = './photos/portrait/';
const landscapeFolder = './photos/landscape/';
const natureFolder = './photos/nature/';
const wildlifeFolder = './photos/wildlife/';

fs.readir(portraitFolder, (err, files) => {
    files.forEach(file => {
        portrait.push(file);
    });
});

fs.readir(landscapeFolder, (err, files) => {
    files.forEach(file => {
        landscape.push(file);
    });
});

fs.readir(natureFolder, (err, files) => {
    files.forEach(file => {
        nature.push(file);
    });
});

fs.readir(wildlifeFolder, (err, files) => {
    files.forEach(file => {
        wildlife.push(file);
    });
});

theImages.push("./photos/umbrella.jpg");

var p = theImages.length;
function showImage(type){
    var currentPhotos = [];
    switch(type){
        case "nature":
            currentPhotos = nature;
            break;
        case "landscape":
            currentPhotos = landscape;
            break;
        case "portrait":
            currentPhotos = portrait;
            break;
        case "wildlife":
            currentPhotos = wildlife;
             break;
        default:
            currentPhotos = nature;
    }
    for(q = 0; q < 5; q++){
        p = currentPhotos.length;
        const whichImage = Math.floor(Math.random()*(p-0));
        document.write('<img class="myImg" alt="" src="' + currentPhotos[whichImage] + '" style="width:100%;">');
        currentPhotos.splice(whichImage, 1);
    }
}