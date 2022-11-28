let h = 600;  
let l = 600;
let button1, button2, button3;
let letters = [];
let randImg, tmp, bby;


function preload() {
  
    let a = loadImage('assets/a.png');
    let b = loadImage('assets/b.png');
    let e = loadImage('assets/e.png');
    let f = loadImage('assets/f.png');
    let g = loadImage('assets/g.png');
    let j = loadImage('assets/p.png');
    let p = loadImage('assets/q.png');
    let q = loadImage('assets/a.png');
    let r = loadImage('assets/r.png');
    let s = loadImage('assets/s.png');
    let v = loadImage('assets/v.png');
    let w = loadImage('assets/w.png');
    let y = loadImage('assets/y.png');
    bby = loadImage('assets/baby.png');
    letters = [a, b, e, f, g, j, p, q, r, s, v, w, y];
}

function setup() {
  
    createCanvas(l, h);
    background("#C0FDFB");
    
    textFont('Comic Sans MS');
    textSize(40);
    text("DRAWING LETTERS GAME!", 25, 65);
  
    image(random(letters), 0 ,100, 400, 500);
    
    button1 = createButton('Next Letter!');
    button1.position(475, 405);
    button1.size(100,50);
    button1.mousePressed(nxtLetter);
    
    button2 = createButton('Reset');
    button2.position(475, 465);
    button2.size(100,50);
    button2.mousePressed(reset);
    
    button3 = createButton('Main Menu');
    button3.position(475, 525);
    button3.size(100,50);
    button3.mousePressed(mainMenu);
}

function draw() {
  
    if (mouseIsPressed === true) {
        fill("red");
        ellipse (mouseX,mouseY, 20, 20);
        noStroke();
    }
  
    image(bby, 410, 150, 180, 180);
}
  
function nxtLetter() {
    
    tmp = randImg;
    randImg = random(letters);
    
    if(tmp == randImg) {
      randImg = random(letters);
    }
    
    image(randImg, 0 ,100, 400, 500);

}

function reset() {
  
    background("#C0FDFB");
    
    fill("black");
    textFont('Comic Sans MS');
    textSize(40);
    text("DRAWING LETTERS GAME!", 25, 65);
    
    image(randImg, 0, 100, 400, 500);
}

function mainMenu() {
  
    window.open('https://editor.p5js.org/yliu956/full/AtrcVGRzm') ;
}