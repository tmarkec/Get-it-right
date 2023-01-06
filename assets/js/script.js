//loading page
let games = document.getElementById("game-box");
let startBtn = document.getElementById("start-btn");
//button hides page with rules
startBtn.addEventListener("click", function () {
  games.classList.remove("hidden");
});

// rundom number game page
let randomNum = Math.trunc(Math.random() * 20);//creates random number between 0 -20
document.getElementById('random-pick').textContent = randomNum;
let score = document.getElementById('nmb-blue').textContent = 0;//score set to 0
let info = [];//array using to display users guess numbers
let displayText = function(text) {
    document.getElementById('text').textContent = text;
}

//function for checking user input
document.getElementById('btn-check').addEventListener('click', function () {
   
    let input = +(document.getElementById('prediction-number').value);
    if (info.includes(input)){
        displayText('Already tried this number!!!')
        return
    }
    if (input > 20) {
        document.getElementById("prediction-number").value = "";
        return displayText("Please pick number between 0-20");
      }
    if (!input && input !== 0) {
       return displayText('Please type a number!!!');  
    }
    score++
    document.getElementById('nmb-blue').textContent = score
    info.push(input);
    document.getElementById('nmb-red').textContent = info
    document.getElementById('prediction-number').value=''
    document.getElementById('prediction-number').focus();
    //is user guess is letter or no number
    
    //guess is equal to random number-if user wins
     if (input === randomNum) {
        displayText(`Well done! Your No. of guesses = ${score}`)
        document.getElementById('random-pick').textContent = randomNum;
        document.body.style.background = 'green'
        document.getElementById('prediction-number').value =''
        document.getElementById('random-pick').style.border = '0'
        document.getElementById('random-pick').style.color = 'green'
        return
    }
   
   //is user guess is higher or lower than random number
        if (score <= 4) {
            document.getElementById('text').textContent = input > randomNum ? 'Your guess is too high' : 'Your guess is too low';      
        } else {
            displayText('You lost')
            document.getElementById('prediction-number').value =''
            document.getElementById('random-pick').textContent = randomNum;
            document.getElementById('random-pick').style.border = '0'
            document.getElementById('random-pick').style.color = 'red' 
            document.getElementById('btn-check').disabled = true 
        }
    
});

//function for playing another game
document.getElementById('btn-again').addEventListener('click', function () {
    score = document.getElementById('nmb-blue').textContent = 0;
    randomNum = Math.trunc(Math.random() * 20);
    document.getElementById('text').textContent = 'Start guessing...';
    document.getElementById('prediction-number').value = ''
    document.getElementById('random-pick').textContent = '?'
    document.body.style.background = 'white'
    info = []
    document.getElementById('nmb-red').innerHTML = ''
    document.getElementById('btn-check').disabled = false;

})