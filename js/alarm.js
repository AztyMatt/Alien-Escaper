function alarm(){
    var alarm = new Audio('../medias/sound/alarm.mp3');

    setInterval(function(){
        $(".alarm").toggleClass("active");
    }, 2000);

    setInterval(function(){
        alarm.play();
    }, 1);
}