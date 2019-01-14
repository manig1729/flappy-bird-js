
	var birdX = 200;
	var birdY = 200;
	var birdVelY = 0;
	var birdAccY = 1;
	var birdRadius = 13;
	var birdColor = 'lime'


window.onload = function(){
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');
	document.addEventListener('keydown', keyPush);

	setup();

	framesPerSecond = 30;
	setInterval(function(){
		drawEverything();
		moveEverything();
	},1000/framesPerSecond);
}

class Bird {
	constructor(x, y, r, colour){
		this.x = x;
		this.y = y;
		this.r = r;
		this.colour = colour;
		this.velY = birdVelY; 
		this.accY = birdAccY
	}

	draw(){
		//	Drawing player (bird) sprite
		colorCircle(this.x, this.y, this.r, this.colour);	
	}

	move(){
		this.y += this.velY;
		this.velY += this.accY;
	}
}

function setup() {
	bird = new Bird(birdX, birdY, birdRadius, birdColor);
}

function drawEverything(){
	//	Drawing the background of canvas
	colorRect(0, 0, canvas.width, canvas.height, 'black');
	bird.draw();
}

function moveEverything(){
	bird.move();
	checkCollision();
}


function checkCollision(){
	//	Bird with bottom
	if(bird.y + bird.r >= canvas.height){
		bird.velY = -bird.velY;
	}
}

function colorCircle(centerX, centerY, radius, color) {
	canvasContext.fillStyle = color;
	canvasContext.beginPath();
	canvasContext.arc(centerX, centerY, radius, 0, Math.PI*2, true);
	canvasContext.fill();
	}

function colorRect(leftX, topY, width, height, drawColor){
	canvasContext.fillStyle = drawColor;
	canvasContext.fillRect(leftX, topY, width, height);
	}

function keyPush(evt){
	switch(evt.keyCode){
		case 38:  //up
			bird.velY = -12;
			break;
		case 32:  //space
			bird.velY = -12;
			break;
		}
	}