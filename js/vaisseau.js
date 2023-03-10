var intro = new Audio('./medias/sound/vaisseau/intro.mp3');
var played = false;
var input = document.getElementById("bar");
var instructions = document.getElementById("instructions");

addEventListener("mousemove", (event) => {
    if (ambiance.duration > 0 && !ambiance.paused && played == false){
        played = true;
        intro.play();
        intro.volume = 0.6;
    }
});

input.addEventListener('input', (e)=>{
    var inputValue = input.value;

    if(inputValue=="abandon ship"){
        input.value = "";
        instructions.innerHTML = 'Très bien, maintenant veuillez porter votre attention sur le cercle de couleur à votre droite.<br>Le but pour vous est de reproduire la séquence de couleurs de plus en plus longue et complexe, en appuyant sur les couleurs correspondantes.<br>Veuillez entrer "ok" quand vous êtes prêt.';
        var simon = new Audio('./medias/sound/vaisseau/simon.mp3');
        simon.play();

        input.addEventListener('input', (e)=>{
            var inputValue = input.value;

            if(inputValue=="ok"){
                input.value = "";
                instructions.innerHTML = 'Démarrage en cours...';
                setTimeout(() => {
                    play();
                }, 1000);
            }
        });
    }
});
