export function initServicesModal() {
  const modal = document.getElementById('service-modal');
  if (!modal) return;

  const titleEl = modal.querySelector('.service-modal__title');
  const descEl = modal.querySelector('.service-modal__desc');
  const listEl = modal.querySelector('.service-modal__list');
  const triggers = document.querySelectorAll('[data-service-trigger]');
  const closers = modal.querySelectorAll('[data-service-close]');

  function open(card) {
    titleEl.textContent = card.dataset.title || '';
    descEl.textContent = card.dataset.desc || '';

    const points = (card.dataset.points || '')
      .split('|')
      .map(point => point.trim())
      .filter(Boolean);

    listEl.innerHTML = '';
    points.forEach(point => {
      const li = document.createElement('li');
      li.textContent = point;
      listEl.appendChild(li);
    });

    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('is-modal-open');
  }

  function close() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('is-modal-open');
  }

  triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const card = trigger.closest('[data-service]');
      if (card) open(card);
    });
  });

  closers.forEach(closer => {
    closer.addEventListener('click', close);
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && modal.classList.contains('is-open')) {
      close();
    }
  });
}

document.addEventListener('DOMContentLoaded', initServicesModal);
