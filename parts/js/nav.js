const navbarBtn = document.getElementById("navbar-btn");
const navbarLinks = document.getElementById("navbar-links");

navbarBtn.addEventListener("click", () => {
  // navbarLinks.classList.add("show-navbar-list");
  navbarLinks.classList.toggle("show-navbar-list");
});
