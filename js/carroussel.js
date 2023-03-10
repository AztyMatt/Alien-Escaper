p=0;
container=document.querySelector(".carrousel-container");
left=document.getElementById("left");
right=document.getElementById("right");
images=document.querySelectorAll(".image");
audios=document.querySelectorAll("audio");


each_image = 100/images.length;

container.style.width=(100*images.length)+"%";
for ( i = 0; i < images.length; i++) {
    images[i].style.width=(100/images.length)+"%";
};
hidden();

function audio(){
    for(i=0; i<audios.length; i++){
        var audio = audios[i];
        var audio_namefile = audio.src.split('\\').pop().split('/').pop();
        var diapo = Math.abs(p-1);
        console.log(audio)
        console.log(audio_namefile)
        console.log(diapo);

        if(audio_namefile == `diapo_${diapo}.mp3`){
            audio.volume = 0.4;
            audio.play();
        }else{
            audio.pause();
            audio.currentTime = 0;
        }

    }
}

left.onclick=function(){
    if(p<0)
        p++;
    container.style.transform="translate("+p*each_image+"%)";
    container.style.transition="all 0.5s ease";
    audio();
    hidden();
}

right.onclick=function(){
    if(p>-images.length+1)
        p--;
    container.style.transform="translate("+p*each_image+"%)";
    container.style.transition="all 0.5s ease";
    audio();
    hidden();
}

function hidden (){
    if (p==-images.length+1)
        right.style.visibility="hidden";
    else
        right.style.visibility="visible";

    if (p==0)
        left.style.visibility="hidden";
    else
        left.style.visibility="visible";
}

document.addEventListener("DOMContentLoaded", function(event) {
    alert("Cliquer sur OK pour nous autoriser à émettre du son!");
    audio();
});