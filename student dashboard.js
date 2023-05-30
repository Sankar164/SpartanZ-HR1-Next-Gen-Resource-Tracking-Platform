

$(function(){
    $('.carousel-item').eq(0).addClass('active');
    var total = $('.carousel-item').length;
    var current = 0;
    $('#moveRight').on('click', function(){
      var next=current;
      current= current+1;
      setSlide(next, current);
    });
    $('#moveLeft').on('click', function(){
      var prev=current;
      current = current- 1;
      setSlide(prev, current);
    });
    function setSlide(prev, next){
      var slide= current;
      if(next>total-1){
       slide=0;
        current=0;
      }
      if(next<0){
        slide=total - 1;
        current=total - 1;
      }
             $('.carousel-item').eq(prev).removeClass('active');
             $('.carousel-item').eq(slide).addClass('active');
        setTimeout(function(){
  
        },800);
      
  
      
      console.log('current '+current);
      console.log('prev '+prev);
    }
  });var sickPrimary = {
    autoplay: true,
    autoplaySpeed: 2400,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 1800,
    cssEase: 'cubic-bezier(.84, 0, .08, .99)',
    asNavFor: '.text-slider',
    centerMode: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next')
}

var sickSecondary = {
    autoplay: true,
    autoplaySpeed: 2400,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1800,
    cssEase: 'cubic-bezier(.84, 0, .08, .99)',
    asNavFor: '.image-slider',
    prevArrow: $('.prev'),
    nextArrow: $('.next')
}

$('.image-slider').slick(sickPrimary);
$('.text-slider').slick(sickSecondary);