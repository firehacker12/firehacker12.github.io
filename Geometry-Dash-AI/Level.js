function Ground() {
	fill(0);
	rect(0, height/2+200, width, 20);
}

function LevelFunction() {
	var Spikes = [];
	var Speed = 10;
	var x = 600;
	var y = height/2+200;
	this.generateSpikes = function() {
		for (var i=0; i<10; i++) {
			Spikes[i] = createVector(x, y);
			x+=80;
		}
	}
	this.moveLevel = function() {
		for (var i=0; i<Spikes.length; i++) {
			Spikes[i].x -= Speed;
		}
	}
	this.show = function() {
		for (var i=0; i<Spikes.length; i++) {
			fill(100, 0, 100);
			triangle(Spikes[i].x, Spikes[i].y, Spikes[i].x+20, Spikes[i].y, Spikes[i].x+20, Spikes[i].y-30);
		}
	}
}
