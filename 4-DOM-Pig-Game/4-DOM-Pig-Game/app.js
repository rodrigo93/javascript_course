/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScores, activePlayer, gamePlaying;

newGame();

/**
 * Event Listeners
 */

document.querySelector('.btn-roll').addEventListener('click', function(){
	if (gamePlaying) {
		var diceNumber, diceDOM;

		diceNumber = Math.floor(Math.random() * 6) + 1;
		
		diceDOM = document.querySelector('.dice');
		diceDOM.style.display = 'block';
		diceDOM.src = 'dice-' + diceNumber + '.png';

		if (diceNumber !== 1) {
			roundScore += diceNumber;
			document.getElementById('current-' + activePlayer).textContent = roundScore;
		} else {
			nextPlayer();
		}
	}
});

document.querySelector('.btn-hold').addEventListener('click', function(){
	if (gamePlaying) {	
		scores[activePlayer] += roundScore;
		document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

		if (scores[activePlayer] >= 30) {
			document.getElementById('name-'+activePlayer).textContent = "WINNER!!"
			hideDice();
			document.querySelector('.player-'+activePlayer + '-panel').classList.add('winner'); 
			document.querySelector('.player-'+activePlayer + '-panel').classList.remove('active');
			gamePlaying = false;
		} else {
			nextPlayer();
		}
	}
});

document.querySelector('.btn-new').addEventListener('click', newGame);

/**
 * Functions
 */

function nextPlayer() {
		roundScore = 0;
		document.getElementById('current-' + activePlayer).textContent = 0;		
		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');
		hideDice();
		activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
}

function hideDice() {
	document.querySelector('.dice').style.display = 'none';	
}

function newGame() {
	scores = [0,0];
	roundScore = 0;
	activePlayer = 0;
	gamePlaying = true;
	hideDice();

	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	document.getElementById('name-0').textContent = "Player 1";
	document.getElementById('name-1').textContent = "Player 2";
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	
	document.querySelector('.player-0-panel').classList.add('winner');
}