// Obra por: Victor Vasarely
//video viejo
// https://youtu.be/pYogkmIOtV4?si=eZ9JflKfs8-QcHnX
//video nuevo
//https://youtu.be/O9hKCz__Fts?si=v16D9GAAIvmGTRth

let cant = 10;
let tam = 50;
let posX = 1996/4;
let posY = 400/4;
let _posX = 935/4 + 935/2;
let _posY = 400/4 + 400/2;
let colorRect1, colorRect2, colorRect3, colorRect4;
let img;
function setup() {
createCanvas(800, 400);
 rectMode(CENTER);
  colorRect1 = color(100,0,0);
  colorRect2 = color(0,100,0);
  colorRect3 = color(100,100,0);
  colorRect4 = color(0,0,100);
}
function preload() {
    img = loadImage('data/DVA.jpg');
}

function draw() {
background(200);
 image(img, 0, 0, 400, 400);
 iniciarVar();
  dibujarCubito(1999,400,933/4 + 933/2);
}
