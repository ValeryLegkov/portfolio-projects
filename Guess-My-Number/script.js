'use strict';

// Guess my number

let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highscore = 0;

// Improving - создаем отдельную функцию для вывода сообщений в обработчике
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  // на кнопу check, класса '.check' добавляем обработчик и указываем 'click' - свойсво нажатия

  const guess = Number(document.querySelector('.guess').value);

  // When is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔️ No number!';
    displayMessage('⛔️ No number!');

    // When wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');

    document.querySelector('.number').textContent = secretNumber; // скрываем угадываемое число ? (оно будет скрыто пока не будет достигнуто условие выиграша)

    // стилизация победы
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      // записываем рекордное по условию значение в highscore
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // IMPROVE Code
    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '📈 Too high!' : '📉 Too low!'; // с помощью TernaryOperato выводим сообщение
      score--;
      document.querySelector('.score').textContent = score; // перезаписываем новое значение
    } else {
      //document.querySelector('.message').textContent = 'You lost the  game! 💩';
      displayMessage('You lost the  game! 💩');

      document.querySelector('.score').textContent = 0; // в случае проигрыша обнуляем значение
    }
  }

  //     // When guess is too high
  //   } else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📈 Too high!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost the  game! 💩';
  //       document.querySelector('.score').textContent = 0;
  //     }

  //     // When guess is too low
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📉 Too low!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost the  game! 💩';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

// Coding Challenge #1
/*
Implement a game rest functionality, so that the player can make a new guess!

Your tasks:
1. Select the element with the 'again' class and attach a click event handler 
2. In the handler function, restore initial values of the 'score' and 'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input fields
4. Also restore the original backgroundcolor (#222) and number width (15rem)
*/

//Task 1
document.querySelector('.again').addEventListener('click', function () {
  // Task 2
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  // Task 3

  //Improve
  //   document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');

  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  // Task 4
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
