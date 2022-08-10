$(document).ready(function () {
  $('.image__slide').slick({
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    prevArrow:`<button type="button" class="slick-prev slick-arrow"></button>`,
    nextArrow:`<button type="button" class="slick-next slick-arrow"></button>`
  });  
});

