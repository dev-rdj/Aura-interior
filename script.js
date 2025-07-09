document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    spaceBetween: 16,
    slidesPerView: 1
  });
});
