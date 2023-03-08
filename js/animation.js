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
            TL.play();


        var _is_laboratory_done = localStorage.getItem('_is_laboratory_done');
        var _is_laboratory_done = new RegExp("true").test(_is_laboratory_done);

        if(_is_laboratory_done === true){
            TL
            .from(".timer_container", {autoAlpha:0, duration:1, ease:"linear"})
                TL.play();

            $('area').on('click', function() {
                TL
                .from(".pop-up", {autoAlpha:0, duration:1, ease:"linear"})
                .from(".exit button", {autoAlpha:0, duration:1, ease:"linear"})
                    TL.play();
            });

            $('.exit button').on('click', function() {
                TweenMax.set(["#translator"], {clearProps: 'all'});
                event.preventDefault();
            });
        }

        TL
        .from(".collectibles >div", {autoAlpha:0, duration:1, stagger:1, ease:"linear"})
            TL.play();
        
    }

    //Couloir
    if (document.querySelector('#couloir') !== null){
        const TL = gsap.timeline({paused: true});

        alarm();
        start();
        TL
        .from(".background", {autoAlpha:0, duration:1, ease:"linear"})
        .from(".scene_wrapper", {autoAlpha:0, duration:1, ease:"linear"})
        .from(".timer_container", {autoAlpha:0, duration:1, ease:"linear"})
            TL.play();

        $('area').on('click', function() {
            var _is_translator_got = localStorage.getItem('_is_translator_got');
            var _is_translator_got = new RegExp("true").test(_is_translator_got);
            console.log(_is_translator_got);

            TL
            .from(".discussion", {autoAlpha:0, duration:1, ease:"linear"})
            .from(".discussion img", {autoAlpha:0, duration:1, ease:"linear"})
            .from(".message", {autoAlpha:0, duration:1, ease:"linear"})
                TL.play();

            if (_is_translator_got !== true){
                document.getElementById("to_translate").style.fontFamily="Glipervelz, sans-serif";
                document.getElementById("ik").style.display="none";
                TL
                .from("#idk", {autoAlpha:0, duration:1, ease:"linear"})
                    TL.play();
            }else{
                document.getElementById("idk").style.display="none";
                TL
                .from("#ik", {autoAlpha:0, duration:1, ease:"linear"})
                    TL.play();
            }
            event.preventDefault();
        });

        $('#idk').on('click', function() {
            TL
            .from("#need_translator", {autoAlpha:0, duration:1, ease:"linear"})
            .from(".exit button", {autoAlpha:0, duration:1, ease:"linear"})
                TL.play();
        });

        $('#ik').on('click', function() {
            TweenMax.to("#licorn", 1.5, {autoAlpha:1, pointerEvents:"inherit", ease:"linear"})
        });

        $('.exit button').on('click', function() {
            TweenMax.set([".discussion", ".discussion img", ".message", ".exit button"], {clearProps: 'all'});
            event.preventDefault();
        });

        $('#licorn').on('click', function() {
            TweenMax.to("#next", 1.5, {autoAlpha:1, pointerEvents:"inherit", ease:"linear", delay: 1})
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

        $('area').on('click', function() {
            const TL = gsap.timeline({paused: true});

            TL
            .from(".simon_container", {autoAlpha:0, duration:1, ease:"linear"})
                TL.play();

            event.preventDefault();
        });
});

    