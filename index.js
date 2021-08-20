for(var i = 0; i < document.getElementsByClassName("drum").length; i++)
{
    document.getElementsByClassName("drum")[i].addEventListener("click", function() {
        playSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}

document.addEventListener("keydown", function(e) {      // Any variable name can be used in place of 'e'
    playSound(e.key);                                   // .key property holds the key name which is pressed
    buttonAnimation(e.key);
});

function playSound(char)
{
    switch(char)
    {
        case "w": 
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        
        case "j":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;

        case "l":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
    }
}

function buttonAnimation(pressedKey)
{
    var currentKey = document.querySelector("."+pressedKey);
    currentKey.classList.add("pressed");
    
    setTimeout(function() {                     // To cause a delay in the addition & removal of animation.
        currentKey.classList.remove("pressed");
    }, 100);
}