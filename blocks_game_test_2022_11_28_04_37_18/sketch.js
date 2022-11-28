// sketch.js
// https://editor.p5js.org/yliu956/full/RtSwWqJ8q

// for background 
let bg; 

// for buttons 
let blocksBackButton, playAgainButton, blocksBacktoMenu;

// for text;
let goodJobTrn;

// for squares
let squareTrn = [3];
let squareR = [3];
let squareG = [6];
let squareB = [6];
let onSquare = false; 
let square2X, square2Y, square3X, square3Y, sideLength;
let squareClear;

// for circles 
let circleTrn = [3];
let circleR = [3];
let circleG = [6];
let circleB = [6];
let onCircle = false; 
let circle2X, circle2Y, circle3X, circle3Y, diameter;
let circleClear;


// for rectangles
let rectTrn = [3];
let rectR = [3];
let rectG = [6];
let rectB = [6];
let onRect = false; 
let rec2X, rect2Y, rect3X, rect3Y, length, width;
let rectClear;

function setup() {
  createCanvas(600, 600);

  // background image 
  bg = loadImage('room.jpg');

  blocksBacktoMenu = false; 
  squareClear = false; 
  circleClear = false; 
  rectClear = false; 
  
  if (!blocksBackButton) {
    blocksBackButton = createButton("back");
    blocksBackButton.position(50, 50);
    blocksBackButton.size(50, 25);
  }

  if (!playAgainButton) {
    playAgainButton = createButton("play again");
    playAgainButton.position(300, 500);
    playAgainButton.size(100, 25);
  }

  playAgainButton.hide();

  goodJobTrn = 0;


  // for squares

  /* kind of weird that this happens but if I do not initialize the color array outside of the loop it gives me an error so 
  I decided to initialize it in the line below, the colors will be randomized in the loop so these are just placeholders */
  squareR = [0, 0, 0];           
  sqiareG = [0, 0, 0];
  squareB = [0, 0, 0];

  for(let i = 0; i < 3; i ++) {
    squareTrn[i] = 255;

    let R = Math.floor(Math.random() * 255);
    let G = Math.floor(Math.random() * 255);
    let B = Math.floor(Math.random() * 255);
    squareR[i] = R;
    squareG[i] = G;
    squareB[i] = B;

  }


  square2X = 120;
  square2Y = 270;
  square3X = 500; 
  square3Y = 50;
  sideLength = 60;


  // for circles 
  circleR = [0, 0, 0];           
  sqiareG = [0, 0, 0];
  circleB = [0, 0, 0];

  for(let i = 0; i < 3; i ++) {
    circleTrn[i] = 255;

    let R = Math.floor(Math.random() * 255);
    let G = Math.floor(Math.random() * 255);
    let B = Math.floor(Math.random() * 255);
    circleR[i] = R;
    circleG[i] = G;
    circleB[i] = B;

  }

  circle2X = 100;
  circle2Y = 150;
  circle3X = 400; 
  circle3Y = 100;
  diameter = 60;


  // for rectangles 
  rectR = [0, 0, 0];           
  rectG = [0, 0, 0];
  rectB = [0, 0, 0];

  for(let i = 0; i < 3; i ++) {
    rectTrn[i] = 255;

    let R = Math.floor(Math.random() * 255);
    let G = Math.floor(Math.random() * 255);
    let B = Math.floor(Math.random() * 255);
    rectR[i] = R;
    rectG[i] = G;
    rectB[i] = B;

  }

  length = 80;
  width = 40;
  rect2X = 300 + (100-length)/2;
  rect2Y = 350 + (100 - width)/2;
  rect3X = 500; 
  rect3Y = 150;


}

