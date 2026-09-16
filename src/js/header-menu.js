export function initHeaderMenu() {
  const header = document.querySelector('.header');
  const burger = document.getElementById('header-burger');
  const nav = document.getElementById('header-nav');
  if (!header || !burger || !nav) return;

  function closeMenu() {
    header.classList.remove('is-nav-open');
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Відкрити меню');
    document.body.classList.remove('is-modal-open');
  }

  function openMenu() {
    header.classList.add('is-nav-open');
    burger.setAttribute('aria-expanded', 'true');
    burger.setAttribute('aria-label', 'Закрити меню');
    document.body.classList.add('is-modal-open');
  }

  burger.addEventListener('click', () => {
    if (header.classList.contains('is-nav-open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && header.classList.contains('is-nav-open')) {
      closeMenu();
    }
  });

  document.addEventListener('click', event => {
    if (
      header.classList.contains('is-nav-open') &&
      !header.contains(event.target)
    ) {
      closeMenu();
    }
  });

  // The mobile menu locks body scroll while open. If the viewport is
  // resized past the mobile breakpoint (e.g. rotating a device or leaving
  // DevTools responsive mode) without the menu being explicitly closed,
  // the lock would otherwise stick until the next stray click.
  const desktopQuery = window.matchMedia('(min-width: 769px)');
  desktopQuery.addEventListener('change', event => {
    if (event.matches) closeMenu();
  });
}

document.addEventListener('DOMContentLoaded', initHeaderMenu);
