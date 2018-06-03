$(document).ready(function() {
$('html').on('DOMMouseScroll mousewheel', function (e) {
  if(e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0) { 
    //scroll down
    
    $( "#topMenu" ).addClass( "hide-nav-bar" );
  } else {
    //scroll up
   
    $( "#topMenu" ).removeClass( "hide-nav-bar" );
  }
    });
  });
