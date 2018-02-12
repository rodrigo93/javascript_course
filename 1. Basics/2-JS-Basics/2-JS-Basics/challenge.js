///////////////////////////////////////////// 
// Coding Challenge 1
///////////////////////////////////////////// 
/*
	John and a friend invented a simple game where the player with the highest value of his height
	(in centimeters) plus five times his age wins (what a silly game)

	1. Create variables for the heights and ages of two friends and assign them some values
	2. Calculate their scores
	3. Decide who wins and print the winner to the console. Include the score in the string that you
	output to the console. Don't forget that there can be a draw (both players with the same score).

	4. EXTRA: Add a third player and now decide who wins. Hint: you will need the && operator to take
	the dicision. If you can't solve this one, just watch the solution, it's no problem :)
 */

var playerOneHeight, playerOneAge, playerOneScore;
var playerTwoHeight, playerTwoAge, playerTwoScore;

playerOneHeight = prompt('What is the player one height?');
playerOneAge = prompt('What is the player one age?');

playerTwoHeight = prompt('What is the player two height?');
playerTwoAge = prompt('What is the player two age?');

playerOneScore = playerOneHeight + playerOneAge * 5;
playerTwoScore = playerTwoHeight + playerTwoAge * 5;

if (playerOneScore > playerTwoScore) {
	alert("Player one is the winner! ")
} else if (playerTwoScore > playerOneScore) {
	alert("Player two is the winner!")
} else {
	alert("It is a draw!")
}