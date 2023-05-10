//start showing navbar when scrolling
const wrapper=document.querySelector(".wrapper")
const nav=document.getElementById("navbar")
wrapper.onscroll = function() {navShowScroll()};
function navShowScroll() {
  let scrolltop_=wrapper.scrollTop;
  if (scrolltop_ > 150) {
    console.log(scrolltop_);
    nav.classList.add("navScroll")
  } else {
    nav.classList.remove("navScroll")
  }
}
// disable transition on page load
// $(window).load(function() {
//     $("body").removeClass("preload");
// });

document.onreadystatechange = function() {noTransitionOnLoad()};
const body_ = document.getElementsByTagName("body")[0];
function noTransitionOnLoad(){
  body_.classList.remove("preload");
}

// GoTop button on scroll
const goTopButton=document.getElementById("goTop");
wrapper.onscroll = function() {goTopFunction()};
function goTopFunction(){
  let scrolltop_=wrapper.scrollTop;
  if (scrolltop_ > 600) {
    // goTopButton.style.transition='all 0.9s';
    // goTopButton.style.visibility='visible';
    goTopButton.classList.add("scroll")


  } else {
    // goTopButton.style.visibility='hidden';
    goTopButton.classList.remove("scroll")

  }
};
