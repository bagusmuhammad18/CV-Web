// Toggle class active
const navbarNav = document.querySelector("#navbar ul");

const navbarLink = document.querySelectorAll("#navbar ul li");
const hamburgerMenu = document.querySelector("#hamburger-menu");
// ketika hamburger menu diklik
hamburgerMenu.onclick = () => {
  navbarNav.classList.toggle("active");
};
// ketika bagian di luar side menu diklik
document.body.onclick = (event) => {
  // periksa apakah klik dilakukan di luar side menu
  if (!navbarNav.contains(event.target) && event.target !== hamburgerMenu) {
    navbarNav.classList.remove("active");
  }
};

// Ketika tautan di dalam menu diklik
navbarLink.forEach((link) => {
  link.addEventListener("click", () => {
    navbarNav.classList.remove("active");
  });
});
