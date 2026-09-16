export function initSymptomsReveal() {
  const list = document.querySelector('.symptoms__list');
  if (!list) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    list.classList.add('is-visible');
    return;
  }

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.2 }
  );

  observer.observe(list);
}

document.addEventListener('DOMContentLoaded', initSymptomsReveal);
