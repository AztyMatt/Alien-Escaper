var ambiance = new Audio('./medias/sound/ambiance.mp3');
addEventListener("mousemove", (event) => {
    if (ambiance.paused){
        ambiance.play();
        console. clear();
    }
});
ambiance.autoplay = true;
ambiance.loop = true;
ambiance.volume = 0.3;