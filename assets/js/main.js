// Keep the footer copyright year current
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// Mobile navigation toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('site-nav');

if (toggle && nav) {
  nav.classList.add('is-collapsible');

  const setOpen = (open) => {
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  };

  toggle.addEventListener('click', () => setOpen(!nav.classList.contains('is-open')));

  // Close after choosing a section, or with Escape
  nav.addEventListener('click', (e) => {
    if (e.target.closest('a')) setOpen(false);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) {
      setOpen(false);
      toggle.focus();
    }
  });
}
