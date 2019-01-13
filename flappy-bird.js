
window.onload = function(){
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');
	document.addEventListener('keydown', keyPush);

	framesPerSecond = 30;
	setInterval(function(){
		drawEverything();
		moveEverything();
	},1000/framesPerSecond);
	}

function drawEverything(){
	//	Drawing the background of canvas
	colorRect(0, 0, canvas.width, canvas.height, 'black');

	}

function moveEverything(){

	}

function colorRect(leftX, topY, width, height, drawColor){
	canvasContext.fillStyle = drawColor;
	canvasContext.fillRect(leftX, topY, width, height);
}

function keyPush(evt){
	switch(evt.keyCode){
		case 38:  //up

			break;
		}
	}