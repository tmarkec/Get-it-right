/*jshint esversion: 6*/

//variables
const copyright = document.getElementById("copy");

const register = document.getElementById('register');

const audioWin = document.getElementById("sound");

const audioLose = document.getElementById("sound2");

const games = document.getElementById("game-box");

const userName = document.getElementById("username");

let randomNum = Math.trunc(Math.random() * 25) + 1;

let score = document.getElementById('nmb-blue').textContent = 0;

let info = [];

const predictionNumber = document.getElementById("prediction-number");

const randomPick = document.getElementById('random-pick');

const redNumber = document.getElementById('nmb-red');


//landing page user validation
function validateUser() {
    let reg = /^[A-Za-z]+$/;
    if (userName.value == "" || !userName.value.match(reg)) {
        swal({
            title: "Please type in letters, no empty space or numbers!!!",
            className: "swalAlert"
        });
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
        predictionNumber.focus();
        copyright.classList.add("black");
    }
});

let displayText = function (text) {
    document.getElementById('text').textContent = text;
};

//function to run the game
function confirm() {
    let input = +(document.getElementById('prediction-number').value);
    //user input same as already picked one;
    predictionNumber.focus();
    if (info.includes(input)) {
        displayText('Already tried this number!!!');
        return;
    }
    //limit user pick numbers within the game rules and avoid number 0;
    if (input > 25 || input == 0 || input < 0) {
        predictionNumber.value = '';
        return displayText("Please pick number between 1-25!");
    }

    score++;
    document.getElementById('nmb-blue').textContent = score;
    info.push(input);
    redNumber.textContent = info;
    predictionNumber.value = '';


    //user wins the game;
    if (input === randomNum) {
        displayText(`Well done ${userName.value} you won`);
        randomPick.textContent = randomNum;
        predictionNumber.value = '';
        randomPick.style.border = '0';
        party.confetti(games);
        audioWin.play();
        document.getElementById('btn-check').disabled = true;
        return;
    }

    //if user guess is higher or lower than random picked number;
    if (score <= 4) {
        if (score !== randomNum) {
            document.getElementById('text').textContent = input > randomNum ? `${userName.value} try lower number!` : `${userName.value} try higher number!`;
        }
    }

    // user lose game;
    else {
        displayText(`${userName.value} you lost!!!`);
        predictionNumber.value = '';
        randomPick.textContent = randomNum;
        randomPick.style.border = '0';
        audioLose.play();
        document.getElementById('btn-check').disabled = true;
    }
}

//game page - checking user input
document.getElementById('btn-check').addEventListener('click', function (e) {
    confirm();
});
//not working at the moment
document.getElementById("prediction-number").addEventListener("keydown", function (evt) {
    if (evt.key === "Enter") {
        confirm();
    }
});

//function to playing game again;
document.getElementById('btn-again').addEventListener('click', function () {
    score = document.getElementById('nmb-blue').textContent = 0;
    randomNum = Math.trunc(Math.random() * 25) + 1;
    displayText('Start guessing...');
    predictionNumber.value = '';
    randomPick.textContent = '?';
    document.body.style.background = 'white';
    info = [];
    redNumber.innerHTML = '';
    document.getElementById('btn-check').disabled = false;
});

//if user wish to read rules again or change user name;
document.getElementById("btn-back").addEventListener("click", function () {
    games.classList.add("hidden");
    userName.value = "";
    copyright.classList.remove("black");
    displayText('Start guessing...');
});