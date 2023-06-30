$(function () {
    $("header .headerchart ul li a").on({
        mouseover: function () {
            $(".backcolor").stop(true).animate({
                top: '10vh'
            }, 200, 'linear')
        },
    });



    $(".backcolor").on({
        mouseover: function () {
            $(".backcolor").stop(true).animate({
                top: '10vh'
            }, 200, 'linear')
        },
        mouseout: function () {
            $(".backcolor").stop(true).animate({
                top: '-50vh'
            }, 200, 'linear')
        },
    });

});

$(function(){
    $("header .headerchart .headicon2 a i").on('click',function(){
        $(".backcolor").stop(true).animate({
            top:'10vh'     
        },200,'linear')
    });
    $(".menuchart #menubar ul li").on('click',function(){
        $(".backcolor").stop(true).animate({
            top:'-50vh'     
        },200,'linear')
    });

    
$('.moviechart').slick({
    width:1140px
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});