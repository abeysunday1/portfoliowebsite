document.addEventListener('DOMContentLoaded', () => {

  /* Mobile nav drawer */
  const toggle = document.querySelector('.nav-toggle');
  const drawer = document.querySelector('.nav-drawer');
  const scrim = document.querySelector('.nav-scrim');
  const closeBtn = document.querySelector('.drawer-close');

  const openDrawer = () => { drawer?.classList.add('open'); scrim?.classList.add('open'); };
  const closeDrawer = () => { drawer?.classList.remove('open'); scrim?.classList.remove('open'); };

  toggle?.addEventListener('click', openDrawer);
  closeBtn?.addEventListener('click', closeDrawer);
  scrim?.addEventListener('click', closeDrawer);
  drawer?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeDrawer));

  /* Portfolio filter (portfolio.html) */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioCards = document.querySelectorAll('[data-category]');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;

      portfolioCards.forEach(card => {
        const show = filter === 'all' || card.dataset.category === filter;
        card.style.display = show ? '' : 'none';
      });
    });
  });

  /* Contact form (client-side placeholder only — wire to a real endpoint before launch) */
  const form = document.querySelector('#contact-form');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const status = document.querySelector('#form-status');
    if (status) {
      status.textContent = 'Thanks for reaching out. This form is a front-end placeholder — connect it to your email service or CRM to start receiving messages.';
      status.style.display = 'block';
    }
    form.reset();
  });

});
