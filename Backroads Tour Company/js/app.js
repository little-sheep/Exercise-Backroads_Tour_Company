const footerYear = document.getElementById("footer-year");

footerYear.innerHTML = new Date().getFullYear();


const navbarBtn = document.getElementById("navbar-btn");
const navbarLinks = document.getElementById("navbar-links");

navbarBtn.addEventListener("click", () => {
  navbarLinks.classList.toggle("show-navbar-list");
});
