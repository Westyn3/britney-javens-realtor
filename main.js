// Nav scroll shadow
window.addEventListener('scroll', () => {
  document.querySelector('nav')?.classList.toggle('scrolled', window.scrollY > 20);
});
 
// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
  // Close on link click
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });
}
 
// Set active nav link
const currentPath = window.location.pathname;
document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
  const href = a.getAttribute('href');
  if (href === currentPath || (currentPath === '/' && href === 'index.html') ||
      (href !== 'index.html' && href !== '/' && currentPath.includes(href.replace('.html','')))) {
    a.classList.add('active');
  }
});
 
// Contact form (Formspree-ready)
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const success = document.getElementById('form-success');
    btn.textContent = 'Sending...';
    btn.disabled = true;
 
    const formspreeEndpoint = form.getAttribute('action');
    if (formspreeEndpoint && formspreeEndpoint.includes('formspree')) {
      try {
        const res = await fetch(formspreeEndpoint, {
          method: 'POST',
          body: new FormData(form),
          headers: { 'Accept': 'application/json' }
        });
        if (res.ok) {
          form.reset();
          if (success) { success.style.display = 'block'; }
          btn.textContent = 'Sent!';
        } else {
          btn.textContent = 'Error — try emailing directly';
          btn.disabled = false;
        }
      } catch {
        btn.textContent = 'Error — please email directly';
        btn.disabled = false;
      }
    } else {
      // Demo mode — just show success
      setTimeout(() => {
        form.reset();
        if (success) { success.style.display = 'block'; }
        btn.textContent = 'Sent!';
      }, 800);
    }
  });
}
 
