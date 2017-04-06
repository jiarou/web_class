// JavaScript Document

//function scrollWin() {
//    window.scrollTo(0, 0);
//}

$(function(){
	"use strict";
   $('#backtotop').click(function(){
	        jQuery("html,body").animate({
            scrollTop:0
        },1000);
    });
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 800){
            $('#backtotop').fadeIn("fast");
        } else {
            $('#baktotop').fadeOut("fast");
        }
    });
});


$(document).ready(function(){
	"use strict";
    $("p").mouseover(function(){
        $("p").css("background-color", "#CAC5C6");
    });
    $("p").mouseout(function(){
        $("p").css("background-color", "white");
    });
});

 var size = 100;
 /* exported SizeToLarge */
  function SizeToLarge(){
            "use strict";
            if(size>499){

                alert("This is the largest !!");

            }else{

                size = size+50;

                $("p").css("font-size",size+"%");

            }

        }

 /* exported SizeTosmall */
        function SizeTosmall(){
            "use strict";
            if(size>99){
                size = size-50;
                $("p").css("font-size",size+"%");

            }else{

                alert("This is the smallest !!");

            }

        }
