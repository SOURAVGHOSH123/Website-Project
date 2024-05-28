let randomNumber =parseInt( (Math.random()) * 100 +1)
console.log(randomNumber)
const submit = document.querySelector('#submit')
const userInput = document.querySelector('#guessfield')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const LowOrHigh = document.querySelector('.LowOrHigh')
const startOver = document.querySelector('.resultPress')

const p = document.createElement('p');

let prevGuess= [];
let numGues = 1 ; 

let playGame = true; 
if(playGame){
   submit.addEventListener('click', function(e){
      e.preventDefault()
      const guess = parseInt(userInput.value)
      console.log(guess);
      validateGuess(guess);
   })
}

function validateGuess(guess){
   if(isNaN(guess)){
      alert('Please enter a number')
   }else if(guess < 1){
      alert('Please enter a number greater than 1')
   }else if(guess > 100){
      alert('Please enter a number less than 100')
   }else {
      prevGuess.push(guess)
      if(numGues === 10){
         displayGuess(guess)
         displayMessage(`Game Over. Random number was ${randomNumber}`)
         endGame()
      }else{
         displayGuess(guess)
         checkGuess(guess)
      }
   }
}

function checkGuess(guess){
   if(guess === randomNumber){
      displayMessage("Your Guess is right");
      endGame()
   }else if(guess < randomNumber){
      displayMessage('Number is too low')
   }else if(guess > randomNumber){
      displayMessage('Number is too high')
   }
}

function displayGuess(guess){
   userInput.value = ''
   guessSlot.innerHTML += `${guess},  `
   numGues++;
   remaining.innerHTML = `${11 - numGues}`
}

function displayMessage(message){
   LowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
   userInput.value = ''
   userInput.setAttribute('disabled', '')
   p.classList.add('button')
   p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
   startOver.appendChild(p)
   playGame = false
   newGame()
}

function newGame(){
   const newGameButton = document.querySelector('#newGame')
   newGameButton.addEventListener('click', function(e){
      randomNumber = parseInt(Math.random() * 100+1);
      prevGuess = []
      numGues = 1
      guessSlot.innerHTML = '';
      remaining.innerHTML = `${11 - numGues}`;
      userInput.removeAttribute('disabled');
      startOver.removeChild(p)

      playGame = true

   })
}