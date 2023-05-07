//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
scrollFunction();
};

function scrollFunction() {
if (
document.body.scrollTop > 20 ||
document.documentElement.scrollTop > 20
) {
mybutton.style.display = "block";
} else {
mybutton.style.display = "none";
}
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}


const container = document.getElementById("image-container");
const leftButton = document.getElementById("scroll-left");
const rightButton = document.getElementById("scroll-right");

const containerWidth = container.offsetWidth;
const contentWidth = container.scrollWidth;

const maxScrollLeft = contentWidth - containerWidth;
let currentScrollLeft = 0;

leftButton.classList.add("disabled");

leftButton.addEventListener("click", () => {
  if (currentScrollLeft > 0) {
    currentScrollLeft -= 100;
    container.style.transform = `translateX(-${currentScrollLeft}px)`;
    rightButton.classList.remove("disabled");
  }

  if (currentScrollLeft === 0) {
    leftButton.classList.add("disabled");
  }
});

rightButton.addEventListener("click", () => {
  if (currentScrollLeft < maxScrollLeft) {
    currentScrollLeft += 100;
    container.style.transform = `translateX(-${currentScrollLeft}px)`;
    leftButton.classList.remove("disabled");
  }

  if (currentScrollLeft === maxScrollLeft) {
    rightButton.classList.add("disabled");
  }
})
