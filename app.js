const  computerChoiceDisplay = document.getElementById('computer-choice')
const  userChoiceDisplay = document.getElementById('user-choice')
const  resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
   userChoice = e.target.id
   userChoiceDisplay.innerHTML = userChoice
   generateComputerChoice()
   getResult()
}))

function generateComputerChoice(){
   const randomNumber = Math.floor(Math.random() * 3) +1 //or you can use possibleChoices.lenght
  
   if (randomNumber === 1){
      computerChoice = 'rock'
   } else if(randomNumber === 2){
      computerChoice = 'scissors'
   }else{
      computerChoice = 'paper'
   }

   computerChoiceDisplay.innerHTML = computerChoice

}


function getResult(){
   if(computerChoice === userChoice){
      result = 'its a draw!'
   } else if(computerChoice === 'rock' && userChoice === 'paper'){
      result = 'You win!'
   } else if(computerChoice === 'rock' && userChoice === 'scissors'){
      result = 'You lost, looooser'
   }else if(computerChoice === 'paper' && userChoice === "scissors"){
      result = 'you win!'
   }else if(computerChoice === 'paper' && userChoice === 'rock'){
      result = 'You lost, looser!'
   }
   else if(computerChoice === 'scissors' && userChoice === 'paper'){
      result = 'You lost, looser'
   }else if(computerChoice === 'scissors' && userChoice === 'rockk'){
      result = 'You win!'
   }

   resultDisplay.innerHTML = result
}

