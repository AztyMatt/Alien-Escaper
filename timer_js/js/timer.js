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
    console.log(currentTime);
    console.log(targetTime);
}

function prependZero(number) {
    if (number < 9)
        return "0" + number;
    else
        return number;
}

function getTime(date){
    var seconds = prependZero(date.getSeconds());
    var minutes = prependZero(date.getMinutes());
    return minutes+" "+seconds;
}

console.log(new Date)
console.log("Temps actuel: "+getTime(new Date(currentTime)));
console.log("Temps target: "+getTime(new Date(targetTime)));
var interval = new Date(targetTime) - new Date(currentTime);
console.log("Temps interval: "+getTime(new Date(interval)))
console.log("----------------------------------")

setInterval(function(){
    var start = new Date().getTime();
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
    console.log(getTime(new Date(currentTime)));
}, 1000);
};