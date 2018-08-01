class Player{
	constructor() {
		this.pos = createVector(30, height/2 + 160)
		this.vel = createVector(0, 0)
		this.gravity = 1;
		this.acc = createVector(0, this.gravity*.1)
		this.jumping = false;
	}

	show() {
		fill(200, 0, 0);
		rect(this.pos.x, this.pos.y, 40, 40);
	}

	jump() {
		if (!this.jumping) {
			this.vel.y = -12;
			print('Jumped!')
		}
	}

	update() {
		this.vel.add(this.acc)
		this.pos.add(this.vel)

		if (this.pos.y > height / 2 + 160) {
			this.pos.y = height / 2 + 160;
		}

		if (this.pos.y == height / 2 + 160) {
			this.jumping = false;
		}
		else {
			this.jumping = true;
		}

		this.vel.y += 0.5;
	
	}
}

