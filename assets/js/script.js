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
let randomNum = Math.trunc(Math.random() * 1) + 1;
console.log(randomNum);
// document.querySelector('.random-number').textContent = 10;
// document.querySelector('.prediction-number').value = 5;
//check button
document.querySelector('.btn-check').addEventListener('click', function() {
    let guess = +(document.querySelector('.prediction-number').value)
 if(guess === randomNum) {
    document.querySelector('.random-text').textContent = 'Well done'
    document.querySelector('.random-number').textContent = randomNum;
 }
 else if(guess > randomNum) {
    document.querySelector('.random-text').textContent = 'Way to high'
 }
 else if(guess < randomNum) {
    document.querySelector('.random-text').textContent = 'Way to low'
 }

})