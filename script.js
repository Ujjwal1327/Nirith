// Initialize Lenis
const lenis = new Lenis({ duration: 1.81 });

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY || document.documentElement.scrollTop;

  if (scrollY > window.innerHeight * 0.03) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


// infinite logo scroll
gsap.to(".all", {
  xPercent: -90,
  repeat: -1,
  duration: 15,
  ease: "linear",
  yoyo: true,        // wapas reverse karo smoothl
  modifiers: {
    xPercent: gsap.utils.wrap(-100, 0) // keep looping seamlessly
  }
});

function toggleMenu() {
  const resMenu = document.querySelector(".res-menu");
  const burger = document.querySelector(".burger");
  const navMenu = document.querySelector(".navMenu");
  const main = document.querySelector("main");
  const body = document.body;

  resMenu.classList.toggle("show");
  burger.classList.toggle("active");
  navMenu.classList.toggle("active");
  main.classList.toggle("menu-open");
}

function toggleResponsiveDropdown() {
  const resSubMenu = document.querySelector(".res-menu .dropdown");
  resSubMenu.classList.toggle("showDropDown1");
}

function toggleResponsiveDropdown2() {
  const resSubMenu = document.querySelector(".res-menu .dropdown2");
  resSubMenu.classList.toggle("showDropDown2");
}