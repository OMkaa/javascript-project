const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')


// const regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
const regExp = /\w+@gmail\.\w+/
// const regExp = /^\w[.%+-]+@gmail\./
// const regExp = /\w+@\w+\./

    gmailButton.addEventListener('click', () =>{
    if(regExp.test(gmailInput.value)){
        gmailResult.innerHTML = ')'
        gmailResult.style.color = 'green'
    }else{
        gmailResult.innerHTML = '('
        gmailResult.style.color = 'red'
    }
})

// let offset = 0

// function move(){
//     document.querySelector('.child_block').style.left = offset + 'px'
//     offset = offset +5
//     if(offset > 445){
//         return true
//     }
//     move()
// }
// move()

const box = document.querySelector('.child_block')

let positionX = 0 
let positionY = 0 
const move = () => {
    if(positionX < 445 && positionY === 0){
        positionX++
        box.style.left = `${positionX}px`
        setTimeout(move, 1)
    }else if(positionX >= 445 && positionY < 445){
        positionY++
        box.style.top = `${positionY}px`
        setTimeout(move, 1)
    }else if(positionX > 0 && positionY === 445){
        positionX--
        box.style.left = `${positionX}px`
        setTimeout(move, 1)
    }else if(positionX >= 0 && positionY > 0){
        positionY--
        box.style.top = `${positionY}px`
        setTimeout(move, 1)
    }
    
}
move()


const intervalElement = document.getElementById("seconds");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resumeButton = document.getElementById("resume");
const resetButton = document.getElementById("reset");

let timerInterval;
let seconds = 0;

function updateTimer() {
    intervalElement.textContent = seconds;
}

function startTimer() {
    timerInterval = setInterval(() => {
        seconds++;
        updateTimer();
    }, 1000);

    toggleButtonState(true);
}

function stopTimer() {
    clearInterval(timerInterval);
    toggleButtonState(false);
}

function resumeTimer() {
    startTimer();
}

function resetTimer() {
    stopTimer();
    seconds = 0;
    updateTimer();
}

function toggleButtonState(running) {
    startButton.disabled = running;
    stopButton.disabled = !running;
    resumeButton.disabled = running;
    resetButton.disabled = running;
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resumeButton.addEventListener("click", resumeTimer);
resetButton.addEventListener("click", resetTimer);

toggleButtonState(false);
updateTimer();