

$(document).ready(function () {

    // $("#header_area").sticky({topSpacing:0});
    $(function(){
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: false
        });
    });


    $('.service-carousal').owlCarousel({
        loop:true,
        margin:5,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            567:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            }
        }
    });

    $('.course_area').owlCarousel({
        loop:true,
        margin:10,
        pagination:true,
        responsive:{
            0:{
                items:1
            },
            567:{
                items:2
            },
            992:{
                items:3
            }

        }
    });
    $('.testimonial_area').owlCarousel({
        loop:true,
        margin:10,
        pagination:true,
        responsive:{
            0:{
                items:1
            },
            567:{
                items:1
            },
            992:{
                items:1
            }

        }
    });

    $('.client-area').owlCarousel({
        loop:true,
        margin:5,

        nav:true,
        responsive:{
            0:{
                items:2
            },
            567:{
                items:4
            },
            992:{
                items:6
            }

        }
    });
    
    
});