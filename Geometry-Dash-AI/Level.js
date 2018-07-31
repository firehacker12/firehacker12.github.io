function Ground() {
	fill(0);
	rect(0, height/2+200, width, 20);
}

var Level = [];

var LevelLength = 20;

function LevelFunction() {
	var Spikes = [];
	var Speed = 5;
	var Scale = 40;
	this.generateSpikes = function(NumberOfSpikes, x, y, Distance) {
		for (var i=0; i<LevelLength; i++) {
			Spikes[i] = createVector(x, y);
			x+=Scale;
		}
	}
	this.moveLevel = function() {
		for (var i=0; i<LevelLength; i++) {
			Spikes[i].x -= Speed;
		}
	}
	this.show = function() {
		for (var i=0; i<LevelLength; i++) {
			fill(100, 0, 100);
			if (Level[i] == '1') {
				triangle(Spikes[i].x, Spikes[i].y, Spikes[i].x+40, Spikes[i].y, Spikes[i].x+20, Spikes[i].y-30);
			}
			else if (Level[i] == '2') {
				rect(Spikes[i].x, Spikes[i].y, Scale, Scale);
			}
		}
	}
}

function GenerateLevel(NumberOfSpikes, x, y, Distance) {
	Level.generateSpikes(Level.length, x, y, Distance);
}
