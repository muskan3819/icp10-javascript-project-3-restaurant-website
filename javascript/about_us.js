// Food Pairs game logic

// Define the food items
const foodItems = [
    { name: 'Apple', image: '../images/about_us/apple (1).png' },
    { name: 'Apple', image: '../images/about_us/apple.png' },
    { name: 'Banana', image: 'banana.jpg' },
    { name: 'Banana', image: 'banana.jpg' },
    { name: 'Carrot', image: 'carrot.jpg' },
    { name: 'Carrot', image: 'carrot.jpg' },
    { name: 'Donut', image: 'donut.jpg' },
    { name: 'Donut', image: 'donut.jpg' },
];

// Define the game grid
const gameGrid = document.getElementById('game-grid');

// Function to create a food card
function createFoodCard(foodItem) {
    const card = document.createElement('div');
    card.classList.add('food-card');
    card.innerHTML = `<div class="front">${foodItem.name}</div><div class="back"><img src="${foodItem.image}" alt="${foodItem.name}"></div>`;
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
        checkForMatch();
    });
    return card;
}

// Function to shuffle the food items
function shuffleFoodItems() {
    for (let i = foodItems.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [foodItems[i], foodItems[j]] = [foodItems[j], foodItems[i]];
    }
}

// Function to create the game grid
function createGameGrid() {
    shuffleFoodItems();
    for (let i = 0; i < foodItems.length; i++) {
        const foodCard = createFoodCard(foodItems[i]);
        gameGrid.appendChild(foodCard);
    }
}

// Function to check for a match
function checkForMatch() {
    const flippedCards = gameGrid.querySelectorAll('.flipped');
    if (flippedCards.length === 2) {
        const card1 = flippedCards[0];
        const card2 = flippedCards[1];
        if (card1.innerHTML === card2.innerHTML) {
            // Match! Keep the cards flipped
            card1.classList.add('matched');
            card2.classList.add('matched');
        } else {
            // No match! Flip the cards back
            setTimeout(() => {
                card1.classList.remove('flipped');
                card2.classList.remove('flipped');
            }, 1000);
        }
    }
}

// Create the game grid
createGameGrid();

