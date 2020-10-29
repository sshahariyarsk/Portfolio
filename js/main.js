// Preloader
$(window).on("load", function() {

    $(".loader .inner").fadeOut(500, function() {
        $(".loader").fadeOut(750);
    });
});
$(document).ready(function () {
	//super slide
	//option
	$('#slides').superslides({
		play : 5000,
		pagination : false,
		animation :'fade'
	});
	//typed js
	var typed = new Typed('.typed', {
  strings: ['Web Developer', 'Web Designer','Software Developer'],
  smartBackspace: true,typeSpeed: 60,loop: true,showCursor: false, // Default value

});
	//owl carousal
	$('.owl-carousel').owlCarousel({
    loop:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
});
	//easy pie chart
	$('.chart').easyPieChart({
            //your options goes here
            easing : 'easeInOut',
            barColor:'white',
            trackColor: false,
            scaleColor:false,
            lineWidth:4,
            size: 152,
            onStep: function (from, to, percent){
            	$(this.el).find('.percent').text(Math.round(percent));
            }
        });
    //counter up
	 $('.counter').counterUp({
                delay: 10,
                time: 500
            });
     //smooth scroll
     $("#navobar li a").click(function(e) {
        e.preventDefault();

        var targetElement = $(this).attr("href");
        var targetPosition = $(targetElement).offset().top;
        $("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");

    });
     //fancy boxx for gallery
     $('[data-fancybox]').fancybox();
     //sort and filter

     $("#filters a").click(function() {

     $("#filters .current").removeClass("current");
     $(this).addClass("current");
     var selector = $(this).attr("data-filter");

     $(".items").isotope({
        filter: selector,
        animationOptions:{
            duration: 1500,
            easing: 'linear',
            queue: false
        }
     });
     return false;
});
});