function draw() {
  background(bg);

  push();
  textSize(30);
  fill(Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), goodJobTrn);
  text("GOOD JOB! YOU HAVE COMPLETED THE GAME", 370, 50, 200, 200);
  pop();

   if (
    mouseX >= 50 &&
    mouseX <= 100 &&
    mouseY >= 50 &&
    mouseY <= 75 &&
    mouseIsPressed
  ) {
    blocksBacktoMenu = true;
  } else blocksBacktoMenu = false; 

  if (blocksBacktoMenu) {
    // blocksBackButton.hide()
    blocksBacktoMenu = false; 
    mainMenu();
  } 

  // for squares 
  fill(squareR[0], squareG[0], squareB[0], squareTrn[0]);
  square(100, 250, 100);
  fill(squareR[1], squareG[1], squareB[1], squareTrn[1]);
  square(square2X, square2Y, sideLength);
  push();
  noStroke();
  fill(squareR[2], squareG[2], squareB[2], squareTrn[2]);
  square(square3X, square3Y, sideLength);
  pop();
   
  if(mouseX > square3X && mouseX < square3X + 60 && mouseY > square3Y && mouseY < square3Y + 60)  {
    onSquare = true;
    onCircle = false;
    onRect = false;
  }

  if(!(mouseX > square3X && mouseX < square3X + 60 && mouseY > square3Y && mouseY < square3Y + 60)) {
    onSquare = false; 
  }

  
  
  if(onSquare && mouseIsPressed) {
    square3X = mouseX - 30;
    square3Y = mouseY - 30;
    mouseReleased();
  }


  // for circles 
  fill(circleR[0], circleG[0], circleB[0], circleTrn[0]);
  square(50, 100, 100);
  fill(circleR[1], circleG[1], circleB[1], circleTrn[1]);
  circle(circle2X, circle2Y, diameter);
  push();
  noStroke();
  fill(circleR[2], circleG[2], circleB[2], circleTrn[2]);
  circle(circle3X, circle3Y, diameter);
  pop();
  
  let p = Math.pow((mouseX - circle3X), 2) / Math.pow(diameter / 2 , 2) + Math.pow((mouseY - circle3Y), 2) / Math.pow(diameter / 2 , 2);
  if(p <= 1) {
    onCircle = true;
    onSquare = false; 
    onRect = false;
  }

  if(p > 1) {
    onCircle = false;
  }
  
  if(onCircle && mouseIsPressed) {
    circle3X = mouseX;
    circle3Y = mouseY;
    mouseReleased();
  }


  // for rectangles
  fill(rectR[0], rectG[0], rectB[0], rectTrn[0]);
  rect(300, 350, 100);
  fill(rectR[1], rectG[1], rectB[1], rectTrn[1]);
  rect(rect2X , rect2Y, length, width);
  push();
  noStroke();
  fill(rectR[2], rectG[2], rectB[2], rectTrn[2]);
  rect(rect3X, rect3Y, length, width);
  pop();
  
  if(mouseX > rect3X && mouseX < rect3X + width && mouseY > rect3Y && mouseY < rect3Y + length)  {
    onRect = true;
    onCircle = false;
  } else {
    onRect = false; 
  }

  
  if(onRect && mouseIsPressed) {
    rect3X = mouseX - 30;
    rect3Y = mouseY - 15;
    mouseReleased();
  }

  if(squareClear && circleClear && rectClear) {
    playAgainButton.show();
    
    goodJobTrn = 255;
    
    // playAgainButton.mousePressed(playAgain());               

    
    // couldn't get the built in function to work so here is a work around to get the play again button to function properly 
    if(FindPoint(300, 400, 500, 525, mouseX, mouseY) && mouseIsPressed) {
      playAgain();
    }
  }

  fill('white');
  rect(50, 450, 150, 100);
  fill('black');
  textSize(20);
  textAlign(CENTER);  
  text("place the shapes in the corresponding boxes", 50, 450, 150, 100);


}

function mouseReleased() {
  // for squares 
  
  if(FindPoint(square2X, square2Y, square2X + sideLength, square2Y + sideLength, square3X, square3Y)  && !mouseIsPressed ||
     FindPoint(square2X, square2Y, square2X + sideLength, square2Y + sideLength, square3X + sideLength, square3Y)  && !mouseIsPressed ||
     FindPoint(square2X, square2Y, square2X + sideLength, square2Y + sideLength, square3X, square3Y + sideLength)  && !mouseIsPressed ||
     FindPoint(square2X, square2Y, square2X + sideLength, square2Y + sideLength, square3X + sideLength, square3Y + sideLength)  && !mouseIsPressed) {

    squareTrn[2] = 0;
    squareR[1] = squareR[2];
    squareG[1] = squareG[2];
    squareB[1] = squareB[2];
    squareClear = true; 
     }
  
  /* if((onSquare && square3X > square2X && square3X < square2X + sideLength && square3Y > square2Y && square3Y < square2Y + sideLength && !mouseIsPressed) || 
    (onSquare && square3X > square2X && square3X < square2X + sideLength && square3Y + sideLength > square2Y && square3Y + sideLength < square2Y + sideLength && !mouseIsPressed) ||
    (onSquare && square3X + sideLength > square2X && square3X + sideLength < square2X + sideLength && square3Y > square2Y && square3Y < square2Y + sideLength && !mouseIsPressed) ||
    (onSquare && square3X + sideLength > square2X && square3X + sideLength < square2X + sideLength && square3Y + sideLength > square2Y && square3Y + sideLength < square2Y + sideLength && !mouseIsPressed)) {
    squareTrn[2] = 0;
    squareR[1] = squareR[2];
    squareG[1] = squareG[2];
    squareB[1] = squareB[2];
  } */


  // for circles
  let p = Math.pow((circle3X - circle2X), 2) / Math.pow(diameter / 2 , 2) + Math.pow((circle3Y - circle2Y), 2) / Math.pow(diameter / 2 , 2);
  if(p <= 1 && !mouseIsPressed) {
    circleTrn[2] = 0;
    circleR[1] = circleR[2];
    circleG[1] = circleG[2];
    circleB[1] = circleB[2];
    circleClear = true; 
  }


  // for rectangles
  if(FindPoint(rect2X, rect2Y, rect2X + length, rect2Y + width, rect3X, rect3Y)  && !mouseIsPressed ||
  FindPoint(rect2X, rect2Y, rect2X + length, rect2Y + width, rect3X + length, rect3Y)  && !mouseIsPressed ||
  FindPoint(rect2X, rect2Y, rect2X + length, rect2Y + width, rect3X, rect3Y + width)  && !mouseIsPressed ||
  FindPoint(rect2X, rect2Y, rect2X + length, rect2Y + width, rect3X + length, rect3Y + width)  && !mouseIsPressed) {

 rectTrn[2] = 0;
 rectR[1] = rectR[2];
 rectG[1] = rectG[2];
 rectB[1] = rectB[2];
 rectClear = true; 
  }



}


function FindPoint(x1, y1, x2, y2, x, y) {
  if(x > x1 && x < x2 && y > y1 && y < y2){
    return true;
  }
  return false;
}

function mainMenu() {
  blocksBackButton.show();
  window.close();
  window.open('https://editor.p5js.org/yliu956/full/AtrcVGRzm');
}

function playAgain() { 
  window.close();
  window.open('https://editor.p5js.org/yliu956/full/RtSwWqJ8q');
}