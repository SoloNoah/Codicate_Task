var scrollPos = 0;
var stickySubNav = document.getElementById("sub-nav");
var stickyMainNav = document.getElementById("main-nav");

window.addEventListener("scroll", function () {
  if (document.body.getBoundingClientRect().top > scrollPos) {
    //Up
    stickyMainNav.style.display = "block";
  } else {
    stickyMainNav.style.display = "none";
  }

  scrollPos = document.body.getBoundingClientRect().top;
});
