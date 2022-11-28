// sketch.js
let shoes;
let blocks;
let closet;
let desk;
let brushing;
let closetButton;
let deskButton;
let brushingButton;
let shoesButton;
let blocksButton;
let inShoesGame;
let inBlocksGame;
let inClosetGame;
let inDeskGame;
let inBrushingGame;
let closetBackButton;
let closetBacktoMenu;
let blocksBackButton;
let blocksBacktoMenu;
let brushingBackButton;
let brushingBacktoMenu;
let deskBackButton;
let deskBacktoMenu;
let shoesBackButton;
let shoesBacktoMenu;
let brush;
let teeth;
let circle1Trn;
let circle2Trn;
let circle3Trn;
let circle4Trn;
let circle5Trn;
let circle6Trn;
let circle7Trn;
let circle8Trn;
let circle9Trn;
let circle10Trn;
let circle11Trn;
let circle12Trn;
let circle13Trn;
let circle14Trn;
let circle15Trn;

let circleX = [15];
let circleY = [15];
let circleTrn = [15];



function hideMenuButtons() {
  closetButton.hide();
  deskButton.hide();
  brushingButton.hide();
  shoesButton.hide();
  blocksButton.hide();
}

function showMenuButtons() {
  closetButton.show();
  deskButton.show();
  brushingButton .show();
  shoesButton.show();
  blocksButton.show();
}

function preload() {
  // closet = loadImage("closet.jpg");
  desk = loadImage("desk.JPEG");
  brushing = loadImage("brushing.jpg");
  shoes = loadImage("shoes.png");
  blocks = loadImage("blocks.jpg");
}

function setup() {
  createCanvas(450, 450);
  inShoesGame = false;
  inBlocksGame = false;
  inClosetGame = false;
  inDeskGame = false;
  inBrushingGame = false;

  background(100, 100, 250);

  // image(closet, 10, 30, 120, 120);
  image(desk, 10, 30, 120, 120);
  image(brushing, 310, 30, 120, 120);
  image(shoes, 90, 245, 120, 120);
  image(blocks, 240, 245, 120, 120);
  
  push();
  fill('orange');
  textSize(27);
  text('press the buttons to start', 160, 60, 180, 100);

  /* if (!closetButton) {
    closetButton = createButton("Play Closet Game!");
    closetButton.position(10, 170);
    closetButton.size(120, 50);
  } */

  if (!deskButton) {
    deskButton = createButton("Play Desk Game!");
    deskButton.position(10, 170);
    deskButton.size(120, 50);
  }

  if (!brushingButton ) {
    brushingButton  = createButton("Play Brushing Game!");
    brushingButton .position(310, 170);
    brushingButton .size(120, 50);
  }
  
  if (!shoesButton) {
    shoesButton = createButton("Play Shoes Game!");
    shoesButton.position(90, 385);
    shoesButton.size(120, 50);
  }

  if (!blocksButton) {
    blocksButton = createButton("Play Blocks Game!");
    blocksButton.position(240, 385);
    blocksButton.size(120, 50);
  }

  brush = loadImage("brush.jpeg");
  teeth = loadImage("teeth.jpg");
  circle1Trn = 255;
  circle2Trn = 255;
  circle3Trn = 255;
  circle4Trn = 255;
  circle5Trn = 255;
  circle6Trn = 255;
  circle7Trn = 255;
  circle8Trn = 255;
  circle9Trn = 255;
  circle10Trn = 255;
  circle11Trn = 255;
  circle12Trn = 255;
  circle13Trn = 255;
  circle14Trn = 255;
  circle15Trn = 255;

  for(let i = 0; i < circleX.length; i++){
    circleX[i] = Math.floor(Math.random() * 430) + 120;
    circleY[i] = Math.floor(Math.random() * 190) + 140;
  }
}

