/**
 * Main script — builds services and gallery from data/content.js, smooth scroll for nav.
 * Depends on: data/content.js loaded before this script in index.html.
 */
(function () {
  if (typeof SITE_DATA === 'undefined') return;

  const { services, gallery } = SITE_DATA;

  // ----- Services grid -----
  const servicesEl = document.getElementById('services-grid');
  if (servicesEl && Array.isArray(services)) {
    servicesEl.innerHTML = services
      .map(
        (s) => `
        <article class="service-card">
          <img src="${escapeHtml(s.image)}" alt="${escapeHtml(s.alt)}" loading="lazy">
          <div class="content">
            <h3>${escapeHtml(s.title)}</h3>
            <p>${escapeHtml(s.description)}</p>
          </div>
        </article>
      `
      )
      .join('');
  }

  // ----- Gallery -----
  const galleryEl = document.querySelector('.gallery');
  if (galleryEl && Array.isArray(gallery)) {
    galleryEl.innerHTML = gallery
      .map(
        (img) =>
          `<img src="${escapeHtml(img.src)}" alt="${escapeHtml(img.alt)}" loading="lazy">`
      )
      .join('');
  }

  // ----- Smooth scroll for nav links -----
  document.querySelectorAll('.nav a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      const id = this.getAttribute('href').slice(1);
      const target = id ? document.getElementById(id) : null;
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
})();
