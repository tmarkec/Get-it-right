/**
 * landing page btn not working so it set to hidden
 * fix issue!!!!!!

let play = document.getElementById('welcome-box');
let games = document.getElementById('game-box');
let startBtn = document.getElementById('start-btn');

startBtn.addEventListener('click', function() {
    play.classList.add('inactive');
    games.classList.add('active');
}) */

// game page
let randomNum = Math.trunc(Math.random() * 10) + 1;
document.getElementById('random-pick').textContent = randomNum;
let score = document.querySelector('.nmb-blue').textContent = 0;
// document.querySelector('.random-number').textContent = 10;
// document.querySelector('.prediction-number').value = 5;
//click button to check score
document.querySelector('.btn-check').addEventListener('click', function () {
    let input = +(document.querySelector('.prediction-number').value)
    //guess is letter or no number
    if (!input) {
        document.getElementById('text').textContent = 'Please type number!!'
    } 
    //guess is equal to random number
    else if (input === randomNum) {
        document.getElementById('text').textContent = 'Well done'
        document.getElementById('random-pick').textContent = randomNum;
        document.body.style.background= 'green'
    } 
    //guess is larger than random number
    else if (input > randomNum) {
        document.getElementById('text').textContent = 'Way to high'
        document.body.style.background= 'red'
        score = score + 1;
    } 
    //guess is lower than random number
    else if (input < randomNum) {
        document.querySelector('.random-text').textContent = 'Way to low'
        document.body.style.background= 'red'
        score = score - 1;
    }

})