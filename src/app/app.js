const hamburgerBtn = document.querySelector('#hamburgerBtn');
const hamburgerMenu = document.querySelector('#hamburgerMenu');
const toggle = document.querySelector('.toggle');

hamburgerBtn.addEventListener('click', function () {
  hamburgerMenu.classList.toggle('hidden');
  hamburgerMenu.classList.toggle('flex');
  toggle.classList.toggle('hamburger');
  if (toggle.classList.contains('hamburger')) {
    toggle.src = 'images/icon-close.svg';
  } else {
    toggle.src = 'images/icon-hamburger.svg';
  }
});

const caroselBullets = document.querySelector('#carosel-bullets');
const bullets = Array.from(caroselBullets.children);

caroselBullets.addEventListener('click', function (e) {
  if (!e.target.classList.contains('rounded-full')) return;
  const index = bullets.indexOf(e.target);
  const selector = document.querySelector(`#card:nth-child(${index + 1})`);
  selector.scrollIntoView({
    block: 'nearest',
  });
  bullets.forEach((bullet) => {
    bullet.classList.remove('bg-BrightRed');
  });
  e.target.classList.add('bg-BrightRed');
});

const carousel = Array.from(document.querySelector(`#carousel`).children);
function handleIntersect(entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  bullets.forEach((bullet) => {
    bullet.classList.remove('bg-BrightRed');
  });
  bullets[carousel.indexOf(entry.target)].classList.add('bg-BrightRed');
}
let options = {
  root: null,
  rootMargin: '0px',
  threshold: 1,
};
carousel.forEach((card) => {
  observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(card);
});
