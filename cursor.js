let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll(".nav__link--list li");
let headerLinks = document.querySelectorAll(".secondary-para a");

window.addEventListener("mousemove", cursor);

function cursor(e) {
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
}

navLinks.forEach((link) => {
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
    link.classList.remove("hovered-link");
  });
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
    link.classList.add("hovered-link");
  });
});

headerLinks.forEach((a) => {
  a.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
    a.classList.remove("hovered-link");
  });
  a.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
    a.classList.add("hovered-link");
  });
});
