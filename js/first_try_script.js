$('body').bind('mousewheel DOMMouseScroll', function (e) {

    var scroll = 0,
        slide1 = first_slide.position().left,
        slide2 = second_slide.position().left,
        slide3 = third_slide.position().left,
        slide4 = forth_slide.position().left,
        slide5 = fifth_slide.position().left;

    e.preventDefault();
    if (e.type == 'mousewheel') {
        scroll = e.originalEvent.wheelDeltaY * -1;
    }
    else if (e.type == 'DOMMouseScroll') {
        scroll = 40 * e.originalEvent.detail;
    }

    //        $(this).scrollTop(scroll + $(this).scroll());


    var x1 = slide1 + scroll,
        x2 = slide2 + scroll,
        x3 = slide3 + scroll,
        x4 = slide4 + scroll,
        x5 = slide5 + scroll;

    if (x1 <= 0){
        first_slide.offset({left: x1});
    }

    if (x1 <= imageWidth* -0.3) {

        if(x2 <= 0 && x1 <= imageWidth * -1){
            second_slide.offset({left: x2});
        } else if(x2 >= 0){
            second_slide.offset({left: x2});
            third_slide.offset({left: x3});
            forth_slide.offset({left: x4});
            fifth_slide.offset({left: x5});
        }
    }
    if (x2 <= imageWidth * -0.3) {
        if(x3 <= 0 && x2 <= imageWidth * -1){
            third_slide.offset({left: x3});
        } else if(x3 >= 0) {
            third_slide.offset({left: x3});
            forth_slide.offset({left: x4});
            fifth_slide.offset({left: x5});
        }

    }
    if (x3 <= imageWidth * -0.3) {
        if(x4 <= 0 && x3 <= imageWidth * -1){
            forth_slide.offset({left: x4});
        } else if(x4 >= 0){
            forth_slide.offset({left: x4});
            fifth_slide.offset({left: x5});
        }

    }
    if (x4 <= imageWidth * -0.3) {
        fifth_slide.offset({left: x5});
    }

});