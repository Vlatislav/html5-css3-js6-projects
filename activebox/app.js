$(function () {

    /* FIXED HEADER*/
    let header = $("#header");//переменная
    let intro = $("#intro");//переменная
    let introH = intro.innerHeight();;//высота блока
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToggle");
    
    checkScroll(scrollPos,introH );
    
    //в окне при обновлении скроле и измен размера функция работает
    $(window).on("scroll resize", function(){
        introH = intro.innerHeight();
        
        scrollPos = $(this).scrollTop();
        
        checkScroll(scrollPos,introH );
    });
    
    function checkScroll(scrollPos,introH){
        if(scrollPos > introH){ //что фикс шапки проверить нужен ли
            header.addClass("fixed");
        }
        else{
            header.removeClass("fixed");
        }
    }
    
    /*SMOOTH SCROLL*/
    
    $("[data-scroll]").on("click", function(event){
        event.preventDefault();//отменяет станд поведение ссылки при клике
        
        let elementID = $(this).data('scroll');
        
        let elementOffset = $(elementID).offset().top;
        
        nav.removeClass("show");
        
        $("html, body").animate({
           scrollTop: elementOffset - 70 
        },700/*милисикунды для скрола*/);
    });
    
    /*BURGER CLICK*/
  
    
    navToggle.on("click", function(event){
        event.preventDefault();
        
        nav.toggleClass("show");
    });
    
    /*REVIEWS*/
    
    let slider = $("#reviewsSlider");
    
    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,//затемнение
        arrows: false,       //чтобы убрать дефолтные кнопочки
        dots:true
});
    
});
