// Animations: Reveal sections and elements on scroll
function revealOnScroll() {
  const reveals = document.querySelectorAll('.fade-in, .slide-up, .scale-in, .section-animate');
  const windowHeight = window.innerHeight;
  reveals.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 60) {
      el.classList.add('visible');
      el.style.opacity = 1;
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', () => {
  revealOnScroll();
  // Animate in on load for elements already in view
  setTimeout(revealOnScroll, 200);
});
