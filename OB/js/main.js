let onOff = true;
$(".click").on("click", function(){
    onOff = !onOff;
    if(onOff==false){$(".select ul").show()}
    else{$(".select ul").hide()}
});






$('.s2Wrap').slick({
    speed: 5000,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    arrows: false,
    buttons: false,
    autoplay:true 
});



















$(".sbox4").on("click", function(){



    let photo = $(this).children().eq(0).html();
    $(".lbox4 .lphoto").html(photo);

    let txt1 = $(this).children(".stxt").children("h4").html();
    $(".lbox4 .ltxt h4").html(txt1);

    let txt2 = $(this).children(".stxt").children("p").html();
    $(".lbox4 .ltxt p").html(txt2);
});


$(window).on('scroll',function(){
    let scr = $(window).scrollTop();
    let s4Offset = $('.s4').offset().top;

    if(scr>=(s4Offset - 200)){
        $('.lbox4').addClass('on')
    }
});


let i = 0;

let box3 = [
    {
        name : 'box3_1',
        rotate : 0,
        left : 200,
        indexNumber : 0
    },

    {
        name: 'box3_2',
        rotate : 10,
        left:240,
        indexNumber: 1
    },

    {
        name:'box3_3',
        rotate: -10,
        left:160,
        indexNumber:2
    }
]




$('.con3').find('.box3').on('click',function(){

    let i = $(this).index();

    if(i === 2){

        $('.box3').each(function(x){
            
        $(this).animate({
            'left' : box3[x].left,
            'opacity' : 1
        });

        $(this).css({
            'transform' : 'rotate('+box3[x].rotate+'deg)'
        });

        }); //each


    
    }else{
        
    $(this).animate({
        'left' : box3[i].left - 400,
        'opacity' : 0
    },function(){
        $(this).next().css({
            'transform' : 'rotate(0)'
        }); //call-back css

        $(this).css({
            'left' : box3[i].left + 400
        })

    });//animate

    


    }//else




  
});//.box3 click