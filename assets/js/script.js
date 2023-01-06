/**landing page
 *  add user name input?! which will replicate in the score
 */
const games = document.getElementById("game-box");
const startBtn = document.getElementById("start-btn");
startBtn.addEventListener("click", function () { //button hides page with rules
    games.classList.remove("hidden");
});

// rundom number game page
let randomNum = Math.trunc(Math.random() * 20) + 1; //creates random number between 1 -20
document.getElementById('random-pick').textContent = randomNum;
let score = document.getElementById('nmb-blue').textContent = 0; //score set to 0
const info = []; //array using to display users guess numbers
const predictionNumber = document.getElementById("prediction-number");
const randomPick = document.getElementById('random-pick');
const redNumber = document.getElementById('nmb-red');
document.getElementById('btn-check').disabled = false;
let displayText = function (text) {
    document.getElementById('text').textContent = text
};

/**function for checking user input
 * with different outcomes
 */
document.getElementById('btn-check').addEventListener('click', function () {
    let input = +(document.getElementById('prediction-number').value);
    //user input same as already picked one
    if (info.includes(input)) {
        displayText('Already tried this number!!!')
        return
    }
    //limit user pick numbers within the game rules and avoid number 0
    if (input > 20 || input == 0) {
        predictionNumber.value = '';
        return displayText("Please pick number between 1-20");
    }

    if (!input) {
        displayText('Please type a number!!!');
        return
    }
    score++
    document.getElementById('nmb-blue').textContent = score;
    info.push(input);
    redNumber.textContent = info;
    predictionNumber.value = ''
    predictionNumber.focus();


    //user wins the game
    if (input === randomNum) {
        displayText(`Well done! Your No. of guesses = ${score}`)
        randomPick.textContent = randomNum;
        predictionNumber.value = '';
        randomPick.style.border = '0';
        return
    }

    //if user guess is higher or lower than random picked
    if (score <= 4) {
        document.getElementById('text').textContent = input > randomNum ? 'Your guess is too high' : 'Your guess is too low';
    }
    // user lose game
    else {
        displayText('You lost');
        predictionNumber.value = '';
        randomPick.textContent = randomNum;
        randomPick.style.border = '0';
        document.getElementById('btn-check').disabled = true;
    }

});

//function to playing again
document.getElementById('btn-again').addEventListener('click', function () {
    score = document.getElementById('nmb-blue').textContent = 0;
    randomNum = Math.trunc(Math.random() * 20) + 1;
    displayText('Start guessing...');
    predictionNumber.value = '';
    randomPick.textContent = '?';
    document.body.style.background = 'white';
    info = [];
    redNumber.innerHTML = '';
    document.getElementById('btn-check').disabled = false;
})