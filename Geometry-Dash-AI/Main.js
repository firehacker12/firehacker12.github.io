var player;

function setup() {
	createCanvas(6000, 600);
	player = new Player();
}

function draw() {
	background(37, 107, 219);
	Ground();
	player.show();

	if (keyIsDown(32)) {
		player.jump();
	}
	player.update();



}