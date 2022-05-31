const hamburgerBtn = document.querySelector('#hamburgerBtn');
const hamburgerMenu = document.querySelector('#hamburgerMenu');

hamburgerBtn.addEventListener('click', function () {
  hamburgerMenu.classList.toggle('hidden');
  hamburgerMenu.classList.toggle('flex');
});
