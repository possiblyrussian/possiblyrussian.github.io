'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'Please Enter a Number!';
  }
  //Guess is Right
  else if (guess === secretNumber) {
    document.querySelector(
      '.message'
    ).textContent = `You are CORRECT!! your score is ${score}`;
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //Guess is High
  else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'You Guess is too HIGH';
    score--;
    document.querySelector('.score').textContent = score;

    //Guess is Low
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'You Guess is too LOW';
    score--;
    document.querySelector('.score').textContent = score;
  }

  if (score <= 0) {
    document.querySelector('.message').textContent =
      'Man You really suck at this! You Lose!!';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Please Enter a Number!';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = 0;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = 0;
});
