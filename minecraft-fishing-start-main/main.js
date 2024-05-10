// Functionize Minecraft Fishing Start Code
//variables for elements
var button = document.getElementById("fish-btn");
var selector = document.getElementById("character-select");
var img = document.getElementById("result-img");
var codOutput = document.getElementById("num-cod");
var salmonOutput = document.getElementById("num-salmon");
var tropicalOutput = document.getElementById("num-tropical");
var pufferOutput = document.getElementById("num-puffer");
//global variables
var cod = 0;
var salmon = 0;
var tropical = 0;
var puffer = 0;

//event listener
button.addEventListener("click", fishBtnClicked);

//function
function fishBtnClicked() {
  var character = selector.value;
  var RNG = Math.random();

  //steve
  if (character == "steve") {
    if (RNG <= 0.05) {
      puffer = puffer + 1;
      img.src = "img/Pufferfish.png";
    } else if (RNG <= 0.1) {
      tropical = tropical + 1;
      img.src = "img/Tropical-Fish.png";
    } else if (RNG <= 0.3) {
      salmon = salmon + 1;
      img.src = "img/Raw-Salmon.png";
    } else if (RNG >= 0.3) {
      cod = cod + 1;
      img.src = "img/Raw-Cod.png";
    }
    //alex
  } else if (character == "alex") {
    if (RNG <= 0) {
      cod = cod + 1;
      img.src = "img/Raw-Cod.png";
    } else if (RNG <= 0.1) {
      salmon = salmon + 1;
      img.src = "img/Raw-Salmon.png";
    } else if (RNG <= 0.2) {
      tropical = tropical + 1;
      img.src = "img/Tropical-Fish.png";
    } else if (RNG >= 0.5) {
      puffer = puffer + 1;
      img.src = "img/Pufferfish.png";
    }
    //villager
  } else if (character == "villager") {
    if (RNG <= 0.25) {
      puffer = puffer + 1;
      img.src = "img/Pufferfish.png";
    } else if (RNG <= 0.5) {
      tropical = tropical + 1;
      img.src = "img/Tropical-Fish.png";
    } else if (RNG <= 0.75) {
      salmon = salmon + 1;
      img.src = "img/Raw-Salmon.png";
    } else if (RNG >= 0.75) {
      cod = cod + 1;
      img.src = "img/Raw-Cod.png";
    }
  }

  codOutput.innerHTML = cod;
  salmonOutput.innerHTML = salmon;
  tropicalOutput.innerHTML = tropical;
  pufferOutput.innerHTML = puffer;
}
