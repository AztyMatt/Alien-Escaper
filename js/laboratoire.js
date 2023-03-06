var _is_laboratory_done = localStorage.getItem('_is_laboratory_done');
var _is_laboratory_done = new RegExp("true").test(_is_laboratory_done);
console.log(_is_laboratory_done);

var collected = 0;
var next = document.getElementById("next");

function finish(){
    if(collected == 3){
        var audio = new Audio('../medias/laboratoire/explosion/explosion.mp3');
        var _is_laboratory_done = true;
        console.log(_is_laboratory_done);
        localStorage.setItem('_is_laboratory_done', _is_laboratory_done);
        console.log(localStorage.getItem('_is_laboratory_done'));

        TweenMax.to("#diapo_1", 0.5, {autoAlpha:1, ease:"linear", delay: 2})
        setTimeout(
            function() {
                audio.play();
            }, 4000);
        TweenMax.to("#diapo_2", 1, {autoAlpha:1, ease:"linear", delay: 4})
        TweenMax.to(".next", 1.5, {autoAlpha:1, pointerEvents:"inherit", ease:"linear", delay: 6})
        TweenMax.to(".commands", 1, {autoAlpha:1, ease:"linear", delay: 7})
    }
}

function objects(object, object_collectible){
    function appears() {
        object.style.opacity=0;
        object.style.display="none";
        object_collectible.style.opacity=1;
        object_collectible.style.filter="none";
    }

    if (_is_laboratory_done === true){ //rajouter au if du dessus si possible
        appears();
        alarm();
        document.getElementById("background-scene").src="../medias/laboratoire/background_after.png";
    }else{
        object.onclick = function(e) {
            appears();
            collected ++;
            console.log(collected);
            finish();
        }
    }
}

objects(bleach, bleach_collectible);
objects(lighter, lighter_collectible);
objects(tank, tank_collectible);

function get_translator(){
    localStorage.setItem('_is_translator_got', true);
    location.href='couloir.html';
}