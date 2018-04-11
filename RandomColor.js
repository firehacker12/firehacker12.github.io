function setup() {
  createCanvas(windowWidth+10, windowHeight+10);
	Generate();
}

function draw() {
  //background(220);
}

function Generate() {
	var r = random(0, 255);
	var g = random(0, 255);
	var b = random(0, 255);
	
	background(r, g, b);
}
