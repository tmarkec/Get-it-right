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
let randomNum = Math.trunc(Math.random() * 20) + 1;
document.getElementById('random-pick').textContent = randomNum;
let score = document.querySelector('.nmb-blue').textContent = 0;
let storeNumbers = document.querySelector('.nmb-red')
let info = [];
//click button to check score
document.getElementById('btn-check').addEventListener('click', function () {
    let input = +(document.querySelector('.prediction-number').value);
    info.push(input);
    document.querySelector('.nmb-red').textContent = info
    //guess is letter or no number
    if (!input) {
        document.getElementById('text').textContent = 'Please type a number!!'
    }
    //guess is equal to random number
    else if (input === randomNum) {
        document.getElementById('text').textContent = `Yuhuu your No. of guesses = ${score+1}`
        document.getElementById('random-pick').textContent = randomNum;
        score = score + 1;
        document.querySelector('.nmb-blue').textContent = score
        document.body.style.background = 'green'
        document.querySelector('.prediction-number').value =''
        console.log(info)
        
    }
    //guess is larger than random number
    else if (input > randomNum) {
        if (score <= 4) {
            document.getElementById('text').textContent = 'Way to high'
            score = score + 1;
            document.querySelector('.nmb-blue').textContent = score
        } else {
            document.getElementById('text').textContent = 'You lost'
            document.querySelector('.prediction-number').value ='' 
        }
        
    }
    //guess is lower than random number
    else if (input < randomNum) {
        if (score <= 4) {
            document.getElementById('text').textContent = 'Way to low'
            score = score + 1;
            document.querySelector('.nmb-blue').textContent = score
        } else {
            document.getElementById('text').textContent = 'You lost'
            document.querySelector('.prediction-number').value =''   
        }
    } else {
        document.querySelector('.random-text').textContent = 'You lost'
    }
});


//play again game
document.getElementById('btn-again').addEventListener('click', function () {
    score = document.querySelector('.nmb-blue').textContent = 0;
    randomNum = Math.trunc(Math.random() * 20) + 1;
    document.getElementById('text').textContent = 'Start guessing...';
    document.querySelector('.prediction-number').value = ''
    document.getElementById('random-pick').textContent = '?'
    document.body.style.background = 'white'
    info.splice(any[])

})