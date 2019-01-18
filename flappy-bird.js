
window.onload = function(){
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');
	document.addEventListener('keydown', keyPush);

	setup();
	setupPipe0();
	setupPipe1();

	framesPerSecond = 30;


	setInterval(function(){
		if(isPlaying){
		if(counter % 120 == 0){            //Get a new pipe every 5 seconds. Stupid code, but had to do it
			setupPipe0();
			//console.log("Pipe made");
		}
		if(counter % 120 != 0 && counter % 60 == 0){
			setupPipe1();
		}
		drawEverything();
		moveEverything();

		counter ++;
	}
	},1000/framesPerSecond);
}

function setup() {
	bird = new Bird(birdX, birdY, birdRadius, birdColor);
}

function setupPipe0() {
	pipeYTemp = 100 + Math.floor(Math.random()*100);
	pipes[0] = new Pipe(pipeX, 600-pipeYTemp, pipeWidth, pipeYTemp);
	//console.log(pipeYTemp);
}

function setupPipe1() {
	pipeYTemp = 100 + Math.floor(Math.random()*100);
	pipes[1] = new Pipe(pipeX, 600-pipeYTemp, pipeWidth, pipeYTemp);
}

function drawEverything(){
	//	Drawing the background of canvas
	colorRect(0, 0, canvas.width, canvas.height, 'black');
	bird.draw();
	pipes[0].draw();
	pipes[1].draw();
}

function moveEverything(){
	bird.move();
	pipes[0].move();
	pipes[1].move();
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
		case 27:	  //escape
			if(isPlaying == true){
				isPlaying = false;
			}
			else if (isPlaying == false){
				isPlaying = true;
			}
		}
	}
