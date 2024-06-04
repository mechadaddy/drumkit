var buttonSelector = document.getElementsByTagName("button");

var numberOfButtons = document.querySelectorAll(".drum").length;

document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

for (i =0; i<=numberOfButtons; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

    });

function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();  
        break;
    
        case "a":
            var tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();  
        break;

        case "s":
            var tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();  
        break;

        case "l":
            var crash = new Audio('./sounds/crash.mp3');
            crash.play();  
        break;

        case "j":
            var kickBass = new Audio('./sounds/kick-bass.mp3');
            kickBass.play();  
        break;

        case "k":
            var snare = new Audio('./sounds/snare.mp3');
            snare.play();  
        break;

        case "d":
            var tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();  
        break;

        default:
            console.log("I don't know what happened.")
            break;
    }
}
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    var classes = activeButton.classList;
    classes.add("pressed");
    setTimeout(function() {
        classes.remove("pressed");
    }, 100);
}

}




//var audio = new Audio('./sounds/tom-1.mp3');
//audio.play();  