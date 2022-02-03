//ヘッダーの色変更
$(function(){
  var $win = $(window),
      $mv = $('.mainvisual'),
      $header = $('.header-area'),
      mvHeight = $mv.outerHeight(),
      editClass = 'black';

  $win.on('load scroll', function(){
    var value = $(this).scrollTop();
    
    if( value > mvHeight){
      $header.addClass(editClass);
    }else{
      $header.removeClass(editClass);
    };

  });
})



//スライダー
$(function(){
  $('.slick-slider').slick({
    autoplay :true,
    autoplayspeed: 2000,
    fade: true,
    speed: 1000,
    cssEase: 'linear'
  });
});

//ハンバーガーメニュー
$(function(){
  $('.burger').on('click', function(){
    $('.layer, .burger, body').toggleClass('open');
  });
});