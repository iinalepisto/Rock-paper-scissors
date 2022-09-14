let playerPoints = 0;
let computerPoints = 0;
let roundWinner = "";

const scoreDisplay = document.querySelector('#score');
const roundDisplay = document.querySelector('#round');

scoreDisplay.textContent = "Score: player " + playerPoints + " computer " + computerPoints;
roundDisplay.textContent = "No winner yet";

const btn1 = document.querySelector('#rock');
const btn2 = document.querySelector('#paper');
const btn3 = document.querySelector('#scissors');
const btn4 = document.querySelector('#restart')

function computerSelect(){
    let number = Math.floor(Math.random() * 3 +1);
    console.log(number);
    if (number == 1){
        console.log("computer rock");
        return "rock";
    }
    else if(number == 2){
        console.log("computer paper");
        return "paper";
    }
    else if(number == 3){
        console.log("computer scissors");
        return "scissors";
    }
}

function playRound(user,computer){
    if(user == computer){
        roundWinner = "tie";
        scoreDisplay.textContent = "Score: player " + playerPoints + " computer " + computerPoints;
        roundDisplay.textContent = "It's a tie"
    }
    else if(
        (user == "rock" && computer == "paper")||
        (user == "paper" && computer == "scissors")||
        (user == "scissors" && computer == "rock")
        ){
        computerPoints += 1;
        roundWinner = "computer";
        scoreDisplay.textContent = "Score: player " + playerPoints + " computer " + computerPoints;
        winner(roundWinner);
    }
    else if(
        (user == "rock" && computer == "scissors")||
        (user == "paper" && computer == "rock")||
        (user == "scissors" && computer == "paper")
        ){
        playerPoints += 1;
        roundWinner = "player"
        scoreDisplay.textContent = "Score: player " + playerPoints + " computer " + computerPoints;
        winner(roundWinner);
    }
}

function winner(winner){
    if(playerPoints == 5 || computerPoints == 5){
        btn1.style.visibility = "hidden";
        btn2.style.visibility = "hidden";
        btn3.style.visibility = "hidden";
        if(playerPoints == 5){
            roundDisplay.textContent = "Great job! You are the winner!";
        }
        else{
            roundDisplay.textContent = "Computer wins. Better luck next time!";
        }
    }
    else{
        roundDisplay.textContent = "Winner of this round is " + winner
    }
}
function refeshPage(){
    window.location.reload();
}

btn1.addEventListener('click', () => {
    playRound("rock", computerSelect());
} );
btn2.addEventListener('click', () => {
    playRound("paper", computerSelect());
} );
btn3.addEventListener('click', () => {
    playRound("scissors", computerSelect());
} );
btn4.addEventListener('click', () =>{
    refeshPage();
});