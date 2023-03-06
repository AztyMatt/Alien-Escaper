var input = document.getElementById("bar");
var instructions = document.getElementById("instructions");

input.addEventListener('input', (e)=>{
    var inputValue = input.value;

    if(inputValue=="abandon ship"){
        input.value = "";
        instructions.innerHTML = 'Très bien, maintenant veuillez porter votre attention sur le cercle de couleur à votre droite.<br>Le but pour vous est de reproduire la séquence de couleurs de plus en plus longue et complexe, en appuyant sur les couleurs correspondantes.<br>Veuillez entrer "ok" quand vous êtes prêt.';

        input.addEventListener('input', (e)=>{
            var inputValue = input.value;

            console.log(inputValue);
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
