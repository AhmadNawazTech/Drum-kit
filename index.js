var numberOfButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i< numberOfButtons; i++) {
document.querySelectorAll(".drum")[i].addEventListener("click", function() {
 var buttonInnerHTML = this.innerHTML;

        switch (buttonInnerHTML) {

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

});
}
