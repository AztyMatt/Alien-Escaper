window.addEventListener('load', () => {


    //Accueil
    if (document.querySelector('#accueil') !== null){
        const TL = gsap.timeline({paused: true});
    
    TL
    .from(".background", {autoAlpha:0, duration:1, ease:"linear"})
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

            if (i == 9) {
                TweenMax.to(".next", 1.5, {autoAlpha:1, pointerEvents:"inherit", ease:"linear", delay: 2})
                TweenMax.to(".commands", 1, {autoAlpha:1, ease:"linear", delay: 3})
            }
        })

        $("#left").click(function(){
            i -= 1
        })     
    }

    //Laboratoire
    if (document.querySelector('#laboratoire') !== null){
        const TL = gsap.timeline({paused: true});
    
    TL
    .from(".background", {autoAlpha:0, duration:1, ease:"linear"})
    .from(".scene_wrapper", {autoAlpha:0, duration:1, ease:"linear"})
    .from(".collectibles >div", {autoAlpha:0, duration:1, stagger:1, ease:"linear"})
        TL.play();
    }

    //Couloir
    if (document.querySelector('#couloir') !== null){
        const TL = gsap.timeline({paused: true});

    TL
    .from(".background", {autoAlpha:0, duration:1, ease:"linear"})
    .from(".scene_wrapper", {autoAlpha:0, duration:1, ease:"linear"})
        TL.play();


    $('area').on('click', function() {
        TL
        .from(".discussion", {autoAlpha:0, duration:1, ease:"linear"})
        .from(".discussion img", {autoAlpha:0, duration:1, ease:"linear"})
        .from(".message", {autoAlpha:0, duration:1, ease:"linear"})
        .from("#exit button", {autoAlpha:0, duration:1, ease:"linear"})
            TL.play();
        event.preventDefault();
    });

    $('#exit button').on('click', function() {
        TweenMax.set([".discussion", ".discussion img", ".message", "#exit button"], {clearProps: 'all'});
        event.preventDefault();
    });

    $('.licorn').on('click', function() {
        TweenMax.to(".next", 1.5, {autoAlpha:1, pointerEvents:"inherit", ease:"linear", delay: 1})
        TweenMax.to(".commands", 1, {autoAlpha:1, ease:"linear", delay: 2})
        event.preventDefault();
    });
    }

    //Vaisseau
    if (document.querySelector('#vaisseau') !== null){
        const TL = gsap.timeline({paused: true});
    
    TL
    .from(".background", {autoAlpha:0, duration:1, ease:"linear"})
    .from(".scene_wrapper", {autoAlpha:0, duration:1, ease:"linear"})
        TL.play();
    }
});

    