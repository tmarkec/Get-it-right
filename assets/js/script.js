//landing page play btn
let play = document.getElementById('blur');
let containerBox = document.getElementById('container-box');
let startBtn = document.getElementById('start-btn');

startBtn.addEventListener('click', function (e) {
if(e == 'click') {
    play.classList.add('inactive');
    containerBox.classList.add('active')
}
})