$(document).ready(function(){
  $('.nav-button').click(function(){
    $('.nav-button').toggleClass('change');
  });
  $(window).scroll(function(){
      let position=$(this).scrollTop();
      if(position>=200){
          $('.nav-menu').addClass('custom-navbar');
      }
      else{
              $('.nav-menu').removeClass('custom-navbar');
          }
  
      });
// About me
 $(window).scroll(function(){
   let position= $(this).scrollTop();
   if(position>=650){
     $('.picture').addClass('fromLeft');
     $('.info').addClass('fromRight');
   }
   else{
    $('.picture').removeClass('fromLeft');
    $('.info').removeClass('fromRight');
   }
 });
// End of about me
//history
$(window).scroll(function(){
  let position= $(this).scrollTop();
  if(position>=800){
     $('.img_info').addClass('fromLeft');
     $('.history_i').addClass('fromRight'); 
  }
  else{
    $('.img_info').removeClass('fromLeft');
    $('.history_i').removeClass('fromRight')
  }
});
//end of history
// picture
$(window).scroll(function(){
  let position= $(this).scrollTop();
  if(position>=650){
    $('.fadeInLeft').addClass('fadeInLeft');
    $('.fadeInRight').addClass('fadeInRight');
  }else{
    $('.fadeInLeft').removeClass('fadeInLeft');
    $('.fadeInRight').removeClass('fadeInRight');
  }
});
// end of picture

    });
    
  