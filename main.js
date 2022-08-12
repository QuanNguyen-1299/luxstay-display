$(document).ready(function () {
    $('.slide-carousel').slick({
        infinite:false,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows:true,
        prevArrow:`<button type="button" class="slick-prev slick-arrow"></button>`,
        nextArrow:`<button type="button" class="slick-next slick-arrow"></button>`
    });
});

$(document).ready(function(){
    $('.banner__endow-location').slick({
      slidesToShow:3,
      arrows:false
    });
  });