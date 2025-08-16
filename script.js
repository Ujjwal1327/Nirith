// Initialize Lenis
const lenis = new Lenis({ duration: 1 });

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


