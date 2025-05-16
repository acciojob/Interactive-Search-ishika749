const search = document.querySelector('.search');
const input = document.querySelector('.input');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  search.classList.add('active');  // Make div active
  input.focus();                   // Focus on input
});

