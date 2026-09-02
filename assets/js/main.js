document.addEventListener('DOMContentLoaded', () => {

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Sticky header shrink-on-scroll */
  const header = document.querySelector('.site-header');
  const setHeaderState = () => header?.classList.toggle('is-scrolled', window.scrollY > 8);
  setHeaderState();
  window.addEventListener('scroll', setHeaderState, { passive: true });

  /* Scroll-reveal: tag eligible elements, then fade/slide them in as they
     enter the viewport. Skipped entirely under reduced motion — elements
     just stay in their default visible state. */
  if (!reduceMotion && 'IntersectionObserver' in window) {
    document.documentElement.classList.add('js-motion-ready');

    const revealSelectors = [
      '.section-head', '.grid > *', '.why-grid > *', '.process-step', '.timeline-item',
      '.about-photo', '.about-grid > div', '.card-portfolio', '.final-cta',
      '.filter-bar', '.cv-download'
    ];
    const revealEls = new Set();
    document.querySelectorAll(revealSelectors.join(',')).forEach(el => revealEls.add(el));

    revealEls.forEach(el => el.classList.add('reveal'));

    // Stagger items that share a direct parent (grids, tracks) by DOM order.
    const groups = new Map();
    revealEls.forEach(el => {
      const parent = el.parentElement;
      if (!groups.has(parent)) groups.set(parent, []);
      groups.get(parent).push(el);
    });
    groups.forEach(siblings => {
      siblings.forEach((el, i) => {
        el.style.setProperty('--reveal-delay', `${Math.min(i, 5) * 0.08}s`);
      });
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(el => observer.observe(el));

    // Process-track connector line fill (separate observer: its own threshold).
    const trackObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          trackObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    document.querySelectorAll('.process-track').forEach(track => trackObserver.observe(track));
  }

  /* Tools ticker: duplicate the tools grid into a continuously scrolling
     track. Skipped under reduced motion, leaving the plain static grid. */
  const toolsGrid = document.querySelector('.tools-grid');
  if (toolsGrid && !reduceMotion) {
    const wrapper = document.createElement('div');
    wrapper.className = 'tools-ticker';
    const track = document.createElement('div');
    track.className = 'ticker-track';
    track.innerHTML = toolsGrid.innerHTML + toolsGrid.innerHTML;
    wrapper.appendChild(track);
    toolsGrid.replaceWith(wrapper);
  }

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
