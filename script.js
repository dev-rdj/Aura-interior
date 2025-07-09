document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.nav-menu a').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      const href = el.getAttribute('href');
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    });
  });
});
