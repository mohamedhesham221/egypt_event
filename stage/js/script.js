$(function(){

$('.toggler-button').on('click', function(){
    $('nav').stop(false,true).animate({
        left: 0
    }, 500, function(){
        $('.toggler-button').css("color","#edc988")
    })
})

$('.close-nav').on('click', function(){
    $('nav').stop(false,true).animate({
        left: '-350px'
    }, 500, function(){
        $('.toggler-button').css("color","#f4f4f4")
    })
})


$(window).scroll(function(){

    if($(this).scrollTop() >= 50){
        $(".desert img").stop(true,true).animate({
            top: "-40px"
        }, 100, function(){
            $(".pyramids img").stop(true,true).animate({
                top: "350px"
            })
    
        })


    }else{
        $(".desert img").stop(true,true).animate({
            top: "50px"
        },100,function(){
            $(".pyramids img").stop(true,true).animate({
                top: "160px"
            })
    
        })

    }
})

$('.nav-link,.btn-to-top').on('click', function(e){
    e.preventDefault();

    $('html,body').animate({
        scrollTop: $('#' + $(this).data('scroll')).offset().top
    }, 'slow')
    
})


$('.nav-item').not(":last-child").on('click', function(){
    $(this).addClass('active').siblings().removeClass('active')
})



var toTop = $('.scroll-top');
toTop.on('click', function(){
    $('html,body').stop(true,true).animate({scrollTop: $('#' + $(this).data('scroll')).offset().top}, 'slow')
});

$(window).scroll(function(){
    $(this).scrollTop() >= 700 ?  toTop.stop(false,true).fadeIn(500) : toTop.stop(false,true).fadeOut(500)
});


})
