var Player;

function setup() {
	createCanvas(6000, 600);
	Player = new PlayerFunction();
}

function draw() {
	background(37, 107, 219);
	Ground();
	Player.show();
	if (keyIsDown(32)) {
		Player.jump();
		console.log("Jumped");
	}
	Player.update();
}