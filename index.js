var numOfbuttons = document.querySelectorAll(".drum").length;
var drum = document.querySelectorAll(".drum");
for(let i = 0; i < numOfbuttons; i++){
    drum[i].addEventListener("click", function(){
      
        let clickedButton = this.innerHTML;
        makesound(clickedButton);
    }
    )}
    
document.addEventListener("keydown", (event)=>{
  makesound(event.key)
   
})



function makesound(key){
    switch(key){
        case "w":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/crash.mp3");
                audio.play();
                break;
        case "d":
             var audio = new Audio("sounds/tom-1.mp3");
                    audio.play();
                    break;
        case "j":
             var audio = new Audio("sounds/tom-2.mp3");
                    audio.play();
                    break;
        case "k":
            var audio = new Audio("sounds/tom-3.mp3");
                    audio.play();
                    break;
        case "l":
            var audio = new Audio("sounds/tom-4.mp3");
                    audio.play();
                    break;
                    default:
       }
}