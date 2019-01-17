
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
		colorRect(this.x, 0, this.width, this.y - gapWidth, this.colour);
	}

	move() {
		this.x -= this.velX;
	}
}