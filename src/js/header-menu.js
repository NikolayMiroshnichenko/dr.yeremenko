function initHeaderDropdowns(nav) {
  const dropdowns = Array.from(nav.querySelectorAll('[data-dropdown]'));
  if (!dropdowns.length) return;

  function close(dropdown) {
    dropdown.classList.remove('is-open');
    dropdown.querySelector('[data-dropdown-trigger]')?.setAttribute('aria-expanded', 'false');
  }

  function closeAll(except) {
    dropdowns.forEach(dropdown => {
      if (dropdown !== except) close(dropdown);
    });
  }

  dropdowns.forEach(dropdown => {
    const trigger = dropdown.querySelector('[data-dropdown-trigger]');
    if (!trigger) return;

    trigger.addEventListener('click', event => {
      event.stopPropagation();
      const isOpen = dropdown.classList.contains('is-open');
      closeAll(dropdown);
      dropdown.classList.toggle('is-open', !isOpen);
      trigger.setAttribute('aria-expanded', String(!isOpen));
    });
  });

  document.addEventListener('click', event => {
    dropdowns.forEach(dropdown => {
      if (!dropdown.contains(event.target)) close(dropdown);
    });
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeAll();
  });
}

export function initHeaderMenu() {
  const header = document.querySelector('.header');
  const burger = document.getElementById('header-burger');
  const nav = document.getElementById('header-nav');
  const backdrop = document.getElementById('header-nav-backdrop');
  if (!header || !burger || !nav) return;

  initHeaderDropdowns(nav);

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

  backdrop?.addEventListener('click', closeMenu);

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
  const desktopQuery = window.matchMedia('(min-width: 1241px)');
  desktopQuery.addEventListener('change', event => {
    if (event.matches) closeMenu();
  });
}

document.addEventListener('DOMContentLoaded', initHeaderMenu);
