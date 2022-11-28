var img;
var img2;
var img3;
let button;
let button2;
let button3;
let playAgain;
let backButton;
let LoopAroundAndPull;
let CrossLaces;
let MakeBunnyEars;
let GoodJob;
let transparancy;
function setup() {
  createCanvas(600,600);
  img = loadImage('tying-shoes-clipart-6.jpg');
  img2 = loadImage('maxresdefault.jpg');
  img3 = loadImage('tied shoes.jpg');
   button = createButton('Cross Laces');
  button.position(200, 250);
  button3 = createButton('Make Bunny Ears');
  button3.position(200, 450);
  button2 = createButton('Loop Around And Pull');
  button2.position(200, 75);
  playAgain = createButton("Play again");
  playAgain.position(400,50);
  playAgain.mousePressed(newLevel);
  backButton = createButton("Back");
  backButton.position(500,50);
  backButton.mousePressed(goBack);
  CrossLaces=false;
  MakeBunnyEars=false;
  LoopAroundAndPull=false;
  GoodJob = loadImage('Good Job.jpg');
  transparancy = 0;

}
function step1(){
  CrossLaces=true;
  
}
function step2(){
  if (CrossLaces == true) {
    MakeBunnyEars = true
  }
}
function step3(){
  if (CrossLaces == true&& MakeBunnyEars == true){
    LoopAroundAndPull = true}
}

function draw() {
   background(50, 100, 250);
 image(img,0,200, 200, 150);
  image(img2,0,400,200,150 );
  image(img3,0,0,200,150);
  push();
  tint(255,transparancy)
  image(GoodJob,0,0,600,600);
  pop();
  button2.mousePressed(step3);
  button.mousePressed(step1);
  button3.mousePressed(step2);
  if (CrossLaces == true && MakeBunnyEars == true && LoopAroundAndPull == true){
    transparancy = 255;
    button.hide();
    button2.hide();
    button3.hide();
  } 
  push();
  fill('orange');
  textSize(30);
  text('press the buttons in order of tying shoes', 300, 250, 300, 100);
  pop();
}

function newLevel() {
  window.open('https://editor.p5js.org/egrant12/full/zamiMg-q3');
}
function goBack() {
  window.open('https://editor.p5js.org/yliu956/full/AtrcVGRzm');
}

