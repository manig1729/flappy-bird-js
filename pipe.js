
var pipeX = 600;
var pipeY = 400;

var pipeVelX = 5;

var pipeWidth = 50;
var pipeHeight = 400;

var pipeColor = 'lightblue';

class Pipe {
	constructor(x, y, width, height) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.colour = pipeColor;
		this.velX = pipeVelX;
	}

	draw() {
		colorRect(this.x, this.y, this.width, this.height, this.colour);
	}

	move() {
		this.x -= this.velX;
	}
}