let random = Math.floor((parseInt(Math.random() * 10) + 1))
// console.log(random)

const sumbit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')
const p = document.createElement('p')
let prevGuess = []
let numGuess = 1

let playGame = true

    if (playGame) {
        sumbit.addEventListener('click', (e) => {
            e.preventDefault()
            const guess = parseInt(userInput.value)
            console.log(guess)
            validateGuess(guess)
        })
        
    }


function validateGuess(guess) {
    if(isNaN(guess)) {
        alert('Please enter only number')
    }
    else if(guess < 1) {
        alert('Please enter value greate then 1')
    }
    else if(guess > 100) {
        alert('Please enter only number below 100')
    }else {
        prevGuess.push(guess)
        if(numGuess === 11) {
            displayGuess(guess)
            displayMessage(guess)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }   
    }
}

function checkGuess(guess) {
    if(guess === random) {
        displayMessage("You guess it right")
        endGame()
    }
    else if(guess < random) {
        displayMessage("Number is to low")
    } 
    else if(guess > random) {
        displayMessage("Number is to High")
    } 
}

function displayMessage(mesg) {
    lowOrHigh.innerHTML = `<h2>${mesg}</h2>`

}
function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += ` ${guess}`
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id='newGame'>Start new Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame() {
    const btn = document.querySelector('#newGame')
    btn.addEventListener('click', (e) => {
        random = Math.floor((parseInt(Math.random() * 10) + 1))
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true

    })

}
