//###############################
//#	Created by Alexis MORTELIER	#
//#		All Rights Reserved		#
//###############################
$(document).ready(function() 
{
    $(".menuclose").css("display", "none");
    var OuvertureDuMenu = false;
 
    $('#boutton').click(function()
    {
        if (OuvertureDuMenu == false)
        {
			
            $("nav").clearQueue().animate({
                right : '0'
            })
            $("#flou").clearQueue().animate({
			
                "margin-left" : '0%'
            })
            $(this).fadeOut(200);
            $(".menuclose").fadeIn(300);
             
            OuvertureDuMenu = true;
        } 
    });
     
    $('.menuclose').click(function()
    {
        if (OuvertureDuMenu == true)
        {
            $("nav").clearQueue().animate({
                right : '-20%'
            })
            $("#flou").clearQueue().animate({
                "margin-left" : '100%'
            })
             
            $(this).fadeOut(200);
            $("#boutton").fadeIn(300);
             
            OuvertureDuMenu = false;
        }
    });
});


$(function() {
  
$('.deroulant').click(function(){
	$(this).next('.submenu').toggle();
	});

	$(document).click(function(e) {
		var target = e.target;
		if (!$(target).is('.deroulant') && !$(target).parents().is('.deroulant')) {
	    		$('.submenu').hide();
		}
	});

});
