//first we need all sqaures
const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPosition = null
let currentTime = 30
let timerId = null
let countDownTimerId = null

function randomSquare() {
    squares.forEach(sqaure => {
        //first remove the mole 
        sqaure.classList.remove('mole')
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('mole')
    hitPosition = randomSquare.id


}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if( square.id == hitPosition) {
            result++
            score.textContent = result
            hitPosition = null
        }
    })
})


function moveTheMole() {
    timerId = setInterval(randomSquare, 500)
}

moveTheMole()

//we have our game is moving just control the timing 
function reduceTime() {
    currentTime--
    timeLeft.textContent = currentTime

    if(currentTime == 0) {
        clearTimeout(countDownTimerId)
        clearTimeout(timerId)
        alert('Time out! Your score is ' + result)
    }
}

countDownTimerId = setInterval(reduceTime , 1000)