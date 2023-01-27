console.log("Welcome to GanaPlay");

//Initialize the veriables
let songIndex = 0;
let audioElement = new Audio('audio/Besharam Rang.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar =document.getElementById('myProgressBar');
let gif =document.getElementById('gif');
// let songItem = Array.from(document.getElementsByClassName(songItem))

let songs =[
    {songName : "Besharam rang" , filepath : "audio/Besharam Rang.mp3"},
    {songName : "Man meri jaan" , filepath : "audio/Maan Meri Jaan.mp3"},
    {songName : "Har Har Shambhu Shiv Mahadeva" , filepath : "audio/Har Har Shambhu Shiv Mahadeva.mp3"}
]


//Handel play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

//Listen to events
audioElement.addEventListener('timeupdate' , ()=>{
    //Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value =progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
    myProgressBar.value = progress;
})

