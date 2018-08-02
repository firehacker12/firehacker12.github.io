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
			print('Jumped!')
		}
	}
	this.update = function() {
		this.y -= -Gravity-Velocity;
		if (this.y <= height/2+160) {
			for (var i=0; i<LevelLength; i++) {
				if (Spikes[i].x>=this.x && Spikes[i].x+Scale<=this.x) {
					if (this.y >= Spikes[i].y) {
						this.y -= Gravity-Velocity;	
					}
					if (this.y == Spikes[i].y) {
						this.y = Spikes[i].y-Scale;	
					}
				}
				else {
					this.y = height/2+160;
				}
			}
		}
		if (this.y == height/2+160) {
			this.jumping = false;
		}
		else {
			this.jumping = true;
		}
		Velocity+=0.5;
	}
}
