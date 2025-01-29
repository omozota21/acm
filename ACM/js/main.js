/* Carrusel Index */

const carousel = document.querySelector(".carousel");
const images = carousel.querySelectorAll("img");

let currentIndex = 0;
const imageCount = images.length;
const intervalTime = 1700; 

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.toggle("d-none", i !== index);
        img.classList.toggle("d-block", i === index);
    });
}

function startCarousel() {
    setInterval(() => {
        currentIndex = (currentIndex + 1) % imageCount;
        showImage(currentIndex);
    }, intervalTime);
}


showImage(currentIndex);
startCarousel();

/* Boton de Subida */

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  const button = document.getElementById("backToTopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = "block"; 
  } else {
    button.style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}
