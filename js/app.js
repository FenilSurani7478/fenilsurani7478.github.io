// Fenil Surani portfolio interactions (vanilla JS)

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

function closeMobileNav() {
  if (!mobileNav || !menuBtn) return;
  mobileNav.classList.remove("open");
  menuBtn.setAttribute("aria-expanded", "false");
}

if (menuBtn && mobileNav) {
  menuBtn.addEventListener("click", () => {
    const isOpen = mobileNav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(isOpen));
  });

  // Close menu when clicking a link
  mobileNav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", closeMobileNav);
  });
}

// Case study toggles
document.querySelectorAll(".caseBtn").forEach(btn => {
  btn.addEventListener("click", () => {
    const id = btn.getAttribute("data-case");
    const panel = document.getElementById(id);
    if (!panel) return;

    const willShow = panel.hasAttribute("hidden");
    panel.toggleAttribute("hidden");

    // Button label swap
    btn.textContent = willShow ? "Hide Case" : "Case Study";
  });
});

// Reveal on scroll
const revealEls = document.querySelectorAll(".reveal");
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add("is-visible");
  });
}, { threshold: 0.12 });

revealEls.forEach(el => io.observe(el));
