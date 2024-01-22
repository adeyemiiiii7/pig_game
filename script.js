'use strict';
//selecting elements
const score0EL = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


//starting conditions
score0EL.textContent = 0;
score1El.textContent = 0;
diceEL.classList.add('hidden')

//Rolling dice functionality
btnRoll.addEventListener('click', function(){
    // 1.Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    //2 displaying the dice
    diceEL.classList.remove('hidden');
    diceEL.src = `dice-${dice}.png`;
})