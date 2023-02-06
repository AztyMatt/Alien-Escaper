window.addEventListener('load', () => {

    if (document.querySelector('#menu-container') !== null){
        const TL = gsap.timeline({paused: true});
        console.log("detect")
    
    TL
    .from("#menu", {autoAlpha:0, duration:2.5, ease:"linear"})
    .from("#commands button", {autoAlpha:0, top: -50, duration:0.5, ease:"linear"})

        TL.play();
    }
});