var redButton = document.querySelector(".red");
var orangeButton = document.querySelector(".orange");
var pinkButton = document.querySelector(".pink");

function changeBackground(colour) {
  document.body.style.backgroundColor = colour;
}

redButton.onclick = function () {
  changeBackground("red");
};

orangeButton.onclick = function () {
  changeBackground("orange");
};

pinkButton.onclick = function () {
  changeBackground("pink");
};