function draw() {
 /*
 if (
    mouseX >= 10 &&
    mouseX <= 130 &&
    mouseY >= 170 &&
    mouseY <= 220 &&
    mouseIsPressed && !inClosetGame && !inBlocksGame && !inBrushingGame && !inDeskGame && !inShoesGame
  ) {
    inClosetGame = true;
    circle1Trn = 255;
  circle2Trn = 255;
  circle3Trn = 255;
  circle4Trn = 255;
  circle5Trn = 255;
  circle6Trn = 255;
  circle7Trn = 255;
  circle8Trn = 255;
  circle9Trn = 255;
  circle10Trn = 255;
  circle11Trn = 255;
  circle12Trn = 255;
  circle13Trn = 255;
  circle14Trn = 255;
  circle15Trn = 255;
  } */
   if (
    mouseX >= 10 &&
    mouseX <= 130 &&
    mouseY >= 170 &&
    mouseY <= 220 &&
    mouseIsPressed && !inClosetGame && !inBlocksGame && !inBrushingGame && !inDeskGame && !inShoesGame
  ) {
    inDeskGame = true;
     inBrushingGame = false;
     inShoesGame = false;
     inBlocksGame = false;

  } 
  else if (
    mouseX >= 310 &&
    mouseX <= 430 &&
    mouseY >= 170 &&
    mouseY <= 220 &&
    mouseIsPressed && !inClosetGame && !inBlocksGame && !inBrushingGame && !inDeskGame && !inShoesGame
  ) {
    inDeskGame = false;
     inBrushingGame = true;
     inShoesGame = false;
     inBlocksGame = false;
  } 
  else if (
    mouseX >= 90 &&
    mouseX <= 210 &&
    mouseY >= 385 &&
    mouseY <= 435 &&
    mouseIsPressed && !inClosetGame && !inBlocksGame && !inBrushingGame && !inDeskGame && !inShoesGame
  ) {
    inDeskGame = false;
     inBrushingGame = false;
     inShoesGame = true;
     inBlocksGame = false;
  } 
  else if (
    mouseX >= 240 &&
    mouseX <= 360 &&
    mouseY >= 385 &&
    mouseY <= 435 &&
    mouseIsPressed && !inClosetGame && !inBlocksGame && !inBrushingGame && !inDeskGame && !inShoesGame
  ) {
    inDeskGame = false;
     inBrushingGame = false;
     inShoesGame = false;
     inBlocksGame = true;
  }
  
  if (inShoesGame) {
     inDeskGame = false;
     inBrushingGame = false;
     inShoesGame = false;
     inBlocksGame = false;
    window.open("https://editor.p5js.org/egrant12/full/zamiMg-q3");
    // hideMenuButtons();  
     // ShoesGame();
  } 

  if (inBlocksGame) {
     inDeskGame = false;
     inBrushingGame = false;
     inShoesGame = false;
     inBlocksGame = false;
    window.open("https://editor.p5js.org/yliu956/full/RtSwWqJ8q");
    // hideMenuButtons();
    // BlocksGame();
  }

  /* if (inClosetGame) {
    hideMenuButtons();
    ClosetGame();
  } */

  if (inDeskGame) {
    inDeskGame = false;
     inBrushingGame = false;
     inShoesGame = false;
     inBlocksGame = false;
    window.open("https://editor.p5js.org/dhirajv/full/66yk9H--S");
    // hideMenuButtons();
    // DeskGame();
  }

  if (inBrushingGame) {
     inDeskGame = false;
     inBrushingGame = false;
     inShoesGame = false;
     inBlocksGame = false;
    window.open("https://editor.p5js.org/nickogle/full/mdzFwrszw");
    /*
    hideMenuButtons();
    BrushingGame();
    background(teeth);
  //cursor('8543536a3a8e7db5ce4f62931ef9e995--clipart.jpeg');
  noStroke();
  
  fill(98,42,15,circle1Trn);
  circle(80, 150, 20);
  
  fill(98,42,15,circle2Trn);
  circle(120, 170, 20);
  
  fill(98,42,15,circle3Trn);
  circle(170, 150, 20);
  
  fill(98,42,15,circle4Trn);
  circle(160, 200, 20);
  
  fill(98,42,15,circle5Trn);
  circle(200, 200, 20);
  
  fill(98,42,15,circle6Trn);
  circle(220, 170, 20);
  
  fill(98,42,15,circle7Trn);
  circle(260, 180, 20);
  
  fill(98,42,15,circle8Trn);
  circle(290, 160, 20);
  
  fill(98,42,15,circle9Trn);
  circle(315, 130, 20);
  
  fill(98,42,15,circle10Trn);
  circle(80, 185, 20);
  
  fill(98,42,15,circle11Trn);
  circle(120, 225, 20);
  
  fill(98,42,15,circle12Trn);
  circle(165, 241, 20);
  
  fill(98,42,15,circle13Trn);
  circle(205, 243, 20);
  
  fill(98,42,15,circle14Trn);
  circle(245, 231, 20);
  
  fill(98,42,15,circle15Trn);
  circle(275, 211, 20);
  
  image(brush, mouseX - 50, mouseY - 50, 100, 100);
  
  
  if(mouseX > 70 && mouseX < 90 && mouseY > 140 && mouseY < 160) {
    circle1Trn = 0;
  }
  if(mouseX > 110 && mouseX < 130 && mouseY > 160 && mouseY < 180) {
    circle2Trn = 0;
  }
  if(mouseX > 160 && mouseX < 180 && mouseY > 140 && mouseY < 160) {
    circle3Trn = 0;
  }
if(mouseX > 150 && mouseX < 170 && mouseY > 190 && mouseY < 210) {
    circle4Trn = 0;
  }
  if(mouseX > 190 && mouseX < 210 && mouseY > 190 && mouseY < 210) {
    circle5Trn = 0;
  }
  if(mouseX > 210 && mouseX < 230 && mouseY > 160 && mouseY < 180) {
    circle6Trn = 0;
  }
  if(mouseX > 250 && mouseX < 270 && mouseY > 170 && mouseY < 190) {
    circle7Trn = 0;
  }
  if(mouseX > 280 && mouseX < 300 && mouseY > 150 && mouseY < 170) {
    circle8Trn = 0;
  }
  if(mouseX > 305 && mouseX < 325 && mouseY > 120 && mouseY < 140) {
    circle9Trn = 0;
  }
  if(mouseX > 70 && mouseX < 90 && mouseY > 175 && mouseY < 195) {
    circle10Trn = 0;
  }
  if(mouseX > 110 && mouseX < 130 && mouseY > 215 && mouseY < 235) {
    circle11Trn = 0;
  }
  if(mouseX > 155 && mouseX < 175 && mouseY > 231 && mouseY < 251) {
    circle12Trn = 0;
  }
  if(mouseX > 195 && mouseX < 215 && mouseY > 233 && mouseY < 253) {
    circle13Trn = 0;
  }
  if(mouseX > 235 && mouseX < 255 && mouseY > 221 && mouseY < 241) {
    circle14Trn = 0;
  }
  if(mouseX > 265 && mouseX < 285 && mouseY > 201 && mouseY < 221) {
    circle15Trn = 0;
  }
  */
  }
}

