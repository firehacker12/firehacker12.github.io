var canvasWidth = 1360;
var canvasHeight = 768;
var db;
/*

PONWHITE = 1
PONBLACK = 2
BISHOPWHITE = 3
BISHOPBLACK = 4
KINGWHITE = 5
KINGBLACK = 6
QUEENWHITE = 7
QUEENBLACK = 8
KNIGHTWHITE = 9
KNIGHTBLACK = 10
TOWERWHITE = 11
TOWERBLACK = 12

*/
var BoardPieces = [12,10,4, 8, 6, 4,10,12,
				   2, 2, 2, 2, 2, 2, 2, 2,
				   0, 0, 0, 0, 0, 0, 0, 0,
				   0, 0, 0, 0, 0, 0, 0, 0,
				   0, 0, 0, 0, 0, 0, 0, 0,
				   0, 0, 0, 0, 0, 0, 0, 0,
				   1, 1, 1, 1, 1, 1, 1, 1,
				   11,9, 3, 7, 5, 3, 9,11];

var VectorData = [];

var BISHOPBLACKIMAGE;
var BISHOPWHITEIMAGE;
var KINGBLACKIMAGE;
var KINGWHITEIMAGE;
var KNIGHTBLACKIMAGE;
var KNIGHTWHITEIMAGE;
var PONBLACKIMAGE;
var PONWHITEIMAGE;
var QUEENBLACKIMAGE;
var QUEENWHITEIMAGE;
var TOWERBLACKIMAGE;
var TOWERWHITEIMAGE;


function preload() {
	BISHOPBLACKIMAGE = loadImage("Assets/BISHOPBLACK.png");
	BISHOPWHITEIMAGE = loadImage("Assets/BISHOPBWHITE.png");
	KINGBLACKIMAGE = loadImage("Assets/KINGBLACK.png");
	KINGWHITEIMAGE = loadImage("Assets/KINGWHITE.png");
	KNIGHTBLACKIMAGE = loadImage("Assets/KNIGHTBLACK.png");
	KNIGHTWHITEIMAGE = loadImage("Assets/KNIGHTWHITE.png");
	PONBLACKIMAGE = loadImage("Assets/PONBLACK.png");
	PONWHITEIMAGE = loadImage("Assets/PONWHITE.png");
	QUEENBLACKIMAGE = loadImage("Assets/QUEENBLACK.png");
	QUEENWHITEIMAGE = loadImage("Assets/QUEENWHITE.png");
	TOWERBLACKIMAGE = loadImage("Assets/TOWERBLACK.png");
	TOWERWHITEIMAGE = loadImage("Assets/TOWERWHITE.png");
}

function setup() {
	createCanvas(canvasWidth, canvasHeight);
	db = new drawBoard();
}

function draw() {
	background(50, 0, 50);
	drawBoard();
}

function drawBoard() {

	var PieceSize = 70;
	var Count = 0;
	var VecCount = 0;
	for (var i=0; i<PieceSize*8; i+=PieceSize) {
		for (var j=0; j<PieceSize*8; j+=PieceSize) {
			if (Count%2 == 0) {
				fill(150);
			}
			else if (Count%2 == 1) {
				fill(178, 87, 23);
			}
			rect(i+10, j+10, 70, 70);
			noFill();
			strokeWeight(5);
			stroke(158, 64, 3);
			rect(5, 5, PieceSize*8+5, PieceSize*8+5);

			VectorData[VecCount] = createVector(i, j);

			Count++;
			VecCount++;
		}
		Count++;
	}
	for (var i=0; i<8*8; i++) {
		if (BoardPieces[i] == 1) {
			image(PONWHITEIMAGE, VectorData[i].x, VectorData[i].y);
			//rect(VectorData[i].x, VectorData[i].y, 10, 10);
		}
	}
}
