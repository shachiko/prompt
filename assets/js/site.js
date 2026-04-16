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
});
