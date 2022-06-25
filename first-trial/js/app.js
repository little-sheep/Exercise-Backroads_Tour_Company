const navBtn = document.getElementById("nav-btn");
const navLinks = document.getElementById("nav-links");
const navLinksBox = document.getElementById("nav-links-box");

navBtn.addEventListener("click", () => {
  navLinksBox.classList.add("show-nav-links");
});

navBtn.addEventListener("", () => {
  navLinksBox.classList.remove("show-nav-links");
});

// navBtn.addEventListener("click", () => {
//   navLists.classList.add("movetoright");
// });
