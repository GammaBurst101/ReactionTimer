var div = document.getElementById("rect");
var startResponseTime;
var endResponseTime;
var active = false;
var actionTime = Math.floor((Math.random() * 5) + 1);
var timeInMilis = actionTime * 1000;

setTimeout(changeColor, timeInMilis);

function changeColor () {
	div.style.backgroundColor = "rgba(200, 25, 25, 0.9)";
	startResponseTime = new Date();
	active = true;
}

div.onclick = function () {
	if (active) {
		endResponseTime = new Date();
		var responseTime = endResponseTime - startResponseTime;
		
		div.innerHTML = responseTime + 'ms';
		active = false;
	}
}

function reload() {
	location.reload();
}