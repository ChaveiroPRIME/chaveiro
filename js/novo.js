(function () {
  'use strict';

  const PHONE = '5547997324516';

  /* ── Serviços → WhatsApp ── */
  document.querySelectorAll('.service-card[data-msg]').forEach(card => {
    card.addEventListener('click', () => {
      const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(card.dataset.msg)}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    });
  });

  /* ── Animações de entrada com IntersectionObserver ── */
  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          obs.unobserve(e.target);
        }
      }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));
  } else {
    document.querySelectorAll('.fade-up').forEach(el => el.classList.add('visible'));
  }
})();
