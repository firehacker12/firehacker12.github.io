var Target;
var Time = 300;
var TimeCount = 0;
var RandomTime = 0;
var Counting = false;
var HighScore = 0;
var CurrentCritical = 0;
var Critical = 5;
var TimeScore = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  RandomTime = floor(random(10, Time));
  GenerateTarget();
}

function draw() {
  background(220);
  textSize(32);
  text("Time: " + TimeScore, 10, 32);
  text("HighScore: " + HighScore, 10, 64);
  text("Disks Needed: " + Critical, 10, 96);
  text("Disks Collected: " + CurrentCritical, 10, 128);
  line(0, (height/2)-60, width, (height/2)-60);
  if (!Counting) {
  	new TargetF().show();
  }
  if (RandomTime == TimeCount) {
    TimeCount = 0;
    Counting = false;
    RandomTime = floor(random(10, Time));
  }
  if (Counting) {
  	TimeCount++;
    
  }
  if (!Counting) {
    TimeScore+=.02;
    TimeScore = round(TimeScore*100);
    TimeScore = TimeScore/100;
  }
}

function mouseClicked() {
  var d = dist(mouseX, mouseY, Target.x, Target.y);
  
  if (d < 16) {
    Counting = true;
    CurrentCritical++;
    if (CurrentCritical == Critical) {
      CurrentCritical = 0;
      Restart();
    }
    
    GenerateTarget();
  }
}

function Restart() {
  if (TimeScore > HighScore) {
    HighScore = TimeScore;
  }
  TimeScore = 0;
  GenerateTarget();
}

function GenerateTarget() {
  var x = floor(random(8, width-8));
  var y = floor(random(((height/2)-60)+8, height-8));
  
  Target = createVector(x, y);
}

function TargetF() {
  this.show = function() {
    ellipse(Target.x, Target.y, 32, 32);
  }
}
