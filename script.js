var actionTime = Math.floor((Math.random() * 5) + 1);
var div = document.getElementById("rect");

var timeInMilis = actionTime * 1000;

setTimeout(changeColor, timeInMilis);

function changeColor () {
	div.style.backgroundColor = "red";
}
