let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;

    switch (computerChoice) {
        case 1: computerChoice = 'rock';
        break;
        case 2: computerChoice = 'paper';
        break;
        case 3: computerChoice = 'scissors';
        break;
    }

    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt('Please sumbit your choice');
    humanChoice = humanChoice.toLowerCase();

    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`Tie!`);

        return;
    }
    switch (humanChoice) {
        case 'rock': if (computerChoice === 'scissors') { humanScore++; console.log('You win! Rock beats scissors.'); 

        } else {
            computerScore++; console.log('You lose! Paper beats rock.');
        }
        break;

        case 'paper': if (computerChoice === 'rock') { humanScore++; console.log('You win! Paper beats rock.'); } else {
            computerScore++; console.log('You lose! Scissors beats paper.');
        }
        break;

        case 'scissors': if (computerChoice === 'paper') { humanScore++; console.log('You win! Scissors beat paper.'); } else {
            computerScore++; console.log('You lose! Rock beats scissors.');
        }
    }
    let overallScore = `Score\n${humanScore} : ${computerScore}`;
    console.log(overallScore);
}

for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection)
}