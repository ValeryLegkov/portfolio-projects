'use strict';

// PIG GAME

//// Selecting elements

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

// Total score
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
// Current score
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, plaing; // в самом конце объявляем переменые что бы далее использовать их в функции

// Starting conditions
const init = function () {
  //Данную функци создали в самом конце для создания btnNew

  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  plaing = true; // данная переменная для того чтобы остановить игру в случае выиграша

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  // объявляем для btnNew (NewGame)
  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init(); // просто вызываем функцию для того что бы из нее вытягивались данные и последующий, написанный ранее, код сработал

// Swith player
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0; // обнуляет счет предыдущего игрока
  currentScore = 0; // обнуляем общий счет что бы он не сохранился для следующих игр
  activePlayer = activePlayer === 0 ? 1 : 0; // меняем игрока который переназначается в `current--${activePlayer}`
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
  // toggle() позволяет отобразить или скрыть выбранные элементы. Если элемент изначально отображается, то он будет скрыт, если элемент скрыт, то он будет отображен. Значение CSS свойства display элемента сохраняются и восстанавливаются при необходимости.
};

// Rolling dice func..
btnRoll.addEventListener('click', function () {
  if (plaing) {
    // 1 - Generate a random
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2 - Display dice
    diceEl.classList.remove('hidden'); // добавляем кубик на поле
    diceEl.src = `dice-${dice}.png`; // задаем ссылку на кубики относительно рандомного числа используя свойство .src

    // 3 - Chek for rolled 1: if true, switch to next player
    if (dice !== 1) {
      //  Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore; // относительно игрока записывается текущий счет  // `current--${activePlayer}` селектор тянется в HTML по id, либо current--0 либо current--1
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (plaing) {
    // 1 - Add current score to active player's score
    scores[activePlayer] += currentScore;
    // score[1] = score[1] + currentScore

    // Add & store current score in Total score from active player
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2 - Check if player's score is >=50
    if (scores[activePlayer] >= 50) {
      // Finish the game
      plaing = false;
      diceEl.classList.add('hidden'); // скрываем кубик в случае победы
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner'); // тянет из HTML графику победителя
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active'); // убираем активацию следующего игрока после победы текущего
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init); // используем функцию созданную в последнюю очередь
