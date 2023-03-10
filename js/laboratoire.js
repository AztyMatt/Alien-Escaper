var intro = new Audio('./medias/sound/laboratoire/intro.mp3');
var played = false;
var _is_laboratory_done = localStorage.getItem('_is_laboratory_done');
var _is_laboratory_done = new RegExp("true").test(_is_laboratory_done);
console.log(_is_laboratory_done);

var collected = 0;

function finish(){
    if(collected == 3){
        TweenMax.to("#diapo_1", 0.5, {autoAlpha:1, ease:"linear", delay: 2})
        setTimeout(
            function() {
                var explosion = new Audio('./medias/sound/explosion.mp3');
                explosion.play();
            }, 4000);
        TweenMax.to("#diapo_2", 1, {autoAlpha:1, ease:"linear", delay: 4})
        TweenMax.to(".next", 1.5, {autoAlpha:1, pointerEvents:"inherit", ease:"linear", delay: 6})
        TweenMax.to(".commands", 1, {autoAlpha:1, ease:"linear", delay: 7})
        var next = document.getElementById("next_button");
        next.onclick = function(e) {
            var _is_laboratory_done = true;
            console.log(_is_laboratory_done);
            localStorage.setItem('_is_laboratory_done', _is_laboratory_done);
            console.log(localStorage.getItem('_is_laboratory_done'));
            location.href='couloir.html';
        }
    }
}

if (_is_laboratory_done === true){
    alarm();
    document.getElementById("background-scene").src="./medias/laboratoire/background_after.png";
}else{
    addEventListener("mousemove", (event) => {
        if (ambiance.duration > 0 && !ambiance.paused && played == false){
            played = true;
            intro.play();
            intro.volume = 0.6;
            console.log(played);
        }
    });
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
    }else{
        object.onclick = function(e) {
            console.log(object.id)
            var collect = new Audio('./medias/sound/laboratoire/'+object.id+'.mp3');
            collect.play();
            appears();
            collected ++;
            console.log(collected);
            finish();
        }
    }
}

objects(pool_product, pool_product_collectible);
objects(lighter, lighter_collectible);
objects(hairspray, hairspray_collectible);

function get_translator(){
    localStorage.setItem('_is_translator_got', true);
    location.href='couloir.html';
}