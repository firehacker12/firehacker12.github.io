function Ground() {
	fill(0);
	rect(0, height/2+200, width, 20);
}

function LevelFunction() {
	var Spikes = [];
	var Speed = 10;
	this.generateSpikes = function(NumberOfSpikes, x, y, Distance) {
		for (var i=0; i<NumberOfSpikes; i++) {
			Spikes[i] = createVector(x, y);
			x+=Distance;
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
			triangle(Spikes[i].x, Spikes[i].y, Spikes[i].x+40, Spikes[i].y, Spikes[i].x+20, Spikes[i].y-30);
		}
	}
}

function GenerateLevel(NumberOfSpikes, x, y, Distance) {
	Level.generateSpikes(NumberOfSpikes, x, y, Distance);
}
