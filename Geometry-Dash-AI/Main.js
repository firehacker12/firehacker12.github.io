var Player;
var Level;

function setup() {
	createCanvas(6000, 600);
	Player = new PlayerFunction();
	Level = new LevelFunction();
	Level.generateSpikes();
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
