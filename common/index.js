var scrollPos = 0;
var mainNav = document.getElementById('main-nav');

window.addEventListener('scroll', function () {
  if (document.body.getBoundingClientRect().top > scrollPos) {
    //Up
    mainNav.style.display = 'block';
  } else {
    mainNav.style.display = 'none';
  }

  scrollPos = document.body.getBoundingClientRect().top;
});

const navSlide = () => {
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav-right');

  if (burger) {
    burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');

      burger.classList.toggle('toggle');
    });
  }
};

navSlide();
