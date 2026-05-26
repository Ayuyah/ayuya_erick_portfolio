  // Custom cursor
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');
  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top = my + 'px';
  });

  function animateRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  document.querySelectorAll('a, button, .project-row, .disc-card, .cta-btn').forEach(el => {
    el.addEventListener('mouseenter', () => { cursor.classList.add('hover'); ring.classList.add('hover'); });
    el.addEventListener('mouseleave', () => { cursor.classList.remove('hover'); ring.classList.remove('hover'); });
  });

  // Parallax on scroll
  const parallaxEls = document.querySelectorAll('[data-speed]');
  window.addEventListener('scroll', () => {
    const y = window.pageYOffset;
    parallaxEls.forEach(el => {
      const speed = parseFloat(el.dataset.speed);
      el.style.transform = `translateY(${y * speed}px)`;
    });
  }, { passive: true });

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach(el => observer.observe(el));

  // Subtle hero parallax on mouse move
  const heroContent = document.querySelector('.hero-content');
  document.addEventListener('mousemove', e => {
    const cx = (e.clientX / window.innerWidth - 0.5) * 20;
    const cy = (e.clientY / window.innerHeight - 0.5) * 12;
    heroContent.style.transform = `translate(${cx * 0.3}px, ${cy * 0.3}px)`;
    document.querySelector('.c1').style.transform = `translate(${cx * 0.5}px, ${cy * 0.5}px)`;
    document.querySelector('.c2').style.transform = `translate(${-cx * 0.4}px, ${-cy * 0.4}px)`;
    document.querySelector('.c3').style.transform = `translate(${cx * 0.7}px, ${-cy * 0.6}px)`;
  });