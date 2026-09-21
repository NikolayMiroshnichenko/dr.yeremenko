export function initCertificatesLightbox() {
  const triggers = Array.from(document.querySelectorAll('[data-cert-trigger]'));

  const modal = document.getElementById('cert-modal');
  if (!modal || !triggers.length) return;

  const imgEl = document.getElementById('cert-modal-img');
  const counterEl = document.getElementById('cert-modal-counter');
  const closers = modal.querySelectorAll('[data-cert-close]');
  const prevBtn = modal.querySelector('[data-cert-prev]');
  const nextBtn = modal.querySelector('[data-cert-next]');

  let currentIndex = 0;

  function show(index) {
    currentIndex = (index + triggers.length) % triggers.length;
    const trigger = triggers[currentIndex];
    imgEl.src = trigger.dataset.full;
    counterEl.textContent = `${currentIndex + 1} / ${triggers.length}`;
  }

  function open(index) {
    show(index);
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('is-modal-open');
  }

  function close() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('is-modal-open');
    imgEl.src = '';
  }

  triggers.forEach((trigger, index) => {
    trigger.addEventListener('click', () => open(index));
  });

  closers.forEach(closer => closer.addEventListener('click', close));
  prevBtn?.addEventListener('click', () => show(currentIndex - 1));
  nextBtn?.addEventListener('click', () => show(currentIndex + 1));

  document.addEventListener('keydown', event => {
    if (!modal.classList.contains('is-open')) return;

    if (event.key === 'Escape') close();
    if (event.key === 'ArrowLeft') show(currentIndex - 1);
    if (event.key === 'ArrowRight') show(currentIndex + 1);
  });
}

document.addEventListener('DOMContentLoaded', initCertificatesLightbox);
