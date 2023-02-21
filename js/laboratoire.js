var collected = 0;
console.log(collected)
var next = document.getElementById("next");
console.log(next)

var bleach = document.getElementById("bleach");
var bleach_collectible = document.getElementById("bleach_collectible");
bleach.onclick = function(e) {
    bleach.style.opacity=0
    bleach.style.display="none"
    bleach_collectible.style.opacity=1
    bleach_collectible.style.filter="none"
    collected ++
    console.log(collected)
    finish()
}

var lighter = document.getElementById("lighter");
var lighter_collectible = document.getElementById("lighter_collectible");
lighter.onclick = function(e) {
    lighter.style.opacity=0
    lighter.style.display="none"
    lighter_collectible.style.opacity=1
    lighter_collectible.style.filter="none"
    collected ++
    console.log(collected)
    finish()
}

var tank = document.getElementById("tank");
var tank_collectible = document.getElementById("tank_collectible");
tank.onclick = function(e) {
    tank.style.opacity=0
    tank.style.display="none"
    tank_collectible.style.opacity=1
    tank_collectible.style.filter="none"
    collected ++
    console.log(collected)
    finish()
}

function finish(){
    if(collected == 3){
        TweenMax.to(".next", 1.5, {autoAlpha:1, pointerEvents:"inherit", ease:"linear", delay: 2})
        TweenMax.to(".commands", 1, {autoAlpha:1, ease:"linear", delay: 3})
    }
}

//A réduire si possible