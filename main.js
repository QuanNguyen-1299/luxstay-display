
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

function openNav() {
  document.getElementById("menu-mb").style.transform = `translateX(0%)`
  const blockOverlay = document.getElementsByClassName("nav-overlay")
  blockOverlay.setAttribute('class','d-block')
}

function closeNav() {
  document.getElementById("menu-mb").style.transform = `translateX(-100%)`

}