
// When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};
document.querySelector(".wrapper").onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  alert("masuk function");

  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    alert("masuksticky");
  } else {
    navbar.classList.remove("sticky");
    alert("ga masuk sticky");
  }
}
