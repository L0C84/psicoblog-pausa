const menuButton = document.querySelector('#menu-button');
const mainNav = document.querySelector('#main-nav');
const search = document.querySelector('#article-search');
const topicButtons = [...document.querySelectorAll('[data-topic]')];
const cards = [...document.querySelectorAll('.article-card')];
const emptyState = document.querySelector('#empty-state');
let activeTopic = 'Todo';

function filterArticles() {
  const query = search.value.trim().toLocaleLowerCase('es');
  let visible = 0;
  cards.forEach((card) => {
    const topicMatch = activeTopic === 'Todo' || card.dataset.category === activeTopic;
    const textMatch = `${card.textContent} ${card.dataset.search}`.toLocaleLowerCase('es').includes(query);
    card.hidden = !(topicMatch && textMatch);
    if (!card.hidden) visible += 1;
  });
  emptyState.hidden = visible > 0;
}

menuButton.addEventListener('click', () => {
  const open = mainNav.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.textContent = open ? '×' : '☰';
});
mainNav.addEventListener('click', () => {
  mainNav.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.textContent = '☰';
});
topicButtons.forEach((button) => button.addEventListener('click', () => {
  activeTopic = button.dataset.topic;
  topicButtons.forEach((item) => item.classList.toggle('active', item === button));
  filterArticles();
}));
search.addEventListener('input', filterArticles);
document.querySelector('#newsletter-form').addEventListener('submit', (event) => {
  event.preventDefault();
  event.currentTarget.hidden = true;
  document.querySelector('#success-message').hidden = false;
});
