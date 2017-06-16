//header-nav的添加背景的效果
$(function(){
  $('.nav-main ul li:first-child').addClass('nav-main-bg');
  $('.nav-main ul li').hover(function() {
    $(this).addClass('nav-main-bg').siblings().removeClass('nav-main-bg');
  }, function() {
    $(this).removeClass('nav-main-bg');
    $('.nav-main ul li:first-child').addClass('nav-main-bg');
  });
})
//banner的swiper动画效果
$(function(){
  var mySwiper = new Swiper('.swiper-container', {
  autoplay: 2000,//可选选项，自动滑动
  pagination : '.swiper-pagination',
  effect : 'fade',
  fade: {
  crossFade: true,
  // prevButton:'.swiper-button-prev',
  // nextButton:'.swiper-button-next',
 }
 })
})
