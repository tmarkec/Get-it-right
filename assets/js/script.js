//audio for win/lose
const audioWin = document.getElementById("sound");
const audioLose = document.getElementById("sound2")
const games = document.getElementById("game-box");

const userName = document.getElementById("username")
//creates random number between 1 - 25
let randomNum = Math.trunc(Math.random() * 25) + 1; 
document.getElementById('random-pick').textContent = randomNum;
let score = document.getElementById('nmb-blue').textContent = 0; 
//display user guessed numbers
const info = []; 
const predictionNumber = document.getElementById("prediction-number");
const randomPick = document.getElementById('random-pick');
const redNumber = document.getElementById('nmb-red');
//landing page user validation
function validateUser() {
    let reg = /^[A-Za-z]+$/;
    if (userName.value == "" || !userName.value.match(reg)) {
      alert("No numbers allowed");
      userName.focus();
      return false;
    } else {
      return true;
    }
  }
  register.addEventListener("submit", function (evt) {
    evt.preventDefault();
    if (validateUser()) {
      games.classList.remove("hidden");
      document.getElementById("userN").innerText = userName.value; 
       
    }
  });

let displayText = function (text) {
    document.getElementById('text').textContent = text
};

//game page - checking user
document.getElementById('btn-check').addEventListener('click', function () {
    let input = +(document.getElementById('prediction-number').value);
    //user input same as already picked one
    if (info.includes(input)) {
        displayText('Already tried this number!!!')
        return
    }
    //limit user pick numbers within the game rules and avoid number 0
    if (input > 25 || input == 0) {
        predictionNumber.value = '';
        return displayText("Please pick number between 1-25!");
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
        displayText(`Well done ${userName.value} you won `)
        randomPick.textContent = randomNum;
        predictionNumber.value = '';
        randomPick.style.border = '0';
        party.confetti(games);
        audioWin.play();
        return
    }

    //if user guess is higher or lower than random picked
    if(score <=4){
    if (score !== randomNum) {
        document.getElementById('text').textContent = input > randomNum ? `${userName.value} try lower number!` : `${userName.value} try higher number`;
    }
}
    // user lose game
    else {
        displayText(`${userName.value} you lost!!!`);
        predictionNumber.value = '';
        randomPick.textContent = randomNum;
        randomPick.style.border = '0';
        audioLose.play();     
    }
});

//function to playing again
document.getElementById('btn-again').addEventListener('click', function () {
    score = document.getElementById('nmb-blue').textContent = 0;
    randomNum = Math.trunc(Math.random() * 25) + 1;
    displayText('Start guessing...');
    predictionNumber.value = '';
    randomPick.textContent = '?';
    document.body.style.background = 'white';
    info = [];
    redNumber.innerHTML = '';
    // document.getElementById('btn-check').disabled = false;
    
})