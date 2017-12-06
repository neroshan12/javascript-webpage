/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, dice; // declare variables

scores = [0, 0];
roundScore = 0;
activePlayer = 1;

dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);

document.querySelector('#current-' + activePlayer).textContent = dice; // updates the html element
//to change the contnet of a selection  can use textContent (only changes plain text not html).
// to put html in the element you need to use innerHTML
// setter

// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
// // if writing html code her eit needs to be a string

var x = document.querySelector('#score-0').textContent; // will read value of elecement id and stor ein variable x
console.log(x);
//getter

document.querySelector('.dice').style.display = 'none'; // select css class
// taking display property and setting it to none
// e.g.
// . {
// property: value;
//
// }
