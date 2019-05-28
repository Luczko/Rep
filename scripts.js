//
// Dice Game
// by Luczko
//

//Dice variables
let dice = ['Six', 'Five', 'Four', 'Three', 'Two', 'One'];


//DOM variables
let textArea = document.getElementById('text-area');
let newGameButton = document.getElementById('new-game-button');
let rollOneButton = document.getElementById('roll-one-button');
let rollTwoButton = document.getElementById('roll-two-button');

//Game variables
let gameStarted = false,
    gameOver = false,

score = getScore();
scoreTwo = getScoreTwo();
score2 = getScore2();
scoreTwo2 = getScoreTwo2();
numScore = getNumericScore();
numScore2 = getNumericScore2();

function getScore() {
  return dice[Math.floor(Math.random()*dice.length)];
 }

 function getScoreTwo () {
   return dice[Math.floor(Math.random()*dice.length)];
 }

 function getScore2() {
  return dice[Math.floor(Math.random()*dice.length)];
 }

 function getScoreTwo2 () {
   return dice[Math.floor(Math.random()*dice.length)];
 }

function getNumericScore(){
  return getDiceNum(score) + getDiceNumTwo(scoreTwo);
    }

function getNumericScore2(){
  return getDiceNum2(score2) + getDiceNumTwo2(scoreTwo2);
        }

function getDiceNum(){
      switch(score){
        case 'One':
          return 1;
        case 'Two':
          return 2;
        case 'Three':
          return 3;
        case 'Four':
          return 4;
        case 'Five':
          return 5;
        case 'Six':
          return 6;
      }
    }

function getDiceNumTwo(){
      switch(scoreTwo){
        case 'One':
          return 1;
        case 'Two':
          return 2;
        case 'Three':
          return 3;
        case 'Four':
          return 4;
        case 'Five':
          return 5;
        case 'Six':
          return 6;
      }
    }

    function getDiceNum2(){
      switch(score2){
        case 'One':
          return 1;
        case 'Two':
          return 2;
        case 'Three':
          return 3;
        case 'Four':
          return 4;
        case 'Five':
          return 5;
        case 'Six':
          return 6;
      }
    }

function getDiceNumTwo2(){
      switch(scoreTwo2){
        case 'One':
          return 1;
        case 'Two':
          return 2;
        case 'Three':
          return 3;
        case 'Four':
          return 4;
        case 'Five':
          return 5;
        case 'Six':
          return 6;
      }
    }

rollOneButton.style.display = 'none';
rollTwoButton.style.display = 'none';

newGameButton.addEventListener('click', function() {
  gameStarted = true;
  gameOver = false;
  textArea.innerText = ' '
  newGameButton.style.display = 'none';
  rollOneButton.style.display = 'inline';
})


rollOneButton.addEventListener('click', function() {
score = getScore();
scoreTwo = getScoreTwo();
numScore = getNumericScore();
textArea.innerText = (
  'Player One rolled:\n' + score + '\n' + scoreTwo + '\n'
  + 'Player\'s One score:\n' + numScore);
  rollOneButton.style.display = 'none';
  rollTwoButton.style.display = 'inline'; 
})

rollTwoButton.addEventListener('click', function() {
score2 = getScore2();
scoreTwo2 = getScoreTwo2();
numScore2 = getNumericScore2();
  textArea.innerText = (
    'Player One rolled:\n' + score + '\n' + scoreTwo + '\n'
  + 'Players\'s One score:\n' + numScore + '\n' + '\n' +
    'Player Two rolled:\n' + score2 + '\n' + scoreTwo2 + '\n'
  + 'Player\'s Two score:\n' + numScore2 );
    gameOver = true;
    showStatus();
    rollOneButton.style.display = 'none';
      })

function showStatus() {
if(gameOver){
      if(numScore === numScore2){
        textArea.innerText += '\n\n' + "DRAW!";
      }
      else if (numScore < numScore2) {
        textArea.innerText += '\n\n' + "PLAYER TWO WINS!";
      }
      else {
        textArea.innerText += '\n\n' + "PLAYER ONE WINS!";

      }

      newGameButton.style.display = 'inline';
      rollOneButton.style.display = 'none';
      rollTwoButton.style.display = 'none';
    }
  }