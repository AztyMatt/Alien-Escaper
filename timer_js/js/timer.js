window.onload = function() {
var interval;
let minutes = 5;
let currentTime = localStorage.getItem('currentTime');
let targetTime = localStorage.getItem('targetTime');
if (targetTime == null && currentTime == null){
    currentTime = new Date();
    targetTime = new Date(currentTime.getTime() + (minutes * 60000));
    localStorage.setItem('currentTime', currentTime);
    localStorage.setItem('targetTime',targetTime);
    //console.log(currentTime);
    //console.log(targetTime);
}

function prependZero(number) {
    if (number < 10)
        return "0" + number;
    else
        return number;
}

function getTime(date){
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    if (minutes == 00 && seconds == 00){
        document.getElementById('timer').innerText = "BOUM EXPLOSION ARRRGHHHH *mort*";
    }else if(minutes <= 5){
        minutes = prependZero(minutes);
        seconds = prependZero(seconds);
        document.getElementById('timer').innerText = minutes+":"+seconds;
    }
}

//console.log(new Date)
//console.log("Temps actuel: "+getTime(new Date(currentTime)));
//console.log("Temps target: "+getTime(new Date(targetTime)));
//var interval = new Date(targetTime) - new Date(currentTime);
//console.log("Temps interval: "+getTime(new Date(interval)))
//console.log("----------------------------------")

setInterval(function(){
    var currentTime = 
    (
    (new Date(localStorage.getItem('targetTime')).getTime())
    - 
    (
        new Date().getTime() 
        -
        2000
    )
    );

    //date du debut + 5 - currenttime
    //convert en chiffre pour faire operation !
    getTime(new Date(currentTime));
}, 1000);
};