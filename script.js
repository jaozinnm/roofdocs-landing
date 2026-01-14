// Ano automático
document.getElementById("year").textContent = new Date().getFullYear();

/* =========================
   Scroll reveal (SaaS style)
========================= */
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(
  ".card, .problem-card, .step, .price-card, h2, .section-text"
).forEach(el => {
  el.classList.add("reveal");
  observer.observe(el);
});

/* =========================
   Header behavior on scroll
========================= */
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

/* =========================
   Active nav link
========================= */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
