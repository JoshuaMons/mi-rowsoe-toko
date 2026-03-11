/**
 * Main script — builds services and gallery from data/content.js, smooth scroll for nav.
 * Depends on: data/content.js loaded before this script in index.html.
 */
(function () {
  if (typeof SITE_DATA === 'undefined') return;

  const { services, gallery, galleryFood } = SITE_DATA;
  const galleryImages = galleryFood && galleryFood.length ? galleryFood : gallery;

  // ----- Services grid (clickable cards) -----
  const servicesEl = document.getElementById('services-grid');
  if (servicesEl && Array.isArray(services)) {
    servicesEl.innerHTML = services
      .map(
        (s) => {
          const cardContent = `
            <img src="${escapeHtml(s.image)}" alt="${escapeHtml(s.alt)}" loading="lazy">
            <div class="content">
              <h3>${escapeHtml(s.title)}</h3>
              <p>${escapeHtml(s.description)}</p>
            </div>
          `;
          const href = s.href || '#';
          return `<a class="service-card" href="${escapeHtml(href)}">${cardContent}</a>`;
        }
      )
      .join('');
  }

  // ----- Gallery (use galleryFood when present = food only) -----
  const galleryEl = document.querySelector('.gallery');
  if (galleryEl && Array.isArray(galleryImages)) {
    galleryEl.innerHTML = galleryImages
      .map(
        (img) =>
          `<img src="${escapeHtml(img.src)}" alt="${escapeHtml(img.alt)}" loading="lazy">`
      )
      .join('');
  }

  // ----- Smooth scroll for anchor links (nav + service cards) -----
  function initSmoothScroll(selector) {
    document.querySelectorAll(selector).forEach(function (link) {
      link.addEventListener('click', function (e) {
        const href = this.getAttribute('href') || '';
        if (href.startsWith('#')) {
          const id = href.slice(1);
          const target = id ? document.getElementById(id) : null;
          if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      });
    });
  }
  initSmoothScroll('.nav a[href^="#"]');
  initSmoothScroll('a.service-card[href^="#"]');

  // ----- Scroll reveal (sections, service cards, gallery images) -----
  function initScrollReveal() {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      document.querySelectorAll('.section, .service-card, .gallery img').forEach(function (el) {
        el.classList.add('is-visible');
      });
      return;
    }
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { rootMargin: '0px 0px -40px 0px', threshold: 0.05 }
    );
    document.querySelectorAll('.section').forEach(function (el) {
      observer.observe(el);
    });
    document.querySelectorAll('.service-card').forEach(function (el) {
      observer.observe(el);
    });
    document.querySelectorAll('.gallery img').forEach(function (el) {
      observer.observe(el);
    });
  }
  // Run after service cards and gallery are injected
  initScrollReveal();

  // ----- Hero banner slideshow -----
  (function () {
    const slideshow = document.querySelector('.hero-slideshow');
    if (!slideshow) return;
    const slides = slideshow.querySelectorAll('.hero-slide');
    if (slides.length < 2) return;
    const duration = 5000;
    let index = 0;
    function next() {
      slides[index].classList.remove('hero-slide--active');
      index = (index + 1) % slides.length;
      slides[index].classList.add('hero-slide--active');
    }
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setInterval(next, duration);
    }
  })();

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
})();
