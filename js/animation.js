window.addEventListener('load', () => {

    if (document.querySelector('main') !== null){
        const TL = gsap.timeline({paused: true});
        console.log("detect")
    
    TL
    .from("#background", {autoAlpha:0, duration:1, ease:"linear"})
    .from("#menu", {autoAlpha:0, duration:1.5, ease:"linear"})
    .from("#commands button", {autoAlpha:0, duration:0.5, ease:"linear"})

        TL.play();
    }
});