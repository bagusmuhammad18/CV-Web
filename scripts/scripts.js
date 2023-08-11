const body = document.getElementsByClassName("wrapper")[0];
body.addEventListener("click", function (e) {
  console.log(e.target);
});

// Typing animation
const dynamicText = document.getElementsByClassName("dynamic")[0];
const words = [
  "front-end web developer",
  "mobile app developer",
  "deep learning enthusiast",
  "part-time Valorant player :)",
];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
  const currentWord = words[wordIndex];
  const currentChar = currentWord.substring(0, charIndex);
  dynamicText.textContent = currentChar;
  dynamicText.classList.add("stop-blinking");
  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    setTimeout(typeEffect, 70);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 40);
  } else {
    isDeleting = !isDeleting;
    dynamicText.classList.remove("stop-blinking");

    wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
    setTimeout(typeEffect, 1200);
  }
};
typeEffect();
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

// Animate on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
    //
    // else {
    //   entry.target.classList.remove("show");
    // }
  });
});
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
