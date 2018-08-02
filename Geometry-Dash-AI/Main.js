var Player;
var Level;
var Spikes = [];
var Scale = 40;
var Level = [];

function setup() {
	createCanvas(6000, 600);
	Player = new PlayerFunction();
	Level = new LevelFunction();
	GenerateLevel(20, 600, height/2+200, 180);
	/*for (var i=0; i<30; i++) {
		var Random = floor(random(0, 20));
		if (Random <= 10) {Level[i] = 0;}
		else if (Random <= 15 && Random >=11) {Level[i] = 1;}
		else if (Random >= 16 && Random <=20) {Level[i] = 2;}
	}*/
	
	for (var i=0; i<LevelLength; i++) {
		var Random = ceil(random(0, 3));
		Level[i] = Random;
	}
}

function draw() {
	background(37, 107, 219);
	Ground();
	Player.show();
	Player.update();
	Player.detectCollision();
	if (keyIsDown(32)) {
		Player.jump();
	}
	Level.show();
	Level.moveLevel();
}
