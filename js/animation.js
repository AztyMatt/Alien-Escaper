window.addEventListener('load', () => {


    //Accueil
    if (document.querySelector('#accueil') !== null){
        const TL = gsap.timeline({paused: true});
    
    TL
    .from("#background", {autoAlpha:0, duration:1, ease:"linear"})
    .from("#menu", {autoAlpha:0, duration:1.5, ease:"linear"})
    .from(".commands", {autoAlpha:0, duration:0.5, ease:"linear"})

        TL.play();
    }


    //Intro
    if (document.querySelector('#intro') !== null){
        const TL = gsap.timeline({paused: true});

        var boxes = $(".image");
        let i=0;
        TweenMax.to(boxes[i], 3, {autoAlpha:1, ease:"power1", delay: 0.25});

        $("#right").click(function(){
            i += 1
            TweenMax.to(boxes[i], 3, {autoAlpha:1, ease:"power1", delay: 0.25});

            if (i == 7) {
                TweenMax.to(".end div", 1.5, {autoAlpha:1, ease:"linear", delay: 3})
                TweenMax.to(".commands", 1, {autoAlpha:1, ease:"linear", delay: 4})
            }
        })

        $("#left").click(function(){
            i -= 1
        })     
    }
});