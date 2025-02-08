// Function to create a heart
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerHTML = '❤️'; // Heart emoji

  // Randomize starting position
  heart.style.left = Math.random() * 100 + 'vw';

  // Randomize animation duration
  heart.style.animationDuration = Math.random() * 8 + 2 + 's'; // Between 2s and 5s

  const heartStyles = ['❤️', '💖', '💘'];
heart.innerHTML = heartStyles[Math.floor(Math.random() * heartStyles.length)];


  // Add heart to the container
  document.querySelector('.hearts-container').appendChild(heart);

  // Remove heart after animation ends
  setTimeout(() => {
    heart.remove();
  }, 5000); // Match the animation duration
}

// Generate hearts every 300ms
setInterval(createHeart, 300);

// Confetti effect for "Yes" button
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const responseMessage = document.getElementById('responseMessage');

yesButton.addEventListener('click', () => {
  responseMessage.textContent = "Yay! I love you too! 💖";
  responseMessage.classList.remove('hidden');

  // Trigger confetti effect
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
});
noButton.addEventListener('mouseover', () => {
  noButton.style.position = 'absolute';
  noButton.style.left = Math.random() * 80 + 'vw';
  noButton.style.top = Math.random() * 80 + 'vh';
});

noButton.addEventListener('click', () => {
  responseMessage.textContent = "Nice try! You know you want to say yes! 😉";
  responseMessage.classList.remove('hidden');
});