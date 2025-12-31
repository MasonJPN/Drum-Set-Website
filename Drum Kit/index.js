const drums = document.querySelectorAll(".drum");

// Button clicks
for (let i = 0; i < drums.length; i++) {
  drums[i].addEventListener("click", function () {
    const key = this.innerHTML;
    makeSound(this.innerHTML);
    buttonAnimation(key);
  });
}

// Keyboard presses
document.addEventListener("keydown", function (event) {
  const key = this.innerHTML;
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  let audio;

  switch (key) {
    case "w":
      audio = new Audio("sounds/tom-1.mp3");
      break;
    case "a":
      audio = new Audio("sounds/tom-2.mp3");
      break;
    case "s":
      audio = new Audio("sounds/tom-3.mp3");
      break;
    case "d":
      audio = new Audio("sounds/tom-4.mp3");
      break;
    case "j":
      audio = new Audio("sounds/snare.mp3");
      break;
    case "k":
      audio = new Audio("sounds/crash.mp3");
      break;
    case "l":
      audio = new Audio("sounds/kick-bass.mp3");
      break;
    default:
      return;
  }

  audio.play();
}



function buttonAnimation(currentKey){

let activeButton = document.querySelector("." + currentKey);

activeButton.classList.add("pressed");

setTimeout(function() {
    activeButton.classList.remove("pressed");
}, 100)

}