document.addEventListener("scroll", function(){
    if(window.innerHeight + document.documentElement.scrollTop > 1050){
        document.querySelector(".top-header").classList.add("summenu-top");
        document.querySelector(".displey").classList.add("summenu-top1");
        document.querySelector(".icon-instagram").classList.add("icon-instagram1");
    }else{
        document.querySelector(".top-header").classList.remove("summenu-top");
        document.querySelector(".displey").classList.remove("summenu-top1");
        document.querySelector(".icon-instagram").classList.remove("icon-instagram1");
    }
}); 

document.addEventListener("scroll", function(){
    if(window.innerHeight + document.documentElement.scrollTop > 770){
        document.querySelector(".paragraph").classList.add("summenu-top2");
        document.querySelector(".rispansiv-header").classList.add("rispansiv-header1");
        
    }else{
        document.querySelector(".paragraph").classList.remove("summenu-top2");
        document.querySelector(".rispansiv-header").classList.remove("rispansiv-header1");
    }
}); 
document.querySelector(".hamburger1").addEventListener("click", function (){
    document.querySelector(".hamburger-menu1").classList.toggle("hamburger-menu");
    document.querySelector(".position").classList.toggle("g");
})
document.querySelector(".hamburger").addEventListener("click", function (){
    document.querySelector(".rispansiv-header").classList.toggle("rispansiv-header2");

    document.querySelector(".hamburger-responsiv1").classList.toggle("hamburger-responsiv");
})

$('.image-background').slick({
    prevArrow:false,
    nextArrow:false,
    autoplay: true,
    autoplaySpeed: 4000,
});

$('.divA').slick({
    prevArrow:false,
    nextArrow:false,
    autoplay: true,
    autoplaySpeed: 4000,
});



$('.mohamad').slick({
    infinite: true,
    variableWidth: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    swipeToSlide: true,
    focusOnSelect:true,
    speed: 300,
    adaptiveHeight: true,
    prevArrow:".button",
    nextArrow:".moli"
});

setInterval(clock, 1000);

function clock() {
    let date = new Date();
    let dey = date.getDay();
    let hours = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    document.querySelector(".clock").textContent = `${dey}:${hours}:${minute}:${second}`;
};


$('.mohamad-slider').slick({
    infinite: false,
    variableWidth: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    swipeToSlide: true,
    focusOnSelect:true,
    speed: 300,
    adaptiveHeight: true,
    prevArrow:".button21",
    nextArrow:".moli21"
});



$('.slider-mini').slick({
    infinite: false,
    variableWidth: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    swipeToSlide: true,
    focusOnSelect:true,
    speed: 300,
    adaptiveHeight: true,
    prevArrow:".button1",
    nextArrow:".moli1"
});





$('.paragraph-left').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.img-rigt'
});
$('.img-rigt').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.paragraph-left',
    prevArrow:".button212",
    nextArrow:".moli212"
});

  

$('.admin-fotbal').slick({
slidesToShow: 1,
slidesToScroll: 1,
arrows: false,
});
