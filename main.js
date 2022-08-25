
$(document).ready(function () {
  //slide-carousel
  slickSlide(myProperty, breakPoint);
  //banner__endow-location
  slickSlide(myProperty1, breakPoint1)
  //suggestions-location
  slickSlide(myProperty2, breakPoint)
  //discover-location
  slickSlide(myProperty3, breakPoint2)
  //user-manual-location
  slickSlide(myProperty4, breakPoint)

});




const slickSlide = (property, responsive) => {
  $(property.className).slick({
    infinite: property.infinite,
    slidesToShow: property.slidesToShow,
    slidesToScroll: property.slidesToScroll,
    arrows: property.arrows,
    prevArrow: property.action && `<button type="button" class="slick-prev slick-arrow arrow-sugges "><i class="fa-solid fa-angle-left"></i></button>`,
    nextArrow: property.action && `<button type="button" class="slick-next slick-arrow arrow-sugges "><i class="fa-solid fa-angle-right"></i></button>`,
    responsive: responsive

  });
}
const CLASS = {
  _mobile: 'is-mobile',
  _tablet: 'is-tablet',
  _desktop: 'is-desktop',
  _portrait: 'is-portrait',
  _landscape: 'is-landscape',

  _active: 'is-active',
  _disable: 'is-disable',
  _guestOpen: 'search__guest--box-open'
};

$(document).ready(function () {
  $('.navbar .toggle').on('click', function (evt) {
    evt.preventDefault();
    $('.navbar').toggleClass('navbar-open');
  });

  $('.navbar .search-moblie').on('click', function (evt) {
    evt.preventDefault();
    $('.search').toggleClass('active');
  });

  $('.menu .arrow').on('click', function (evt) {
    evt.preventDefault();
    const obj = $(this),
      parent = obj.parents('.menu-item');

    parent.toggleClass(CLASS._active);
  });

  $('.navbar-overlay').on('click', function (evt) {
    $('.navbar').removeClass('navbar-open');
  });

  $('.shoping-cart').on('click', function () {
    $('.menu-cart').toggleClass(CLASS._active);    
  });
 
  $('.search__guest__number').on('click', function () {
    $('.search__guest--box').toggleClass(CLASS._guestOpen);
  });
});

function openNav() {
  document.getElementById("menu-mb").style.transform = `translateX(0%)`
  const blockOverlay = document.getElementsByClassName("nav-overlay")
  blockOverlay.setAttribute('class', 'd-block')
}

function closeNav() {
  document.getElementById("menu-mb").style.transform = `translateX(-100%)`

}

$( "#datepicker" ).datepicker({
  showOn: "button",
  buttonText: "Ngày",
  numberOfMonths: 2,
  showButtonPanel: true
});

