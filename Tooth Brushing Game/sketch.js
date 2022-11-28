let brush;
let teeth;
let goodJob;
let goodJobTrn;
let backButton;
let playAgain;


let h = 295;
let k = 85;
let a = 246;
let b = 180;



let circleX = [15];
let circleY = [15];
let circleTrn = [15];


function preload() {
  brush = loadImage("brush.jpeg");
  teeth = loadImage("teeth.jpg");
   goodJobTrn = 0;
   goodJob = loadImage("goodjob.jpg");

}


function setup() {
  
  createCanvas(600, 400);
  for (let i = 0; i < 15; i++) {
    circleX[i] = Math.floor(Math.random() * 600);
    circleY[i] = Math.floor(Math.random() * 400);
  
  
    let p = Math.pow((circleX[i]-h), 2) / Math.pow(a, 2) +       Math.pow((circleY[i]-k), 2) / Math.pow(b, 2);
    if(p >= 1 || circleY[i] < 85) {
      i--;
    }
    backButton = createButton("Back");
    playAgain = createButton("Play again");
    backButton.position(230,380);
    playAgain.position(290,380);
    backButton.hide();
    playAgain.hide();
    backButton.mousePressed(goBack);
    playAgain.mousePressed(newLevel);
    
  }
}

function draw() {
  background(teeth);
  //cursor('8543536a3a8e7db5ce4f62931ef9e995--clipart.jpeg');
  noStroke();
  
  push();
  tint(255, goodJobTrn);
  image(goodJob, 0, 0, 600, 400);
  pop();
  
  for(let i = 0; i < 15; i++) {
    fill(98,42,15, circleTrn[i]);
    circle(circleX[i], circleY[i], 20); 
    }
  image(brush, mouseX - 50, mouseY - 50, 100, 100);
  
  for(let i = 0; i < 15; i++) {
    if(mouseX > (circleX[i]-10) && mouseX < (circleX[i]+10) && mouseY > (circleY[i]-10) && mouseY < (circleY[i]+10))
      circleTrn[i] = 0;
  }
  
  if ((circleTrn[1] == 0) && (circleTrn[2] == 0) && (circleTrn[3] == 0) && (circleTrn[4] == 0) && (circleTrn[5] == 0) && (circleTrn[6] == 0) && (circleTrn[7] == 0) && (circleTrn[8] == 0) && (circleTrn[9] == 0) && (circleTrn[10] == 0) && (circleTrn[11] == 0) && (circleTrn[12] == 0) && (circleTrn[13] == 0) && (circleTrn[14] == 0)) {
    goodJobTrn = 255;
    backButton.show();
    playAgain.show();
  } 

  }

function goBack() {
  window.open('https://editor.p5js.org/yliu956/full/AtrcVGRzm');
}

function newLevel() {
  window.open('https://editor.p5js.org/nickogle/full/mdzFwrszw');
}


