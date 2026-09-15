import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

export function initReviewsSlider() {
  const el = document.querySelector('.reviews__slider');
  if (!el) return;

  new Swiper(el, {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 20,
    grabCursor: true,
    navigation: {
      nextEl: '.reviews__arrow--next',
      prevEl: '.reviews__arrow--prev',
    },
    breakpoints: {
      480: { slidesPerView: 1.15, spaceBetween: 20 },
      768: { slidesPerView: 2, spaceBetween: 24 },
      1024: { slidesPerView: 2.3, spaceBetween: 28 },
      1280: { slidesPerView: 3, spaceBetween: 32 },
    },
  });
}

document.addEventListener('DOMContentLoaded', initReviewsSlider);
