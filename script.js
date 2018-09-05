var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");

setGradient();

function setGradient(){
	body.style.background = "linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";
	css.textContent = body.style.background + ";";
}

function setRandomColor(){
	var random1 = randomColor();
	var random2 = randomColor();
	body.style.background = "linear-gradient(to right, "
	+ random1
	+ ", "
	+ random2
	+ ")";
	css.textContent = body.style.background + ";";
	color1.value = random1;
	color2.value = random2;
}

function randomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
random.addEventListener("click", setRandomColor);