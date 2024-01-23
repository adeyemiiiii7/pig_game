'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0EL = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEL = document.querySelector('.dice');
const current0EL = document.getElementById('current--0');
const current1EL = document.getElementById('current--1');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
let scores, currentScore, activePlayer, playing;

const init = function () {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0EL.textContent = 0;
    score1El.textContent = 0;
    current0EL.textContent = 0;
    current1EL.textContent = 0;

    diceEL.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
};

init();

const switchPlayer = function () {
    // Switch to the next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
    if (playing) {
        // Generating a random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;

        // Displaying the dice
        diceEL.classList.remove('hidden');
        diceEL.src = `dice-${dice}.png`;

        // Check for rolled 1
        if (dice !== 1) {
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            // Switch to the next player
            switchPlayer();
        }
    }
});

// Holding the current score
btnHold.addEventListener('click', function () {
    if (playing) {
        // Add current score to active player's score
        scores[activePlayer] += currentScore;

        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        // Check if player's score is >= 100
        if (scores[activePlayer] >= 100) {
            playing = false;
            diceEL.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        }

        // Switch to the next player
        switchPlayer();
    }
});

// The reason you use add initially and remove later 
// is to control the visibility of the dice based on the game state. 
// When the page loads or when a new game starts, you want the dice to be hidden, 
// so you add the 'hidden' class.

btnNew.addEventListener('click', init);

