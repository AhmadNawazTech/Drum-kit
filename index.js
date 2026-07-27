//Detecting button press.
var numberOfButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i< numberOfButtons; i++) {
document.querySelectorAll(".drum")[i].addEventListener("click", function() {
var buttonInnerHTML = this.innerHTML;
makeSound(buttonInnerHTML);
buttonAnimation(buttonInnerHTML);        
});
}
//Detecting keyboard press..
    document.addEventListener("keypress", function() {
    makeSound(event.key);
    buttonAnimation(event.key)
});
function makeSound(key) {
switch (key) {   

            case "w":
                var audio = new Audio("./sounds/beat1.wav");
                audio.play();
                break;
            case "a":
                var audio = new Audio("./sounds/beat2.wav");
                audio.play();
                break;
            case "s":
                var audio = new Audio("./sounds/beat3.wav");
                audio.play();
                break;
            case "d":
                var audio = new Audio("./sounds/beat4.mp3");
                audio.play();
                break;
            case "j":
                var audio = new Audio("./sounds/beat5.mp3");
                audio.play();
                break;   
            case "k":
                var audio = new Audio("./sounds/beat7.wav");
                audio.play();
                break;   
            case "l":
                var audio = new Audio("./sounds/beat6.wav");
                audio.play();
                break;   
            default:
                console.log("Please press correct key!");    
}
}
    function buttonAnimation (currentKey){
    var activeButton =  document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
    activeButton.classList.remove("pressed");
    }, 200);
}
