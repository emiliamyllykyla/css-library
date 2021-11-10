window.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("nav-toggle");
  const menu = document.getElementById("nav-menu");
  const nav = document.querySelector(".nav");
  const transparent = nav.classList.contains("nav-transparent")
  const sticky = nav.classList.contains("nav-sticky")
  const transparentOn = "nav-transparent-on";
  const stickyOn = "nav-sticky-on";

  // TOGGLE DROPDOWN
  toggle.addEventListener("click", () => {
    menu.classList.toggle("dropdown");

    if (transparent) {
      // if nav is transparent when menu opened, show default style of nav.
      if (menu.classList.contains("dropdown")) {
        nav.classList.remove(transparentOn);
      }
      // if nav is not sticky when menu closed, show transparent style of nav
      else if (!nav.classList.contains(stickyOn)) {
        nav.classList.add(transparentOn);
      }
    }
  });
  
  window.addEventListener("resize", function () {
    menu.classList.remove("dropdown");
  });

  // STICKY
  // TODO: optional
  const height = nav.offsetHeight;

  function stickyNav() {
    if (window.pageYOffset > height) {
      nav.classList.add(stickyOn);
      if (transparent) {
        nav.classList.remove(transparentOn);
      }
    } else {
      nav.classList.remove(stickyOn);
      if (!menu.classList.contains("dropdown") && transparent) {
        nav.classList.add(transparentOn);
      }
    }
  }
  if (sticky) {
    window.onscroll = () => stickyNav();
  }
});
