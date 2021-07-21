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
  })

}) //제이쿼리 전체 끝