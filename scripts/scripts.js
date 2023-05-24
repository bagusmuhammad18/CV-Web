const body = document.getElementsByClassName("wrapper")[0];
body.addEventListener("click", function (e) {
  console.log(e.target);
});

//start showing navbar when scrolling
const wrapper = document.querySelector(".wrapper");
const nav = document.getElementById("navbar");
// wrapper.onscroll = function() {navShowScroll()};
wrapper.addEventListener("scroll", navShowScroll);

function navShowScroll() {
  let scrolltop_ = wrapper.scrollTop;
  // console.log(scrolltop_);
  if (scrolltop_ > 150) {
    nav.classList.add("navScroll");
  } else {
    nav.classList.remove("navScroll");
  }
}

document.onreadystatechange = function () {
  noTransitionOnLoad();
};
const body_ = document.getElementsByTagName("body")[0];
function noTransitionOnLoad() {
  body_.classList.remove("preload");
}

// GoTop button on scroll
const goTopButton = document.getElementById("goTop");
wrapper.addEventListener("scroll", function () {
  let scrolltop_ = wrapper.scrollTop;
  if (scrolltop_ > 600) {
    goTopButton.classList.add("scroll");
  } else {
    goTopButton.classList.remove("scroll");
  }
});
