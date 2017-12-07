/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer; //, dice; // declare variables

scores = [0, 0];
roundScore = 0;
activePlayer = 1;

// document.querySelector('#current-' + activePlayer).textContent = dice; // updates the html element
//to change the contnet of a selection  can use textContent (only changes plain text not html).
// to put html in the element you need to use innerHTML
// setter

// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
// // if writing html code her eit needs to be a string

// var x = document.querySelector('#score-0').textContent; // will read value of elecement id and store in variable x
// console.log(x);
//getter

document.querySelector('.dice').style.display = 'none'; // select css class
// taking display property and setting it to none
// e.g.
// . {
// property: value;
//
// }

// function btn() {
//   // Do something here
// }
//
// btn();
//
// document.querySelector('.btn-roll').addEventListener('click', btn); // dont but () with btn because we dont want it call it, we want event listener(the add event listener function) to call it
// // btn is called the call back function because it is not called by us but by another function

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click', function() {
  // do something
  // 1. Random number
  var dice = Math.floor(Math.random() * 6) + 1; // moved into the event listener because we don't want any other fucntion to have access to it. It is only used in this click event
  // remove dice
  // this function now has access to global scope and var dice.
  // But outside scope does not have access to var dice
  // 2. Display result
  var diceDOM = document.querySelector('.dice');
  diceDOM.style.display = 'block';
  diceDOM.src = 'dice-' + dice + '.png';
  // .src changes the src in index
  // set display style to none on line 30 thus need to bring style back to block
  // 3. Update round score if rolled number was not 1
});

//anonymous function - unamed fucntion thus cannot be used outside that context
