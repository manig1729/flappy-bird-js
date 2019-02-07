
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

	notInGap() {
		if (this.x > 175 && this.x < 225) {
			if ((bird.y + bird.r) <= (this.y - gapWidth) || (bird.y - bird.r) >= (canvas.height - this.height)) {
				//console.log("Not in gap");
				isPlaying = false;
				showEndScreen();
			}
		}
		if (this.x == 150 && isPlaying) {
			score++;
		}

	}

	move() {
		this.x -= this.velX;
	}
}