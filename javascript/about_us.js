const card = document.querySelector('.card1');
const cardImage = document.querySelector('.card1-image');
const cardBack = document.querySelector('.card1-back');
const startBtn = document.querySelector('.start1-btn');
const resetBtn = document.querySelector('.reset1-btn');
const scoreElement = document.querySelector('.score1');
const gameImagesElement = document.querySelector('.game1-images');

let score = 0;
let gameStarted = false;

cardImage.addEventListener('click', () => {
  if (!gameStarted) {
    cardBack.style.display = 'block';
  }
});

startBtn.addEventListener('click', () => {
  gameStarted = true;
  score = 0;
  scoreElement.textContent = `Score1: ${score}`;
  gameImagesElement.innerHTML = '';

  // Define your own image file names or URLs
  const myImages = [
    '../images/about_us/chicken-leg (1).png',
    '../images/about_us/paneer-tikka (2).png',
    '../images/about_us/s1.avif',
    '../images/about_us/macarons.png',
    '../images/about_us/momos.png',
  ];

  for (let i = 0; i < 10; i++) {
    const gameImage = document.createElement('div');
    gameImage.classList.add('game1-image');
    const image = document.createElement('img');
    // Select a random image from your array
    image.src = myImages[Math.floor(Math.random() * myImages.length)];
    gameImage.appendChild(image);
    gameImagesElement.appendChild(gameImage);

    gameImage.addEventListener('click', () => {
      score++;
      scoreElement.textContent = `Score1: ${score}`;
      if (score >= 20) {
        alert('Congratulations! You won!');
        gameStarted = false;
      }

      // Change the image after clicking on it
      const newImage = document.createElement('img');
      newImage.src = myImages[Math.floor(Math.random() * myImages.length)];
      gameImage.innerHTML = '';
      gameImage.appendChild(newImage);
    });
  }
});

resetBtn.addEventListener('click', () => {
  gameStarted = false;
  score = 0;
  scoreElement.textContent = `Score1: ${score}`;
  gameImagesElement.innerHTML = '';
  cardBack.style.display = 'none';
});

