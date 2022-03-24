'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉 Correct Number!';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  document.querySelector('.number').textContent = secretNumber;

  const guess = Number(document.querySelector('.guess').value);
  if (score > 1) {
    //When there's no number in input field
    if (!guess) {
      displayMessage('⛔ No number');

      //When player wins
    } else if (guess === secretNumber) {
      displayMessage('🎉 Correct Number!');
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';

      if (highscore < score) {
        highscore = score;
        document.querySelector('.highscore').textContent = score;
      }

      //When number is too high
    } else if (guess !== secretNumber) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low');
      score--;
      document.querySelector('.score').textContent = score;

      //When game is lost
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
    console.log(guess, score);
  }

  document.querySelector('.again').addEventListener('click', function () {
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = 20;
    score = 20;
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = '?';
  });
});
