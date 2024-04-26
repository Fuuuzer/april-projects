const btn = document.querySelector('.search__button');
const input = document.querySelector('.input');
const search = document.querySelector('.search');

btn.addEventListener('click', () => {
  search.classList.toggle('active');
  input.focus()
})