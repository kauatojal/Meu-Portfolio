(() => {
  const body = document.body;
  const menu = document.querySelector('#menu-toggle');
  const nav = document.querySelector('#site-nav');
  const progress = document.querySelector('#scroll-progress');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  menu?.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  });
  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open'); menu?.setAttribute('aria-expanded', 'false'); menu?.setAttribute('aria-label', 'Abrir menu');
  }));

  const updateProgress = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = `${scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0}%`;
  };
  window.addEventListener('scroll', updateProgress, { passive: true }); updateProgress();

  const reveals = document.querySelectorAll('.reveal');
  if (reduceMotion) reveals.forEach(el => el.classList.add('is-visible'));
  else if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    }), { threshold: .12 });
    reveals.forEach(el => observer.observe(el));
  } else reveals.forEach(el => el.classList.add('is-visible'));

  if (!reduceMotion && window.gsap) {
    window.gsap.from('.hero-copy > *', { opacity: 0, y: 22, duration: .65, stagger: .1, ease: 'power2.out', delay: .12 });
    window.gsap.from('.terminal-card', { opacity: 0, y: 30, rotate: -10, duration: 1, ease: 'power3.out', delay: .2 });
    window.gsap.from('.floating-chip', { opacity: 0, scale: .75, duration: .55, stagger: .12, ease: 'back.out(1.7)', delay: .65 });
  }

  const visual = document.querySelector('.hero-visual');
  const terminal = document.querySelector('.terminal-card');
  if (visual && terminal && !reduceMotion && window.matchMedia('(pointer:fine)').matches) {
    visual.addEventListener('pointermove', event => {
      const rect = visual.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - .5;
      const y = (event.clientY - rect.top) / rect.height - .5;
      terminal.style.transform = `rotateX(${y * -4}deg) rotateY(${x * 5}deg) rotateZ(-4deg) translate(${x * 5}px, ${y * 5}px)`;
    });
    visual.addEventListener('pointerleave', () => { terminal.style.transform = 'rotate(-5deg)'; });
  }

  // Keep content usable even if an external animation library is unavailable.
  body.classList.add('js-ready');
})();
