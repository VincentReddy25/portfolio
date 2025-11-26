// script.js - injects a simple single-page portfolio and handles theme, projects and modal
(function(){
  const user = {
    name: 'Vincent Reddy Thanugundla',
    title: 'Software Engineer',
    company: 'CV Corporate Services Pvt. Ltd.',
    email: 'vincentreddy25@gmail.com',
    linkedin: 'https://www.linkedin.com/in/vincent-reddy/',
    summary: 'Python Full Stack & System Design engineer. JavaScript, React, Tailwind CSS enthusiast. Building clean, performant front-end experiences.'
  };

  const projects = [
    {
      title: 'Portfolio (this site)',
      desc: 'A modern portfolio built with HTML, SCSS and vanilla JS.',
      tech: ['HTML', 'SCSS', 'JavaScript'],
      role: 'Frontend Engineer',
      duration: '2 weeks',
      year: 2025,
      details: 'This portfolio is a single-page site built using SCSS and vanilla JavaScript. I implemented a theme-aware layout, responsive grid, and a small SPA-style renderer to keep the HTML minimal and maintainable.',
      accomplishments: [
        'Implemented modular renderer to keep HTML minimal',
        'Added accessible modal for project details',
        'Theme-aware CSS variables and responsive grid'
      ],
      repo: ''
    },
    {
      title: 'Schedule Management Tool',
      desc: 'A web UI to manage batches, trainers and room allocation with auto-apply grid logic.',
      tech: ['React (planned)', 'Vanilla JS', 'SCSS', 'JSON'],
      role: 'Frontend Developer',
      duration: 'Ongoing',
      year: 2025,
      details: 'Schedule Management Tool: I created the front-end grid layout, JSON-driven batch allocation logic and trainer constraints. The UI allows admins to assign trainers to batches, prevents duplicate daily assignments and renders a responsive timetable.',
      accomplishments: [
        'Designed JSON schema for batches and trainers',
        'Built auto-apply grid logic to auto-place trainers',
        'Validation to prevent duplicate daily assignments for trainers'
      ],
      repo: ''
    },
    {
      title: 'Dashboard Application',
      desc: 'Admin dashboard and metrics UI built with React + Tailwind.',
      tech: ['React', 'Tailwind CSS', 'Charts.js'],
      role: 'Frontend Engineer',
      duration: '1 month',
      year: 2025,
      details: 'Dashboard Application: I built charts, cards and data tables, hooked components to mock APIs, and optimized for accessibility and performance. Implemented reusable components and light/dark-friendly styling.',
      accomplishments: [
        'Created reusable chart and card components',
        'Optimized rendering for large datasets',
        'Improved accessibility for keyboard users'
      ],
      repo: ''
    }
  ];

  // store active button so we can remove its active state when modal closes
  let currentActiveBtn = null;

  // --- HTML generation helpers ---
  function headerHTML(){
    return `
      <header class="site-header">
        <div class="container header-inner">
          <div class="brand">
            <h1>${user.name.split(' ')[0]}</h1>
            <p>${user.title} — <span class="muted">${user.company}</span></p>
          </div>
          <div class="controls">
            <!-- Theme toggle and color picker removed per user request -->
          </div>
        </div>
      </header>
    `;
  }

  function heroHTML(){
    return `
      <section class="hero">
        <div class="container">
          <h2>Hello — I'm ${user.name.split(' ')[0]}.</h2>
          <p class="lead">${user.summary}</p>
          <p class="contact-small">
            <a href="mailto:${user.email}">${user.email}</a>
            • <a href="${user.linkedin}" target="_blank" rel="noopener">LinkedIn</a>
          </p>
          <div class="cta">
            <a class="btn" href="#projects">View my work</a>
            <a class="btn outline" href="#contact">Get in touch</a>
          </div>
        </div>
      </section>
    `;
  }

  function aboutHTML(){
    return `
      <section id="about" class="container section about">
        <h3>About me</h3>
        <p>${user.summary} I build full-stack products, mentor junior developers, and prepare interview materials for students.</p>
      </section>
    `;
  }

  function projectsHTML(){
    const cards = projects.map((p, i) => `
      <article class="card">
        <h4>${p.title}</h4>
        <p class="meta">${p.tech.join(' • ')} • ${p.year}</p>
        <p>${p.desc}</p>
        <button class="link project-btn" data-index="${i}">Learn more →</button>
      </article>
    `).join('');
    return `
      <section id="projects" class="container section projects">
        <h3>Projects</h3>
        <div class="grid">${cards}</div>
      </section>
    `;
  }

  function contactHTML(){
    return `
      <section id="contact" class="container section contact">
        <h3>Contact</h3>
        <p>Want to work together or have a question? Reach me at <a href="mailto:${user.email}">${user.email}</a>.</p>
        <form id="contactForm" class="contact-form">
          <input name="name" placeholder="Your name" required />
          <input name="email" type="email" placeholder="Your email" required />
          <textarea name="message" placeholder="Your message" rows="4" required></textarea>
          <div class="form-actions"><button type="submit" class="btn">Send message</button></div>
        </form>
      </section>
    `;
  }

  function footerHTML(){
    return `
      <footer class="site-footer">
        <div class="container">
          <p>© ${new Date().getFullYear()} ${user.name} — <a href="${user.linkedin}" target="_blank" rel="noopener">LinkedIn</a></p>
        </div>
      </footer>
    `;
  }

  // --- Modal utilities ---
  function createModal(){
    const overlay = document.createElement('div');
    overlay.className = 'project-modal-overlay';
    overlay.setAttribute('role','dialog');
    overlay.setAttribute('aria-hidden','true');
    overlay.style.position = 'fixed';
    overlay.style.inset = '0';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.background = 'rgba(2,6,23,0.5)';
    overlay.style.zIndex = '1000';

    const modal = document.createElement('div');
    modal.className = 'project-modal';
    modal.style.maxWidth = '920px';
    modal.style.width = '94%';
    modal.style.height = '90vh';
    modal.style.maxHeight = '90vh';
    modal.style.overflowY = 'auto';
    modal.style.background = 'var(--surface)';
    modal.style.color = 'var(--text)';
    modal.style.borderRadius = '12px';
    modal.style.padding = '1.2rem';
    modal.style.boxShadow = '0 10px 40px rgba(2,6,23,0.4)';

    const closeBtn = document.createElement('button');
    closeBtn.innerText = 'Close';
    closeBtn.className = 'btn';
    closeBtn.style.float = 'right';

    const title = document.createElement('h3');
    title.style.marginTop = '0';

    const meta = document.createElement('div');
    meta.style.margin = '0.4rem 0';
    meta.className = 'project-meta muted';

    const desc = document.createElement('p');
    desc.className = 'muted';

    const details = document.createElement('div');
    details.style.marginTop = '0.6rem';
    details.style.whiteSpace = 'pre-wrap';

    modal.appendChild(closeBtn);
    modal.appendChild(title);
    modal.appendChild(meta);
    modal.appendChild(desc);
    modal.appendChild(details);
    overlay.appendChild(modal);

    // close behavior
    closeBtn.addEventListener('click', () => { closeModal(overlay); });
    overlay.addEventListener('click', (e) => { if(e.target === overlay) closeModal(overlay); });

    return { overlay, title, meta, desc, details };
  }

  function buildProjectHTML(p){
    const tech = p.tech && p.tech.length ? `<div class="meta">Tech: ${p.tech.join(', ')}</div>` : '';
    const role = p.role ? `<div class="meta">Role: ${p.role}</div>` : '';
    const duration = p.duration ? `<div class="meta">Duration: ${p.duration}</div>` : '';
    const accomplishments = (p.accomplishments && p.accomplishments.length) ? `
      <h4>Key accomplishments</h4>
      <ul>${p.accomplishments.map(a => `<li>${a}</li>`).join('')}</ul>
    ` : '';
    const repo = p.repo ? `<div class="meta">Repo: <a href="${p.repo}" target="_blank" rel="noopener">${p.repo}</a></div>` : '';

    return `
      <div class="project-details-inner">
        <p>${p.details}</p>
        ${tech}
        ${role}
        ${duration}
        ${repo}
        ${accomplishments}
      </div>
    `;
  }

  function openProjectModal(index){
    const p = projects[index];
    const { overlay, title, meta, desc, details } = createModal();
    title.textContent = p.title;
    desc.textContent = p.desc;
    meta.textContent = `${p.role || ''}${p.duration ? ' | ' + p.duration : ''}${p.tech ? ' | ' + p.tech.join(', ') : ''}`.trim();
    details.innerHTML = buildProjectHTML(p);

    document.body.appendChild(overlay);
    overlay.setAttribute('aria-hidden','false');
    // disable background scrolling while modal is open
    document.body.style.overflow = 'hidden';

    // focus
    const firstBtn = overlay.querySelector('button');
    if(firstBtn) firstBtn.focus();
  }

  function closeModal(overlay){
    overlay.setAttribute('aria-hidden','true');
    if(overlay && overlay.parentNode) overlay.parentNode.removeChild(overlay);
    // restore background scrolling
    document.body.style.overflow = '';
    // remove active state from the button that opened the modal
    if(currentActiveBtn){
      currentActiveBtn.classList.remove('active');
      currentActiveBtn = null;
    }
  }

  // Render the page
  function render(){
    // add basic meta if missing
    if(!document.head.querySelector('meta[name="viewport"]')){
      const m = document.createElement('meta');
      m.name = 'viewport';
      m.content = 'width=device-width,initial-scale=1';
      document.head.appendChild(m);
    }

    document.body.innerHTML = headerHTML() + heroHTML() + aboutHTML() + projectsHTML() + contactHTML() + footerHTML();

    // Trigger animations
    const hero = document.querySelector('.hero');
    if (hero) hero.classList.add('animate');

    const cards = document.querySelectorAll('.card');
    cards.forEach((card, i) => {
      setTimeout(() => card.classList.add('animate'), 120 * i);
    });

    // Hook project buttons for modal (add active state + small delay to show animation)
    document.querySelectorAll('.project-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const idx = Number(btn.getAttribute('data-index'));
        if (!Number.isNaN(idx)){
          currentActiveBtn = btn;
          btn.classList.add('active');
          setTimeout(() => openProjectModal(idx), 160);
        }
      });
    });

    // Theme initialization (no visible toggle)
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = (savedTheme === 'dark') || (!savedTheme && prefersDark);
    if(isDark) document.documentElement.setAttribute('data-theme','dark');
    else document.documentElement.removeAttribute('data-theme');

    // Set a single primary color for the template (fixed)
    document.documentElement.style.setProperty('--primary', '#0ea5a3');

    // contact form sends mailto (simple)
    const form = document.getElementById('contactForm');
    if(form){
      form.addEventListener('submit', function(ev){
        ev.preventDefault();
        const fd = new FormData(form);
        const name = fd.get('name');
        const email = fd.get('email');
        const message = fd.get('message');
        const mailto = `mailto:${user.email}?subject=${encodeURIComponent('Contact from '+name)}&body=${encodeURIComponent(message + '\n\nFrom: '+name+' ('+email+')')}`;
        window.location.href = mailto;
      });
    }

    // smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(a=>{
      a.addEventListener('click', e=>{
        const href = a.getAttribute('href');
        if(href.length>1 && document.querySelector(href)){
          e.preventDefault();
          document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render);
  else render();
})();