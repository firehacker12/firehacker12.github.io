var Player;
var Level;

function setup() {
	createCanvas(6000, 600);
	Player = new PlayerFunction();
	Level = new LevelFunction();
	GenerateLevel(20, 600, height/2+200, 180);
	for (var i=0; i<30; i++) {
	var Random = floor(random(0, 20));
	if (Random <= 10) {Level[i] = 0;}
	else if (Random <= 15 && Random >=11) {Level[i] = 1;}
	else if (Random >= 16 && Random <=20) {Level[i] = 2;}
}

function draw() {
	background(37, 107, 219);
	Ground();
	Player.show();
	Player.update();
	Level.show();
	Level.moveLevel();
}

function keyPressed() {
	if (keyCode === 32) {
		Player.jump();
		console.log("Jumped");
	}
}
