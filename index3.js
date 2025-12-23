const open = document.getElementById('open');
const close = document.getElementById('close');

open.addEventListener('click', () => {
  document.body.classList.add('show-nav');
});

close.addEventListener('click', () =>
  document.body.classList.remove('show-nav')
);
