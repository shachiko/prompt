document.documentElement.setAttribute(
  'lang',
  localStorage.getItem('preferredLanguage') || 'en'
);
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('[data-menu]');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('open');
    });
  }

  const chips = document.querySelectorAll('[data-filter-chip]');
  const cards = document.querySelectorAll('[data-filter-card]');

  if (chips.length && cards.length) {
    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        const value = chip.dataset.filterChip;
        chips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');

        cards.forEach(card => {
          const category = card.dataset.filterCard;
          const show = value === 'all' || category === value;
          card.classList.toggle('hide', !show);
        });
      });
    });
  }

  const langButtons = document.querySelectorAll('[data-lang-switch]');
  const root = document.documentElement;
  const savedLang = localStorage.getItem('siteLanguage');
  const setLanguage = (lang) => {
    root.setAttribute('lang', lang);
    localStorage.setItem('siteLanguage', lang);
    langButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.langSwitch === lang);
    });
  };

  setLanguage(savedLang || root.getAttribute('lang') || 'en');

  langButtons.forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.langSwitch));
  });
});
