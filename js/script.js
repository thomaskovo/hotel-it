function headerAdjust(){
     if($("header").width() < 1100){
   
    $("#a_bussiness").text("Bussiness");
    $("#a_security").text("Security");
    $("#a_management").text("Management");
    $("#a_facility").text("Facility");
    }
    else{
    $("#a_bussiness").text("IT Bussiness Solutions");
    $("#a_security").text("Asset Security");
    $("#a_management").text("Hotel IT Management");
    $("#a_facility").text("IT Facility");
    }
}


headerAdjust();

$(window).resize(function() {
    
    headerAdjust();

});
 var open = 0;
$(".lang").click(function() {
    if(open){
    $(".lang_drop").removeClass('open');
        open=0;
        $("#dim").removeClass('openTop');
    }
    else{
    $(".lang_drop").addClass('open');  
        open=1;
        $("#dim").addClass('openTop');
    }
    
});


$("#menuButton").click(function() {
    $("#dim").addClass('open');
    $("#list").css("transform","translate(-360px,0)");
    scrollDisable();
});

$("#dim").click(function(){
    $(".lang_drop").removeClass('open');
    $("#dim").removeClass('open').removeClass('openTop');
    open=0;
    $("#list").css("transform","translate(0,0)");
    scrollEnable();
});

$(".fa-times").click(function(){
    $("#dim").removeClass('open');
    $("#list").css("transform","translate(0,0)");
    scrollEnable();
});




var a = document.createElement('a');

    a.href = window.location.href;

var str = a.pathname.replace("/hotel-it/", "../");
    console.log(str);

function sk(){
    window.location.href = str;
}
function en(){
    window.location.href = str;
}


var lastScrollTop = 0;
var header = $('header');

$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop && $(this).scrollTop()>150){
       if(!header.hasClass('up'))
       header.addClass("up");
       
   } else {
       if(st!=lastScrollTop)
           if(header.hasClass('up'))
            header.removeClass("up");
   }
   lastScrollTop = st;
});

var $body = $('body'),
    scrollDisabled = false,
    scrollTop;

function scrollDisable() {
    if (scrollDisabled) {
        return;
    }

    scrollTop = $(window).scrollTop();

    $body.addClass('stop')
        .css({
        top: -1 * scrollTop
    });

    scrollDisabled = true;
}

function scrollEnable() {
    if (!scrollDisabled) {
        return;
    }

    $body.removeClass('stop');
    $(window).scrollTop(scrollTop);

    scrollDisabled = false;
}