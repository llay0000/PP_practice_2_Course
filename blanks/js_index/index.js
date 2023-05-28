$('.slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: $('.custom-prev'),
  nextArrow: $('.custom-next'),
  variableWidth: true,
  centerMode: true,
  centerPadding: '0px',
  autoplay: true,
  autoplaySpeed: 3000
});

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("mouseover", function () {
    const currentZoom = parseFloat(window.getComputedStyle(this).getPropertyValue("zoom"));

    const newZoom = currentZoom + 0.1;
    this.style.zoom = newZoom;
  });
});