function mainMenu() {
  showMenuButtons();
  setup();
  circle1Trn = 0;
  circle2Trn = 0;
  circle3Trn = 0;
  circle4Trn = 0;
  circle5Trn = 0;
  circle6Trn = 0;
  circle7Trn = 0;
  circle8Trn = 0;
  circle9Trn = 0;
  circle10Trn = 0;
  circle11Trn = 0;
  circle12Trn = 0;
  circle13Trn = 0;
  circle14Trn = 0;
  circle15Trn = 0;
  draw();
}

function ClosetGame() {
  clear();
  background(50, 100, 250);
  closetBacktoMenu = false;
  if (!closetBackButton) {
    closetBackButton = createButton("back");
    closetBackButton.position(50, 50);
    closetBackButton.size(50, 25);
  }

  closetBackButton.show();

  textSize(30);
  text("closet game", 200, 200);
  fill(255);

  if (
    mouseX >= 50 &&
    mouseX <= 100 &&
    mouseY >= 50 &&
    mouseY <= 75 &&
    mouseIsPressed
  ) {
    closetBacktoMenu = true;
  }

  if (closetBacktoMenu) {
    HideClosetButton();
    mainMenu();
  }
}

function HideClosetButton() {
  closetBackButton.hide();
}

function BlocksGame() {
  clear();
  background(50, 100, 250);
  blocksBacktoMenu = false;
  if (!blocksBackButton) {
    blocksBackButton = createButton("back");
    blocksBackButton.position(50, 50);
    blocksBackButton.size(50, 25);
  }

  blocksBackButton.show();

  textSize(30);
  text("blocks game", 200, 200);
  fill(255);

  if (
    mouseX >= 50 &&
    mouseX <= 100 &&
    mouseY >= 50 &&
    mouseY <= 75 &&
    mouseIsPressed
  ) {
    blocksBacktoMenu = true;
  }

  if (blocksBacktoMenu) {
    HideBlocksButton();
    mainMenu();
  }
}

function HideBlocksButton() {
  blocksBackButton.hide();
}

function BrushingGame() {
  clear();
  background(50, 100, 250);
  brushingBacktoMenu = false;
  if (!brushingBackButton) {
    brushingBackButton = createButton("back");
    brushingBackButton.position(50, 50);
    brushingBackButton.size(50, 25);
  }

  brushingBackButton.show();

  textSize(30);
  text("brushing game", 200, 200);
  fill(255);

  if (
    mouseX >= 50 &&
    mouseX <= 100 &&
    mouseY >= 50 &&
    mouseY <= 75 &&
    mouseIsPressed
  ) {
    brushingBacktoMenu = true;
  }

  if (brushingBacktoMenu) {
    HideBrushingButton();
    mainMenu();
  }
}

function HideBrushingButton() {
  brushingBackButton.hide();
}

function DeskGame() {
  clear();
  background(50, 100, 250);
  deskBacktoMenu = false;
  if (!deskBackButton) {
    deskBackButton = createButton("back");
    deskBackButton.position(50, 50);
    deskBackButton.size(50, 25);
  }

  deskBackButton.show();

  textSize(30);
  text("desk game", 200, 200);
  fill(255);

  if (
    mouseX >= 50 &&
    mouseX <= 100 &&
    mouseY >= 50 &&
    mouseY <= 75 &&
    mouseIsPressed
  ) {
    deskBacktoMenu = true;
  }

  if (deskBacktoMenu) {
    HideDeskButton();
    mainMenu();
  }
}

function HideDeskButton() {
  deskBackButton.hide();
}

function ShoesGame() {
  clear();
  background(50, 100, 250);
  shoesBacktoMenu = false;

  if (!shoesBackButton) {
    shoesBackButton = createButton("back");
    shoesBackButton.position(50, 50);
    shoesBackButton.size(50, 25);
  }

  shoesBackButton.show();

  textSize(30);
  text("shoes game", 200, 200);
  fill(255);

  if (
    mouseX >= 50 &&
    mouseX <= 100 &&
    mouseY >= 50 &&
    mouseY <= 75 &&
    mouseIsPressed
  ) {
    shoesBacktoMenu = true;
  }

  if (shoesBacktoMenu) {
    HideShoesButton();
    mainMenu();
  }
}

function HideShoesButton() {
  shoesBackButton.hide();
}


