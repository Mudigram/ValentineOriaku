// Select all images & lightbox elements
const images = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCaption = document.getElementById("lightbox-caption");
const closeBtn = document.querySelector(".close");

// Open lightbox on image click
images.forEach(img => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightboxCaption.textContent = img.nextElementSibling.textContent;
    lightbox.classList.add("show");
  });
});

// Close lightbox when clicking the close button
closeBtn.addEventListener("click", () => {
  lightbox.classList.remove("show");
});

// Close lightbox when clicking outside the image
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove("show");
  }
});

let slideIndex = 0;
let slideTimer;

// Function to show slides
function showSlides() {
  let slides = document.querySelectorAll(".slide");
  let dots = document.querySelectorAll(".dot");

  slides.forEach(slide => slide.style.display = "none");
  dots.forEach(dot => dot.classList.remove("active"));

  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
}

// Function for manual slide navigation
function changeSlide(n) {
  slideIndex += n;
  let slides = document.querySelectorAll(".slide");

  if (slideIndex > slides.length) { slideIndex = 1; }
  if (slideIndex < 1) { slideIndex = slides.length; }

  slides.forEach(slide => slide.style.display = "none");
  slides[slideIndex - 1].style.display = "block";
}

// Start the slideshow when the page loads
document.addEventListener("DOMContentLoaded", () => {
  showSlides();
  startSlideshow();
});

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";
  
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 8 + 5 + "s"; // Increased duration for longer display

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 10000); // Increased removal time
}

// Generate floating hearts every 500ms
setInterval(createHeart, 500);

let slideshowRunning = true;

function startSlideshow() {
  slideTimer = setInterval(showSlides, 5000);
}

function stopSlideshow() {
  clearInterval(slideTimer);
}

document.getElementById("toggleSlideshow").addEventListener("click", () => {
  if (slideshowRunning) {
    stopSlideshow();
    document.getElementById("toggleSlideshow").textContent = "▶️ Play Slideshow";
  } else {
    startSlideshow();
    document.getElementById("toggleSlideshow").textContent = "⏸ Pause Slideshow";
  }
  slideshowRunning = !slideshowRunning;
});
