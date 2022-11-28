var img;
function setup() {
  createCanvas(1000,1000);
  img = loadImage('tiedshoes.jpg');
}

function draw() {
 image(img,400,400, 500, 500);
}