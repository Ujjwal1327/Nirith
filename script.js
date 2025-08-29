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



// conatact form submission to whatsapp.
document.getElementById("serviceForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let service = document.querySelector('input[name="selection"]:checked')?.value || "_________________";
  let name = document.getElementById("name").value;
  let city = document.getElementById("city").value;
  let profile = document.getElementById("profile").value;
  let number = document.getElementById("number").value;

  let message = `👋 Hi there!  
My name is *${name}*.  

🏡 I’m from *${city}* and currently working as a *${profile}*.  

💡 I’m really interested in your *${service}* services.  

📩 You can contact me at: *${number}*.  

Looking forward to your reply 🤝😊`;


  // Replace with your WhatsApp number
  let phone = "+91 7545863949";

  let url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
});