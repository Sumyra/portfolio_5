$(function(){

  $("#use .user_slider .user_card").slick({
    slidesToShow:1,
    slidesToScroll:1,
    arrows:false,
    asNavFor: '#use .use_slider .user_image'

  })
  $(" #use .use_slider .user_image ").slick({
    slidesToShow:3,
    slidesToScroll:1,
    dots: true,  
    arrows: false,
    asNavFor: '#use .user_slider .user_card',
    centerMode: true,
    centerPadding: '0px',
    
})
new VenoBox({
  selector: ".venobox",
  spinner: "flow",
  navSpeed: 1000,
  share: true,
  
});

})






          
  

 










