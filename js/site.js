/* =========================================================
   Enrúmbate — header, footer, tarjetas y utilidades compartidas
   Depende de js/data.js
   ========================================================= */
(function () {
  const C = ENR.contacto;

  /* ---------- Iconos (trazo, 24×24) ---------- */
  const P = {
    music:  '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
    cheers: '<path d="M8 2h5l-1 7a3 3 0 0 1-3 2.5A3 3 0 0 1 6 9z" transform="rotate(-12 9 7)"/><path d="M11 22h5M8.5 13l1.5 9" transform="rotate(-12 9 7)"/><path d="M16 2h5l-.5 7a3 3 0 0 1-3 2.5A3 3 0 0 1 14.5 9z" transform="rotate(12 18 7)"/><path d="M15 22h5M18 13l-.5 9" transform="rotate(12 18 7)"/>',
    route:  '<circle cx="6" cy="19" r="2.5"/><circle cx="18" cy="5" r="2.5"/><path d="M8.5 19H15a3.5 3.5 0 0 0 0-7H9a3.5 3.5 0 0 1 0-7h6.5"/>',
    glass:  '<path d="M8 2h8l-.5 6a3.5 3.5 0 0 1-7 0z"/><path d="M12 11.5V21M8 21h8"/>',
    plane:  '<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>',
    palm:   '<path d="M13 8c0-2.8-2.2-5-5-5-1.4 0-2.6.6-3.5 1.5M13 8c0-2.8 2.2-5 5-5 1.4 0 2.6.6 3.5 1.5M13 8l-4 4M13 8l4 4M13 8c-1 4-1 9 0 14M3 22h18"/>',
    dish:   '<path d="M3 17h18M5 17a7 7 0 0 1 14 0M12 8V6M10 6h4M2 20h20"/>',
    people: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><circle cx="17" cy="9" r="2.5"/><path d="M16 14.2a5 5 0 0 1 6 4.8"/>',
    gem:    '<path d="M6 3h12l4 6-10 12L2 9z"/><path d="M2 9h20M12 21 8 9l4-6 4 6z"/>',
    ticket: '<path d="M3 8a2 2 0 0 0 0 4v0a2 2 0 0 1 0 4v2h18v-2a2 2 0 0 1 0-4 2 2 0 0 1 0-4V6H3z"/><path d="M14 6v12" stroke-dasharray="2 2"/>',
    badge:  '<circle cx="12" cy="9" r="6"/><path d="m12 6 1 2 2.2.3-1.6 1.5.4 2.2-2-1-2 1 .4-2.2-1.6-1.5L11 8z"/><path d="M8.5 14 7 22l5-3 5 3-1.5-8"/>',
    car:    '<path d="M5 17h14v-5l-2-5H7l-2 5z"/><path d="M3 12h18"/><circle cx="7.5" cy="17" r="2"/><circle cx="16.5" cy="17" r="2"/>',
    crown:  '<path d="m3 8 4.5 4L12 5l4.5 7L21 8l-2 11H5z"/>',
    cal:    '<rect x="3" y="4.5" width="18" height="16" rx="2.5"/><path d="M3 9.5h18M8 2.5v4M16 2.5v4"/>',
    pin:    '<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
    arrow:  '<path d="M9 5l7 7-7 7"/>',
    spark:  '<path d="M12 2c.6 4.6 2.4 7.4 10 10-7.6 2.6-9.4 5.4-10 10-.6-4.6-2.4-7.4-10-10 7.6-2.6 9.4-5.4 10-10z"/>'
  };
  const FILL = {
    wa: '<path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1-.7-.3-1.4-.7-2-1.3-.6-.5-1-1.1-1.4-1.8-.1-.2 0-.4.1-.5l.4-.5.3-.5v-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.6.6-.9 1.3-.9 2.1.1.9.4 1.8 1 2.6 1.1 1.6 2.4 2.9 4.1 3.7.5.2.9.4 1.4.5.5.2 1 .2 1.5.1.6-.1 1.4-.6 1.7-1.1.2-.4.2-.8.1-1.2l-.5-.3z"/>',
    fb: '<path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.4H8v3h2.6V21h2.9z"/>'
  };
  function icon(name, cls) {
    if (FILL[name]) return `<svg class="ico ${cls || ''}" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">${FILL[name]}</svg>`;
    if (name === 'ig') return `<svg class="ico ${cls || ''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>`;
    return `<svg class="ico ${cls || ''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[name] || ''}</svg>`;
  }

  /* ---------- WhatsApp ---------- */
  function wa(texto) {
    return `https://wa.me/${C.whatsapp}?text=${encodeURIComponent(texto || 'Hola Enrúmbate, quiero armar un plan')}`;
  }

  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  /* ---------- Header ---------- */
  const NAV = [
    ['inicio', 'Inicio', 'inicio.html'],
    ['experiencias', 'Experiencias', 'experiencias.html'],
    ['originales', 'Originales', 'originales.html'],
    ['select', 'Select', 'select.html'],
    ['calendario', 'Calendario', 'calendario.html'],
    ['nosotros', 'Nosotros', 'nosotros.html'],
    ['contacto', 'Contacto', 'contacto.html']
  ];
  function header(active) {
    const links = NAV.map(([k, t, h]) =>
      `<a href="${h}" class="nav-${k}${k === active ? ' is-active' : ''}"${k === active ? ' aria-current="page"' : ''}>${t}</a>`).join('');
    return `
    <header class="site-header">
      <div class="container header-inner">
        <a class="brand brand-tag" href="inicio.html" aria-label="Enrúmbate, inicio">
          <img src="assets/logo-mark.webp" alt="" width="34" height="44">
          <span class="brand-words"><span class="brand-name">Enrúmbate</span><small>Rumbo a tu siguiente experiencia</small></span>
        </a>
        <nav class="main-nav" id="main-nav" aria-label="Navegación principal">
          ${links}
          <a class="btn btn-primary nav-cta" href="${wa()}" target="_blank" rel="noopener">${icon('wa', 'btn-icon')} Hablemos</a>
        </nav>
        <button class="nav-toggle" aria-expanded="false" aria-controls="main-nav">
          <span class="sr-only" data-lbl>Abrir menú</span><span class="bars" aria-hidden="true"></span>
        </button>
      </div>
    </header>`;
  }

  /* ---------- Footer ---------- */
  function footer() {
    const cred = ENR.creditos.map(([t, a, l]) => `“${esc(t)}”, ${esc(a)} (${l})`).join(' · ');
    return `
    <footer class="site-footer on-dark">
      <div class="container footer-grid">
        <div class="footer-brand">
          <a class="brand brand-tag" href="inicio.html">
            <img src="assets/logo-mark-light.webp" alt="" width="34" height="44">
            <span class="brand-words"><span class="brand-name">Enrúmbate</span><small>Rumbo a tu siguiente experiencia</small></span>
          </a>
          <p>Planes memorables, con todo el gusto de vivirlos. Experiencias en México y durante tus viajes.</p>
        </div>
        <nav class="footer-nav" aria-label="Secciones">
          <h3>Explora</h3>
          ${NAV.map(([k, t, h]) => `<a href="${h}">${t}</a>`).join('')}
        </nav>
        <div class="footer-contact">
          <h3>Contacto</h3>
          <a class="text-link" href="${wa()}" target="_blank" rel="noopener">WhatsApp ${C.whatsappTexto}</a>
          <a class="text-link" href="mailto:${C.email}">${C.email}</a>
          <ul class="social" aria-label="Redes sociales">
            <li><a href="${wa()}" target="_blank" rel="noopener" aria-label="WhatsApp">${icon('wa')}</a></li>
            <li><a href="${C.facebook}" target="_blank" rel="noopener" aria-label="Facebook">${icon('fb')}</a></li>
            <li><a href="${C.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${icon('ig')}</a></li>
          </ul>
        </div>
      </div>
      <div class="container footer-bottom">
        <span>© 2026 Enrúmbate · Rumbo a tu siguiente experiencia</span>
        <a class="to-top" href="#top">Volver arriba ${icon('arrow')}</a>
      </div>
      <details class="container footer-credits" id="creditos"><summary>Créditos de fotos</summary><p>Imágenes ilustrativas vía Wikimedia Commons, recortadas: ${cred}.</p></details>
    </footer>`;
  }

  /* ---------- Tarjeta de experiencia (COM-13) ---------- */
  function card(e) {
    const sel = e.linea === 'select';
    const chip = sel ? `<span class="exp-chip chip-select">${icon('crown')} Select</span>` : `<span class="exp-chip">${esc(e.etiqueta)}</span>`;
    const conFecha = !!e.fecha;
    const txt = sel ? `Hola Enrúmbate, quiero cotizar: ${e.titulo} (Select)`
      : conFecha ? `Hola Enrúmbate, quiero apartar lugar en: ${e.titulo} · ${e.fechaTexto}`
      : `Hola Enrúmbate, avísenme cuando haya fecha para: ${e.titulo}`;
    const cta = sel ? ['btn-select', 'Cotizar'] : conFecha ? ['btn-primary', 'Apartar lugar'] : ['btn-secondary', 'Avísame cuando haya fecha'];
    return `
    <article class="exp-card ${sel ? 'is-select' : 'is-originales'}" data-linea="${e.linea}" data-cat="${e.categoria}">
      <div class="exp-media"><img src="${e.img}" alt="${esc(e.alt)}" loading="lazy" width="800" height="600">${chip}</div>
      <div class="exp-body">
        <h3>${esc(e.titulo)}</h3>
        <p>${esc(e.desc)}</p>
        <ul class="exp-meta">
          <li>${icon('cal')}<span>${esc(e.fechaTexto)}</span></li>
          <li>${icon('pin')}<span>${esc(e.lugar)}</span></li>
          ${e.precio ? `<li>${icon('ticket')}<span>${esc(e.precio)}</span></li>` : ''}
        </ul>
        <a class="btn ${cta[0]} exp-cta" href="${wa(txt)}" target="_blank" rel="noopener">${icon('wa', 'btn-icon')} ${cta[1]}<span class="sr-only"> por WhatsApp (se abre en otra pestaña)</span></a>
      </div>
    </article>`;
  }

  /* ---------- Render de listas declarativas ----------
     <div data-exp-list data-linea="originales" data-inicio="true" data-limit="4"></div> */
  function renderLists() {
    document.querySelectorAll('[data-exp-list]').forEach(el => {
      let list = ENR.experiencias.filter(vigente);
      const d = el.dataset;
      if (d.conFecha) list = list.filter(e => e.fecha);
      if (d.linea) list = list.filter(e => e.linea === d.linea);
      if (d.inicio) list = list.filter(e => e.inicio);
      if (d.orden === 'fecha') list.sort(byDate);
      if (d.limit) list = list.slice(0, +d.limit);
      el.innerHTML = list.length ? list.map(card).join('') : emptyMsg(d.vacio);
    });
  }
  /* Lista sin experiencias: mensaje con salida a WhatsApp en lugar de un hueco */
  function emptyMsg(t) {
    return `<p class="empty">${esc(t || 'Estamos preparando las próximas fechas.')} <a class="text-link" href="${wa('Hola Enrúmbate, ¿qué experiencias vienen pronto?')}" target="_blank" rel="noopener">Pregúntanos por WhatsApp</a>.</p>`;
  }
  /* Si una foto no carga, queda el fondo de color con su etiqueta en vez del ícono roto */
  document.addEventListener('error', ev => {
    const t = ev.target;
    if (t.tagName === 'IMG' && t.closest('.exp-media, .cal-item')) t.style.visibility = 'hidden';
  }, true);

  /* Oculta experiencias cuya última fecha ya pasó */
  const hoy = (() => { const n = new Date(); return `${n.getFullYear()}-${String(n.getMonth() + 1).padStart(2, '0')}-${String(n.getDate()).padStart(2, '0')}`; })();
  function vigente(e) { const fin = e.fechaFin || e.fecha; return !fin || fin >= hoy; }
  function byDate(a, b) {
    if (a.fecha && b.fecha) return a.fecha.localeCompare(b.fecha);
    return a.fecha ? -1 : b.fecha ? 1 : 0;
  }

  /* ---------- Tira de categorías (COM-14) ---------- */
  function renderCats() {
    document.querySelectorAll('[data-cat-strip]').forEach(el => {
      const keys = (el.dataset.cats || Object.keys(ENR.categorias).join(',')).split(',');
      el.innerHTML = keys.map(k => {
        const c = ENR.categorias[k]; if (!c) return '';
        return `<a class="cat-item" href="experiencias.html?cat=${k}">${icon(c.icono)}<span>${el.dataset.largo ? c.nombre : c.corto}</span></a>`;
      }).join('');
    });
  }

  /* ---------- Deslizables en celular: puntos del carrusel y desvanecido de filtros ---------- */
  function scrollers() {
    document.querySelectorAll('.exp-grid-offset').forEach(el => {
      const n = el.children.length; if (n < 2) return;
      const dots = document.createElement('div');
      dots.className = 'carousel-dots'; dots.setAttribute('aria-hidden', 'true');
      dots.innerHTML = '<span></span>'.repeat(n);
      el.after(dots);
      const upd = () => {
        const w = el.firstElementChild.getBoundingClientRect().width || 1;
        const max = el.scrollWidth - el.clientWidth;
        const i = el.scrollLeft >= max - 4 ? n - 1 : Math.round(el.scrollLeft / w);
        dots.querySelectorAll('span').forEach((d, k) => d.classList.toggle('on', k === i));
      };
      el.addEventListener('scroll', () => requestAnimationFrame(upd), { passive: true });
      upd();
    });
    document.querySelectorAll('.filter-row').forEach(el => {
      const upd = () => el.classList.toggle('at-end', el.scrollLeft >= el.scrollWidth - el.clientWidth - 4);
      el.addEventListener('scroll', upd, { passive: true });
      addEventListener('resize', upd, { passive: true });
      requestAnimationFrame(upd);
    });
  }

  /* ---------- Menú móvil ---------- */
  function navToggle() {
    const t = document.querySelector('.nav-toggle'), n = document.getElementById('main-nav');
    if (!t) return;
    const lbl = t.querySelector('[data-lbl]');
    const set = open => {
      t.setAttribute('aria-expanded', String(open));
      document.body.classList.toggle('nav-open', open);
      lbl.textContent = open ? 'Cerrar menú' : 'Abrir menú';
    };
    t.addEventListener('click', () => set(t.getAttribute('aria-expanded') !== 'true'));
    n.querySelectorAll('a').forEach(a => a.addEventListener('click', () => set(false)));
    document.addEventListener('keydown', ev => {
      if (ev.key === 'Escape' && t.getAttribute('aria-expanded') === 'true') { set(false); t.focus(); }
    });
  }

  /* ---------- Enlaces WhatsApp declarativos: <a data-wa="texto"> ---------- */
  function waLinks() {
    document.querySelectorAll('[data-wa]').forEach(a => {
      a.href = wa(a.dataset.wa || undefined); a.target = '_blank'; a.rel = 'noopener';
    });
    document.querySelectorAll('[data-icon]').forEach(s => { s.outerHTML = icon(s.dataset.icon, s.className); });
  }

  /* ---------- Init ---------- */
  const h = document.getElementById('site-header');
  if (h) h.outerHTML = header(h.dataset.active);
  const f = document.getElementById('site-footer');
  if (f) f.outerHTML = footer();
  /* Botón flotante de WhatsApp (móvil y tablet) */
  if (!document.body.classList.contains('no-fab')) {
    document.body.insertAdjacentHTML('beforeend',
      `<a class="wa-fab" href="${wa()}" target="_blank" rel="noopener">${icon('wa')}<span>Escríbenos</span><span class="sr-only"> por WhatsApp</span></a>`);
  }
  renderCats();
  renderLists();
  scrollers();
  waLinks();
  navToggle();

  window.ENRUI = { icon, wa, card, esc, byDate, vigente, emptyMsg };
})();
