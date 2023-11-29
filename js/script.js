let headerSlider = new Swiper('.main__slider', {
  slidesPerView: 1,
  spaceBetween: 0,
  slidesPerGroup: 1,
  centerSlidesBounds: true,
  centerInsufficientSlides: true,
  centerSlides: true,
  loop: true,
  loopFillGroupWithBlank: true,

  autoplay: {
    delay: 5000,
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
});

let gameSlider = new Swiper('.game__slider', {
  slidesPerView: 3,
  spaceBetween: 10,
  slidesPerGroup: 1,
  centerSlidesBounds: true,
  centerInsufficientSlides: true,
  centerSlides: true,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  autoplay: {
      delay: 5000,
  },
});

let gameListItems = document.querySelectorAll('.swiper-slide');

gameListItems.forEach(item =>{
    item.addEventListener('mouseenter', function () {
        this.querySelector('.demo_wrapper').classList.add('_active');
    });

    item.addEventListener('mouseleave', function () {
        this.querySelector('.demo_wrapper').classList.remove('_active');
    });
});

let promotionOpen = document.querySelector('.promotions_btn'),
    promoitionClose = document.querySelector('.close_btn'),
    promotions = document.querySelector('.promotions');

promotionOpen.addEventListener('click', () =>{
    promotions.classList.add('_active');
});

promoitionClose.addEventListener('click', () => {
    promotions.classList.remove('_active');
});