$(document).ready(function () {
    //화면이 준비되면 실행해라.
    // setInteval animate appendTo pretendTo css
    // setInterval(function(){}, time)
    //$(객체).animate({}, speed, function(){})
    //$("객체").css("속성" , "값")
    //$("옮길태그").appendTo($(부모가될태그))

    //setInterval animate appendTo or pretendTo css
    //setInterval(function(){}, time)
    //$("객체").animate({}, speed, function(){})
    //$("객체").css("스타일", "스타일속성")
    //$("옮길 태그").appendTo($("부모가될태그"))

    //     const aniw = $(".swiperSlide").width();

    //     setInterval(function () {
    //         $(".swiperWrapper").animate({
    //             "marginLeft": -aniw

    //         }, 400, function () {
    //             $(".swiperSlide").eq(0).appendTo(this)
    //             $(this).css("marginLeft", 0)
    //         })
    //     }, 3000)
    // })

    const aniw = $(".swiperSlide").width();

    setInterval(function () {
        $(".swiperWrapper").animate({
            "marginLeft": -aniw
        }, 400, function () {
            $(".swiperSlide").eq(0).appendTo(this)
            $(this).css("marginLeft", 0)
        })
    }, 1000)





})