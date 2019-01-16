
	var height = 600;
	var width = 400;

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

	setInterval(function(){
		setupPipe();
	},1000/0.4);

}

function setup() {
	bird = new Bird(birdX, birdY, birdRadius, birdColor);
}

function setupPipe() {
	pipe = new Pipe(pipeX, pipeY, pipeWidth, pipeHeight);
}

function drawEverything(){
	//	Drawing the background of canvas
	colorRect(0, 0, canvas.width, canvas.height, 'black');
	bird.draw();
	pipe.draw();
}

function moveEverything(){
	bird.move();
	pipe.move();
	checkCollision();
}

//Checks if bird has hit the bottom of the screen
function checkCollision(){
	//	Bird with bottom
	if(bird.y + bird.r >= canvas.height){
		//bird.velY = 0;
		bird.kill();
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
