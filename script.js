const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".sidebar .nav-link");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });
navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
