// Get the list items
const listItems = document.querySelectorAll('header .navbar ul li');

// Add class to each list item after a delay
listItems.forEach((item, index) => {
    setTimeout(() => {
        item.classList.add('fade-in');
    }, index * 300); // Adjust the delay time here
});

$(document).ready(function() {
    // Toggle navbar on click
    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
        $('.navbar').toggleClass('active'); // Added to toggle active class along with nav-toggle
    });

    // Close navbar when window is loaded or scrolled
    $(window).on('load scroll', function() {
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');
        $('.navbar').removeClass('active'); // Also remove active class

        if($(window).scrollTop() > 30){
            $('header').addClass('header-active');
        }else{
            $('header').re
        }

        $('section').each(function(){
            var id = $(this).attr('id');
            var height = $(this).height();
            var offset = $(this).offset().top -200;
            var top = $(window).scrollTop();
            if(top >= offset && top < offset + height){
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find('[data-scroll="' + id +'"]').addClass('active');
            }
        });
    });
});


// JavaScript code to scroll the header to the top when scrolled
window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    if (window.scrollY > 0) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


