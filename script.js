var windowWidth = window.innerWidth;

if (windowWidth < 768) {
  var nav = document.getElementById("nav");
  nav.classList.add("sticky");
}

window.addEventListener("resize", function() {
  windowWidth = window.innerWidth;

  if (windowWidth < 768) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});
