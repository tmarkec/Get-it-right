/*jshint esversion: 6*/

//variables
const copyright = document.getElementById("copy");

const register = document.getElementById("register");

const audioWin = document.getElementById("sound");

const audioLose = document.getElementById("sound2");

const games = document.getElementById("game-box");

const userName = document.getElementById("username");

let randomNum = Math.trunc(Math.random() * 25) + 1;

let score = document.getElementById("nmb-blue").innerHTML = 0;

let info = [];

const predictionNumber = document.getElementById("prediction-number");

const randomPick = document.getElementById("random-pick");

const redNumber = document.getElementById("nmb-red");


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
        randomPick.classList.add('border');
    }
});

let displayText = function (text) {
    document.getElementById("text").innerHTML = text;
};

//function to run the game
function confirm() {
    let input = +(document.getElementById("prediction-number").value);
    //user input same as already picked one;
    predictionNumber.focus();
    if (info.includes(input)) {
        displayText("Already tried this number!!!");
        predictionNumber.value = "";
        return;
    }
    //limit user pick numbers within the game rules and avoid number 0;
    if (input > 25 || input == 0 || input < 0) {
        predictionNumber.value = "";
        return displayText("Please pick number between 1-25!");
    }

    score++;
    document.getElementById("nmb-blue").innerHTML = score;
    info.push(input);
    redNumber.innerHTML = info;
    predictionNumber.value = "";


    //user wins the game;
    if (input === randomNum) {
        displayText(`Well done ${userName.value} you won`);
        randomPick.innerHTML = randomNum;
        predictionNumber.value = "";
        randomPick.classList.add("win");
        party.confetti(games);
        audioWin.play();
        document.getElementById("btn-check").disabled = true;
        randomPick.classList.remove('border');
        return;
    }

    //if user guess is higher or lower than random picked number;
    if (score <= 4) {
        if (score !== randomNum) {
            document.getElementById("text").innerHTML = input > randomNum ? `${userName.value} try lower number!` : `${userName.value} try higher number!`;
        }
    }

    // user lose game;
    else {
        displayText(`${userName.value} you lost!!!`);
        predictionNumber.value = "";
        randomPick.innerHTML = randomNum;
        randomPick.classList.add("nmbR");
        audioLose.play();
        document.getElementById("btn-check").disabled = true;
        randomPick.classList.remove('border');
    }
}

//function to play again game
function playAgain() {
    score = document.getElementById("nmb-blue").innerHTML = 0;
    randomNum = Math.trunc(Math.random() * 25) + 1;
    displayText("Start guessing...");
    predictionNumber.value = "";
    randomPick.innerHTML = "?";
    randomPick.classList.remove("nmbR");
    randomPick.classList.remove("win");
    info = [];
    redNumber.innerHTML = "";
    randomPick.classList.add('border');
    document.getElementById("btn-check").disabled = false;
}
//game page - checking user input with mouse click
document.getElementById("btn-check").addEventListener("click", function (e) {
    confirm();
});

//game page - checking user input with enter
document.getElementById("prediction-number").addEventListener("keydown", function (evt) {
    if (evt.key === "Enter") {
        confirm();
    }
});

//game page - play again
document.getElementById("btn-again").addEventListener("click", function () {
    playAgain();
});

//button for back to the welcome page
document.getElementById("btn-back").addEventListener("click", function () {
    games.classList.add("hidden");
    userName.value = "";
    copyright.classList.remove("black");
    displayText("Start guessing...");
    info = [];
    redNumber.innerHTML = "";
});