$(function(){
 
    /*0 닫힘, 1 열림*/
  
  $('#header .nav_btn').click(function(){      
          $('#mobile').animate({left:'0'});
  });
  $('#mobile_nav .close').click(function(){      
          $('#mobile').animate({left:'-100%'});
  }); 
  $('#mobile_nav .depth1 > li').each(function(){
      var alink = $(this).find('> a');
      var depth2 = $(this).find('> .depth2')
      alink.click(function(){
          $('#mobile_nav .depth2').slideUp();
          depth2.slideDown();
      })
  
  $('.tabSet').each(function(){       
      var anchor = $(this).find('.tabs a');
      var anchor_on = $(this).find('.tabs a.on');
	  var phref_on =  anchor_on.attr('phref');
	  var this_panel = $(this).find('.panel')

      $(phref_on).show();
      anchor.each(function(){
           var phref = $(this).attr('phref');
		   
            $(this).click(function(){
				this_panel.hide();
              anchor.removeClass('on'); //$('.tabs a')
              $(phref).show();
              $(this).addClass('on');

          }) //click
       }) //anchor
     })  //tabSet
   })

    $('.panels .depth2 > li').mouseenter(function(){
        $('.panels .depth2 > li').removeClass('panel_on');
        $(this).addClass('panel_on');
    })

}) //제이쿼리 전체 끝