$(function(){
    $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true,
        dots: true,
      });

   $(".variable").slick({
        infinite: true,
       /* variableWidth: true,*/
        slidesToShow: 3,
        responsive: [  {  breakpoint: 1024,
                              settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1
                              }
                         },   {  breakpoint: 760,    
                              settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                              }
                         }
                 ]  //반응형 포인트 지정

      });
   $(".vertical-center").slick({
        arrows : false, 
        dots: false,
        vertical: true,
        centerMode: true,
        slidesToShow : 1,		// 한 화면에 보여질 컨텐츠 개수
        slidesToScroll : 1,		//스크롤 한번에 움직일 컨텐츠 개수
        autoplay : true,			// 자동 스크롤 사용 여부
        autoplaySpeed : 1000, 
        pauseOnHover : true,
         responsive: [                   
                       {  breakpoint: 760,    
                              settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                              }
                         }
                 ]  //반응형 포인트 지정

    
      });

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

   
if($(window).width() > 760) {
      $('.slide1 img').attr('src','images/main_slied.jpg');
      $('.slide2 img').attr('src','images/main_slied02.jpg');
      $('#sec_4 img').attr('src','images/sec_4_event.jpg');


  } else{
      $('.slide1 img').attr('src','images/mobile_main_slied.jpg');
      $('.slide2 img').attr('src','images/main_slied02_mobile.jpg');
      $('#sec_4 img').attr('src','images/sec_4_event_mobile.jpg');
  }

  $(window).resize(function(){
      if($(window).width() > 760){
           
           $('.slide1 img').attr('src','images/main_slied.jpg');
           $('.slide2 img').attr('src','images/main_slied02.jpg');
           $('#sec_4 img').attr('src','images/sec_4_event.jpg');
      } else {
          $('.slide1 img').attr('src','images/mobile_main_slied.jpg');
          $('.slide2 img').attr('src','images/main_slied02_mobile.jpg');
           $('#sec_4 img').attr('src','images/sec_4_event_mobile.jpg');
          
          
      }
  })


}) //제이쿼리 전체 끝