
soundPlayer = function(key){
  switch (key) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "a":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    default: console.log(key)
  }
}

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;

    soundPlayer(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML)
  });
}

document.addEventListener("keydown", function(event) {
    soundPlayer(event['key']); //the event being listened to (button press) is passed into the function as a variable
    //['key'] is one of the properties of the keydown event which can be viewed in the console
    buttonAnimation(event.key);
});


function buttonAnimation(key){

  var activeButton = document.querySelector("." + key); //'.' being added is because the selector used is a css Class

  activeButton.classList.add("pressed");

  setTimeout(function(){activeButton.classList.remove("pressed")}, 100);
}
