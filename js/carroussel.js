window.addEventListener('DOMContentLoaded', function() {
    p=0;
    container=document.querySelector(".carrousel-container");
    left=document.getElementById("left");
    right=document.getElementById("right");
    images=document.querySelectorAll(".image");
    each_image = 100/images.length;

    container.style.width=(100*images.length)+"%";
    for ( i = 0; i < images.length; i++) {
        images[i].style.width=(100/images.length)+"%";
    };
    hidden();
});

left.onclick=function(){
    if(p<0)
        p++;
    container.style.transform="translate("+p*each_image+"%)";
    container.style.transition="all 0.5s ease";
    hidden();
}

right.onclick=function(){
    if(p>-images.length+1)
        p--;
    container.style.transform="translate("+p*each_image+"%)";
    container.style.transition="all 0.5s ease";
    hidden();
}

function hidden (){
    if (p==-images.length+1)
        right.style.visibility="hidden";
    else
        right.style.visibility="visible";

    if (p==0)
        left.style.visibility="hidden";
    else
        left.style.visibility="visible";
}