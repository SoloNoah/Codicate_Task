var lastScrollTop = 0;
var stickyNav = document.getElementById("sub-nav");
var sticky = stickyNav.offsetTop;

window.addEventListener("scroll", function () {
  var current = window.pageYOffset || document.documentElement.scrollTop;

  if (current > lastScrollTop) {
    stickyNav.classList.add("sticky");
  } else {
    stickyNav.classList.remove("sticky");
  }
});
