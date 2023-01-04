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
// document.querySelector('.random-number').textContent = 10;
// document.querySelector('.prediction-number').value = 5;
//check button
document.querySelector('.btn-check').addEventListener('click', function () {
    let input = +(document.querySelector('.prediction-number').value)
    if (!input) {
        document.getElementById('text').textContent = 'Please type number!!'
    } else if (input === randomNum) {
        document.getElementById('text').textContent = 'Well done'
        document.getElementById('random-pick').textContent = randomNum;
        document.body.style.background= 'green'
    } else if (input > randomNum) {
        document.getElementById('text').textContent = 'Way to high'
        document.body.style.background= 'red'
    } else if (input < randomNum) {
        document.querySelector('.random-text').textContent = 'Way to low'
        document.body.style.background= 'red'
    }

})