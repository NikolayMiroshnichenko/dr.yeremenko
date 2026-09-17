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

function markTruncatedReviews() {
  document.querySelectorAll('.review-card').forEach((card) => {
    const text = card.querySelector('.review-card__text');
    if (!text) return;
    const isTruncated = text.scrollHeight - text.clientHeight > 1;
    card.classList.toggle('review-card--has-more', isTruncated);
  });
}

function initReviewModal() {
  const modal = document.getElementById('review-modal');
  if (!modal) return;

  const nameEl = document.getElementById('review-modal-name');
  const textEl = document.getElementById('review-modal-text');

  function openModal(card) {
    const name = card.querySelector('.review-card__name')?.textContent ?? '';
    const text = card.querySelector('.review-card__text')?.textContent ?? '';
    nameEl.textContent = name;
    textEl.textContent = text;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.review-card__more').forEach((btn) => {
    btn.addEventListener('click', () => openModal(btn.closest('.review-card')));
  });

  modal.querySelectorAll('[data-review-modal-close]').forEach((el) => {
    el.addEventListener('click', closeModal);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initReviewsSlider();
  markTruncatedReviews();
  initReviewModal();
  window.addEventListener('resize', markTruncatedReviews);
});
