const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const themeBtn = document.getElementById("themeBtn");
const typing = document.getElementById("typing");
const year = document.getElementById("year");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  themeBtn.textContent = document.body.classList.contains("light") ? "☀" : "☾";
});

year.textContent = new Date().getFullYear();

const roles = ["Software Developer", "Web Developer", "Problem Solver", "Tech Enthusiast"];
let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeRole() {
  const role = roles[roleIndex];

  if (!deleting) {
    typing.textContent = role.slice(0, charIndex++);
    if (charIndex > role.length) {
      deleting = true;
      setTimeout(typeRole, 1200);
      return;
    }
  } else {
    typing.textContent = role.slice(0, charIndex--);
    if (charIndex < 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      charIndex = 0;
    }
  }

  setTimeout(typeRole, deleting ? 55 : 90);
}

typeRole();

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;

    document.querySelectorAll(".project-card").forEach(card => {
      card.classList.toggle(
        "hidden",
        filter !== "all" && card.dataset.category !== filter
      );
    });
  });
});

document.getElementById("contactForm").addEventListener("submit", event => {
  event.preventDefault();

  const message = document.getElementById("formMessage");
  message.textContent = "Thanks! Your message is ready to be connected to an email service.";

  event.target.reset();
});
