var div = document.getElementById("rect");//The box inside which the user can click

//To calculate the time taken by the user
var startResponseTime;
var endResponseTime;

//Its value tells whether the user should be clicking on the div or not (So that the user doesn't click before it turns red)
var isDivRed = false;

//To change the color of the div and start counting time until the user clicks
function changeColor () {
	div.style.backgroundColor = "rgba(200, 25, 25, 0.9)";
	startResponseTime = new Date();
	isDivRed = true;
}

div.onclick = function () {
	if (isDivRed) {
		
		//Calculate the time taken by the user to click on the div
		endResponseTime = new Date();
		var responseTime = endResponseTime - startResponseTime;
		
		div.innerHTML = responseTime + 'ms';
		isDivRed = false;
	} else {
		startGame();
	}
}

function startGame() {
	//Reset the div's color and text
	div.style.backgroundColor = "rgba(100, 255, 100, 0.6)";
	div.innerHTML = "";
	
	//Generate a random time after which the div will turn red
	var actionTime = Math.floor((Math.random() * 5) + 1);
	var timeInMilis = actionTime * 1000;
	
	setTimeout(changeColor, timeInMilis);
}

startGame();