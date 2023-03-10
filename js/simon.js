
// CONSTANTS AND VARIABLES
const colors = ['green', 'red', 'yellow', 'blue'];
let playing = false;
let level = 0;
let clicks = 0;
let pattern = [];
let container = $(".container");

// FUNCTIONS

const restart = (() => {
    playing = false;
    level = 0;
    pattern = [];
    instructions.innerHTML = 'Raté ! Redémarrage en cours...<br>Tenez-vous prêt !';
    setTimeout(() => {
        play();
    }, 1000);
});

const animateClick = ((color, clickClass) => {
    $('#' + color).addClass(clickClass);
    setTimeout(() => {
        $('#' + color).removeClass(clickClass);
    }, 150);
});




const animateSequence = (idx => {
    let color = pattern[idx];
    setTimeout(() => {
        $('#' + color).fadeOut(200).fadeIn(200);
        if(++idx < pattern.length) {
            animateSequence(idx);
        }

        var sound = new Audio('./medias/sound/vaisseau/sound.mp3');
        sound.play();
    }, 1000);
});

const nextSequence = (() => {
    let iteration=1

    if (level > 5){
        var unlock = new Audio('./medias/sound/vaisseau/unlock.mp3');
        unlock.play();
        unlock.volume = 0.3;
        container.addClass("lock");
        instructions.innerHTML = "Activation du protocole d'autodestruction...";

        setTimeout(() => {
            var seconds = 10
            interval = setInterval(function () {
                instructions.innerHTML = seconds;
                if (--seconds < 0){
                    instructions.innerHTML = "Autodestruction !";
                    TweenMax.set([".simon_container"], {clearProps: 'all'});
                    TweenMax.set([".scene_wrapper"], {clearProps: 'all'});
                    TweenMax.to("#diapo_1", 0.5, {autoAlpha:1, ease:"linear", delay: 0})
                    TweenMax.to("#diapo_1", 0, {autoAlpha:0, ease:"linear", delay: 2})
                    setTimeout(
                        function() {
                            var explosion = new Audio('./medias/sound/explosion.mp3');
                            explosion.play();
                        }, 2000);
                    TweenMax.to("#diapo_2", 1, {autoAlpha:1, ease:"linear", delay: 2})
                    TweenMax.to("#diapo_2", 3, {autoAlpha:0, ease:"linear", delay: 4})
                    TweenMax.to(".next", 1.5, {autoAlpha:1, pointerEvents:"inherit", ease:"linear", delay: 6})
                    TweenMax.to(".commands", 1, {autoAlpha:1, ease:"linear", delay: 7})
                
                    clearInterval(interval);
                }
            }, 1000);
        }, 2000);
    }else{
        if(pattern.length === 0){
            iteration=4
        }
        for (var i = 0; i < iteration; i++) {
            let idx = Math.floor(Math.random() * 4);
            let newColor = colors[idx];
            pattern.push(newColor);
            ++level;
            if(iteration !== 4){
                instructions.innerHTML = 'Bien joué, niveau suivant !';
            }
        }

        container.addClass("lock");
        animateSequence(0);
        setTimeout(() => {
            container.removeClass("lock");
        }, (pattern.length * 1000) + 1000);
    }
});



// ACTION LISTENERS

const checkSequence = (color => {
    if(pattern[clicks] !== color) {
        restart();
    }
});

$('.color-btn').click(e => {
    let color = e.target.id;
    let clickClass = "click";
    if(playing) {
        animateClick(color, clickClass);
        checkSequence(color);
        if(++clicks === level) {
            clicks = 0;
            nextSequence();
        }
    }

    var sound = new Audio('./medias/sound/vaisseau/sound.mp3');
    sound.play();
});

function play(){
    if(!playing) {
        clicks = 0;
        nextSequence();
        container.addClass("lock");
        setTimeout(() => {
            container.removeClass("lock");
        }, (pattern.length * 1000) + 1000);
        playing = true;
    }
};