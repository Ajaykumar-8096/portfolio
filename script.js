$(document).ready(function(){
    $(window).scroll(function(){
        // Sticky navbar
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        // Scroll-up button
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Scroll-up button click
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });

    // Toggle menu/navbar
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Typing text animation
    var typed = new Typed(".typing", {
        strings: ["Python Developer","Frontend Developer","SQL Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed2 = new Typed(".typing-2", {
        strings: ["Python Developer","Frontend Developer","SQL Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});
