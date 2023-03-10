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
            is_end();
        })

        $("#left").click(function(){
            i -= 1
            is_end();
        })

        function is_end(){
            if (i == 9) {
                TweenMax.to(".next", 1.5, {autoAlpha:1,  pointerEvents:"inherit", ease:"linear", delay: 2})
                TweenMax.to(".commands", 1, {autoAlpha:1, ease:"linear", delay: 3})
            }else{
                TweenMax.set([".next", ".commands"], {clearProps: 'all'});
            }
        }
    }

    //Laboratoire
    if (document.querySelector('#laboratoire') !== null){
        const TL = gsap.timeline({paused: true});

        if(dead == true){
            location.href='index.html';
        }

        TL
        .from(".background", {autoAlpha:0, duration:1, ease:"linear"})
        .from(".scene_wrapper", {autoAlpha:0, duration:1, ease:"linear"})
            TL.play();


        var _is_laboratory_done = localStorage.getItem('_is_laboratory_done');
        var _is_laboratory_done = new RegExp("true").test(_is_laboratory_done);

        if(_is_laboratory_done == true){
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
        var _is_laboratory_done = localStorage.getItem('_is_laboratory_done');
        var _is_laboratory_done = new RegExp("true").test(_is_laboratory_done);
        var dead = localStorage.getItem('dead');
        var dead = new RegExp("true").test(dead);

        if (dead == true || _is_laboratory_done !== true){
            location.href='index.html';
        }

        alarm();
        start();
        TL
        .from(".background", {autoAlpha:0, duration:1, ease:"linear"})
        .from(".scene_wrapper", {autoAlpha:0, duration:1, ease:"linear"})
        .from(".timer_container", {autoAlpha:0, duration:1, ease:"linear"})
            TL.play();

        var intro = new Audio('./medias/sound/couloir/intro.mp3');
        var played = false;
        
        var _is_translator_got = localStorage.getItem('_is_translator_got');
        var _is_translator_got = new RegExp("true").test(_is_translator_got);

        if (_is_translator_got !== true){
            addEventListener("mousemove", (event) => {
                if (ambiance.duration > 0 && !ambiance.paused && played == false){
                    played = true;
                    intro.play();
                    intro.volume = 0.6;
                }
            });
        }

        $('area').on('click', function() {
            var _is_translator_got = localStorage.getItem('_is_translator_got');
            var _is_translator_got = new RegExp("true").test(_is_translator_got);

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
                
                setTimeout(() => {
                    var charade = new Audio('./medias/sound/couloir/charade.mp3');
                    charade.play();
                }, 3000);
            }
            event.preventDefault();
        });

        $('#idk').on('click', function() {
            TL
            .from("#need_translator", {autoAlpha:0, duration:1, ease:"linear"})
            .from(".exit button", {autoAlpha:0, duration:1, ease:"linear"})
                TL.play();

            var idk = new Audio('./medias/sound/couloir/idk.mp3');
            idk.play();
        });

        $('#ik').on('click', function() {
            TweenMax.to("#licorn", 1.5, {autoAlpha:1, pointerEvents:"inherit", ease:"linear"})
        });

        $('.exit button').on('click', function() {
            TweenMax.set([".discussion", ".discussion img", ".message", ".exit button"], {clearProps: 'all'});
            event.preventDefault();
        });

        $('#licorn').on('click', function() {
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

        $('area').on('click', function() {
            const TL = gsap.timeline({paused: true});

            TL
            .from(".simon_container", {autoAlpha:0, duration:1, ease:"linear"})
                TL.play();

            event.preventDefault();
        });
});

    