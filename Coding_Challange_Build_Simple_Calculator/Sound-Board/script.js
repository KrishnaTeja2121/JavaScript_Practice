document.getElementById("sound1").addEventListener("click",function (){
    const audio= new Audio("audio/guitar.mp3");
    audio.play();
});

document.getElementById("sound2").addEventListener("click",function (){
    const audio= new Audio("audio/stab.mp3");
    audio.play();
});

document.getElementById("sound3").addEventListener("click",function (){
    const audio= new Audio("audio/transition.mp3");
    audio.play();
});