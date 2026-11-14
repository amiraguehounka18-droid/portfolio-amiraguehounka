const root = document.documentElement;
const themeToggle = document.querySelector('#theme-toggle');
const languageToggle = document.querySelector('#language-toggle');
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('#main-nav');
const contactForm = document.querySelector('#contact-form');
const formStatus = document.querySelector('#form-status');

const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme === 'dark') root.dataset.theme = 'dark';

function updateThemeButton() {
  const dark = root.dataset.theme === 'dark';
  themeToggle.textContent = dark ? '☾' : '☼';
  themeToggle.setAttribute('aria-label', dark ? 'Activer le mode clair' : 'Activer le mode sombre');
}
updateThemeButton();
themeToggle.addEventListener('click', () => {
  const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  if (nextTheme === 'dark') root.dataset.theme = 'dark';
  else delete root.dataset.theme;
  localStorage.setItem('portfolio-theme', nextTheme);
  updateThemeButton();
});

let currentLanguage = localStorage.getItem('portfolio-language') || 'fr';
function applyLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;
  document.querySelectorAll('[data-fr][data-en]').forEach((element) => {
    element.textContent = element.dataset[language];
  });
  languageToggle.textContent = language === 'fr' ? 'EN' : 'FR';
  languageToggle.setAttribute('aria-label', language === 'fr' ? 'Switch to English' : 'Passer au français');
  localStorage.setItem('portfolio-language', language);
}
applyLanguage(currentLanguage);
languageToggle.addEventListener('click', () => applyLanguage(currentLanguage === 'fr' ? 'en' : 'fr'));

menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});
mainNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  mainNav.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

document.querySelector('#current-year').textContent = new Date().getFullYear();

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(contactForm);
  const subject = encodeURIComponent(`Message portfolio — ${formData.get('name')}`);
  const body = encodeURIComponent(`${formData.get('message')}\n\nRépondre à : ${formData.get('email')}`);
  window.location.href = `amiraguehounka18@gmail.com?subject=${subject}&body=${body}`;
  formStatus.textContent = currentLanguage === 'fr' ? 'Votre application email va s’ouvrir pour finaliser l’envoi.' : 'Your email app will open to finish sending.';
});
