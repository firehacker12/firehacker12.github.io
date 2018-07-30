function PlayerFunction() {
	this.jumping = false;
	this.x = 30;
	this.y = height/2+160;
	var Gravity = 1;
	var Velocity = 1;
	this.show = function() {
		fill(200, 0, 0);
		rect(this.x, this.y, 40, 40);
	}
	this.jump = function() {
		if (!this.jumping) {
			Velocity = -12;
		}
	}
	this.update = function() {
		this.y -= -Gravity-Velocity;
		if (this.y >= height/2+160) {
			this.y = height/2+160;
		}
		if (this.y == height/2+160) {
			Jumping = false;
		}
		else {
			Jumping = true;
		}
		Velocity+=0.5;
	}
}
