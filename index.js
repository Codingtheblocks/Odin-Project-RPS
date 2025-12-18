let computerChoice = null

function getComputerChoice() {
    let random = Math.random()
    if (random < .33) {
        console.log(`computer chose rock`)
        computerChoice = "rock" 
    } else if ( random > .33 && random < .67) {
        console.log(`computer chose paper`)
        computerChoice = "paper"
    } else {
        console.log(`computer chose scissors`)
        computerChoice = "scissors"
    } 
    return computerChoice

}

// console.log(`computer chose: ${getComputerChoice()}`)

let buttonsContainer = document.querySelector(".buttons")
let humanChoice = null

buttonsContainer.addEventListener("click", function(event) {
    const clickedButton = event.target.closest('button')

    if (clickedButton && buttonsContainer.contains(clickedButton)) {
        let userChoice = clickedButton.value; 
        humanChoice = userChoice
        userImgSelector()
        console.log(`User chose: ${userChoice}`)
        console.log(playGame())
        return userChoice
    }
})

let playerPoints = document.querySelector(".score")
let computerPoints = document.querySelector(".computerscore")

function updateScoreboard() {
  playerPoints.textContent = `Player Score: ${humanScore}`
  computerPoints.textContent = `Computer Score: ${computerScore}`
}

let humanScore = 0
let computerScore = 0 

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++ 
        updateScoreboard()
        return "You lose! Paper beats rock.";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++
        updateScoreboard()
        return "Rock beats paper. You win!"
    } else if (humanChoice === "rock" && computerChoice === "rock") {
        return "It's a drawl..."
    } else if (humanChoice === "paper" && computerChoice === "paper") {
        return "It's a drawl..."
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++
        updateScoreboard()
        return "Scissors beats paper. You lose!"
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++
        updateScoreboard()
        return "Paper beats rock. You win!"
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++
        updateScoreboard()
        return "Scissors beats paper. You win!"
    } else if (humanChoice === "scissors" && computerChoice === "scissors") {
        return "It's a drawl..."
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++
        updateScoreboard()
        return "Rock beats scissors. You lose!"
    } else {
        return "Please make a selection."
    }
}

let roundCounter = 1
let roundResult = null

function playGame() {
    let computerChoice = getComputerChoice()
    computerImgSelector()
    console.log(playRound(humanChoice, computerChoice))

    if (roundCounter < 5) {
       roundCounter++ 
    } else if (roundCounter === 5 && humanScore > computerScore) {
        roundResult = `Congratulations you win!`
        gameResult.textContent = roundResult
        setTimeout(resetGame, 1500)
    } else if (roundCounter === 5 && humanScore === computerScore){
        roundResult = `It's a tie!`
        gameResult.textContent = roundResult
        setTimeout(resetGame, 1500)
    } else {
        roundResult = `Sorry you lose...`
        gameResult.textContent = roundResult
        setTimeout(resetGame, 1500)
    }
}


let userImg = document.querySelector(".userimg")
    
function userImgSelector() {
    if (humanChoice === "rock") {
    userImg.src = 'media/rock.png'
    userImg.alt = 'rock'
    } else if (humanChoice === "paper") {
    userImg.src = 'media/paper.png'
    userImg.alt = 'paper'
    } else if (humanChoice === "scissors") {
    userImg.src = 'media/scissors.png'
    userImg.alt = 'scissors'
    }
}

let computerImg = document.querySelector(".computerimg")
let gameResult = document.querySelector(".game-result")

function computerImgSelector() {
    if (computerChoice === "rock") {
    computerImg.src = 'media/rock.png'
    computerImg.alt = 'rock'
    } else if (computerChoice === "paper") {
    computerImg.src = 'media/paper.png'
    computerImg.alt = 'paper'
    } else if (computerChoice === "scissors") {
    computerImg.src = 'media/scissors.png'
    computerImg.alt = 'scissors'
    }
}

function resetGame() {
  roundCounter = 1
  humanScore = 0
  computerScore = 0
  humanChoice = null
  computerChoice = null
  roundResult = null
  userImg.src = ''
  userImg.alt = ''
  computerImg.src = ''
  computerImg.alt = ''
  gameResult.textContent = ''
  updateScoreboard()
}







