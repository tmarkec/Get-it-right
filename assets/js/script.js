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
let score = document.getElementById('nmb-blue').textContent = 0;
let info = [];
let displayText = function(text) {
    document.getElementById('text').textContent = text;
}
//click button to check score
document.getElementById('btn-check').addEventListener('click', function () {
    let input = +(document.getElementById('prediction-number').value);
    info.push(input);
    document.getElementById('nmb-red').textContent = info
    //guess is letter or no number
    if (!input) {
        displayText('Please type a number!!!')
    }
    //guess is equal to random number
    else if (input === randomNum) {
        displayText= (`Well done! Your No. of guesses = ${score+1}`)
        document.getElementById('random-pick').textContent = randomNum;
        score = score + 1;
        document.getElementById('nmb-blue').textContent = score
        document.body.style.background = 'green'
        document.getElementById('prediction-number').value =''
        document.getElementById('random-pick').style.border = '0'
        document.getElementById('random-pick').style.color = 'green'
       
        
    }
    //guess is larger than random number
    else if (input > randomNum) {
        if (score <= 4) {
            displayText('Way to high')
            score = score + 1;
            document.getElementById('nmb-blue').textContent = score
        } else {
            displayText('You lost')
            document.getElementById('prediction-number').value =''
            document.getElementById('random-pick').textContent = randomNum;
            document.getElementById('random-pick').style.border = '0'
            document.getElementById('random-pick').style.color = 'red' 
        }
        
    }
    //guess is lower than random number
    else if (input < randomNum) {
        if (score <= 4) {
            displayText('Way to low')
            score = score + 1;
            document.getElementById('nmb-blue').textContent = score
        } else {
            displayText('You lost')
            document.getElementById('prediction-number').value ='' 
            document.getElementById('random-pick').textContent = randomNum; 
            document.getElementById('random-pick').style.border = '0'
            document.getElementById('random-pick').style.color = 'red' 
        }
    } else {
        document.getElementById('random-text').textContent = 'You lost'
    }
});


//play again game
document.getElementById('btn-again').addEventListener('click', function () {
    score = document.getElementById('nmb-blue').textContent = 0;
    randomNum = Math.trunc(Math.random() * 20) + 1;
    document.getElementById('text').textContent = 'Start guessing...';
    document.getElementById('prediction-number').value = ''
    document.getElementById('random-pick').textContent = '?'
    document.body.style.background = 'white'
    info = []
    document.getElementById('nmb-red').innerHTML = ''

})