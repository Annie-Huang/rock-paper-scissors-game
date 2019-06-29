const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');
const scoreboard = {
    player: 0,
    computer: 0
};

// Play game
function play(e) {
    restart.style.display = 'inline-block';

    // console.log(e.target.id);
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    // console.log(playerChoice, computerChoice);

    const winner = getWinner(playerChoice, computerChoice);
    console.log(playerChoice, computerChoice, winner);

}

// Get computers choice
function getComputerChoice() {
    const rand = Math.random();
    if(rand < 0.34) {
        return 'rock';
    } else if (rand <= 0.67) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

// Get game winner
function getWinner(p, c) {
    if ( p === c ) {
        return 'draw';
    } else if (p === 'rock') {
        if (c === 'paper') {
            return 'computer';
        } else {
            return 'player';
        }
    } else if (p === 'paper') {
        if (c === 'scissors') {
            return 'computer';
        } else {
            return 'player';
        }
    } else if (p === 'scissors') {
        if (c === 'rock') {
            return 'computer';
        } else {
            return 'player';
        }
    }
}

// Event listeners
choices.forEach(choice => choice.addEventListener('click', play));
