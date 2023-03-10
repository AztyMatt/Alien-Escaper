var dead = new Boolean(localStorage.getItem('dead'));

function start(){
    //set les variables
    let minutes = 5;
    let currentTime = localStorage.getItem('currentTime');
    let targetTime = localStorage.getItem('targetTime');
    if (targetTime == null && currentTime == null){
        currentTime = new Date();
        targetTime = new Date(currentTime.getTime() + (minutes * 60000));
        localStorage.setItem('currentTime', currentTime);
        localStorage.setItem('targetTime',targetTime);
    }
}

window.onload = function() {
    //rajoute un zero au nombre
    function prependZero(number) {
        if (number < 10)
            return "0" + number;
        else
            return number;
    }

    //refresh le timer
    setInterval(function(){
        var currentTime = ((new Date(localStorage.getItem('targetTime')).getTime()) - (new Date().getTime() - 2000));
        getTime(new Date(currentTime));
    }, 1000);
    
    //affiche le timer
    function getTime(date){
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();

        if (minutes == 00 && seconds == 00){
            document.getElementById('timer').innerText = "00:00";
            TweenMax.to("#dead", 0.5, {autoAlpha:1, ease:"linear", delay: 1})
            TweenMax.to("#dead_pop-up", 0.5, {autoAlpha:1, ease:"linear", delay: 3})
            TweenMax.to(".exit button", 0.5, {autoAlpha:1, ease:"linear", delay: 4})
            var restart = document.getElementById("restart")
            restart.onclick = function(e) {
                location.href='laboratoire.html';
                localStorage.clear();
            }
            dead = localStorage.setItem('dead',true);
        }else if(minutes <= 5){
            minutes = prependZero(minutes);
            seconds = prependZero(seconds);
            document.getElementById('timer').innerText = minutes+":"+seconds;
        }
    }
};