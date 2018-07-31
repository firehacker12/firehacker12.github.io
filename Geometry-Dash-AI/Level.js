function Ground() {
	fill(0);
	rect(0, height/2+200, width, 20);
}

var Level = ['0', '0', '1', '1', '2', '1', '1', '2', '1', '0'];



function LevelFunction() {
	var Spikes = [];
	var Speed = 5;
	var Scale = 40;
	this.generateSpikes = function(NumberOfSpikes, x, y, Distance) {
		for (var i=0; i<Level.length; i++) {
			Spikes[i] = createVector(x, y);
			x+=Scale;
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
