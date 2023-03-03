console.log(laboratory_done);
// Corrigez pbs qui sont deja collectés pas alors que laboratory_done est undefined

var collected = 0;
var next = document.getElementById("next");

var laboratory_done = localStorage.getItem('laboratory_done');
if (laboratory_done = true){
    $('area').on('click', function() {
        console.log("Traducteur");
    });
}

function objects(object, object_collectible){
    console.log("je marche");
    function appears() {
        object.style.opacity=0;
        object.style.display="none";
        object_collectible.style.opacity=1;
        object_collectible.style.filter="none";
    }

    if (laboratory_done = true){ //rajouter au if du dessus si possible
        appears();
    }else{
        object.onclick = function(e) {
            appears();
            collected ++;
            console.log(collected);
            finish();
        }
    }
}

function finish(){
    if(collected == 3){
        var laboratory_done = new Boolean(true);
        localStorage.setItem('laboratory_done', laboratory_done);
        console.log(localStorage.getItem('laboratory_done'));

        TweenMax.to(".next", 1.5, {autoAlpha:1, pointerEvents:"inherit", ease:"linear", delay: 2})
        TweenMax.to(".commands", 1, {autoAlpha:1, ease:"linear", delay: 3})
    }
}

objects(bleach, bleach_collectible);
objects(lighter, lighter_collectible);
objects(tank, tank_collectible);