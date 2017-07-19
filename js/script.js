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
 

$("#menuButton").click(function() {
  $("#dim").addClass('open');
  $("#list").addClass('open');
});

$("#dim").click(function(){
    $("#dim").removeClass('open');
  $("#list").removeClass('open');
});

$(".fa-times").click(function(){
    $("#dim").removeClass('open');
  $("#list").removeClass('open');
});

$('.scrollpane').on( 'mousewheel DOMMouseScroll', function (e) { 
  
  var e0 = e.originalEvent;
  var delta = e0.wheelDelta || -e0.detail;

  this.scrollTop += ( delta < 0 ? 1 : -1 ) * 30;
  e.preventDefault();  
});





var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
       $('header').addClass("up");
   } else {
     $('header').removeClass("up");
   }
   lastScrollTop = st;
});

