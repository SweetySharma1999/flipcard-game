const symbols = ['🔥', '🌊', '⚡', '🌿', '💎', '🌈', '🌙', '☀️'];
let deck = [...symbols, ...symbols]; // Duplicate for pairs
let flippedCards = [];
let moves = 0;
let canClick = true;

const board = document.getElementById('game-board');
const moveDisplay = document.getElementById('move-count');

function initGame() {
    board.innerHTML = '';
    moves = 0;
    moveDisplay.innerText = moves;
    const shuffledDeck = Engine.shuffle(deck);
    
    shuffledDeck.forEach(symbol => {
        const card = Engine.createCardElement(symbol);
        card.addEventListener('click', handleCardClick);
        board.appendChild(card);
    });
}

function handleCardClick() {
    if (!canClick || this.classList.contains('flipped')) return;

    this.classList.add('flipped');
    flippedCards.push(this);

    if (flippedCards.length === 2) {
        checkMatch();
    }
}

function checkMatch() {
    canClick = false;
    moves++;
    moveDisplay.innerText = moves;

    const [card1, card2] = flippedCards;
    const isMatch = card1.dataset.symbol === card2.dataset.symbol;

    if (isMatch) {
        flippedCards = [];
        canClick = true;
        // You could add a checkWin() here
    } else {
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            flippedCards = [];
            canClick = true;
        }, 1000);
    }
}

document.getElementById('restart-btn').addEventListener('click', initGame);
initGame();