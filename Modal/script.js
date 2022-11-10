'use strict';

// MODAL WINDOW

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay'); // затеменние/размытие заднего фона
const bntCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal'); // querySelectorAll селектор выбора множества элементов/классов

const openModal = function () {
  modal.classList.remove('hidden'); // работаем с classList для управления классом 'hidden', в данном случае не ставим точку в 'hidden' так как мы не работаем с селектором
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal); // 'click' это событие при исполнении которого выполняется/обрабатывается функция

bntCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  // 'keydown' событие при исполнении которого выполняется/обрабатывается функция при нажатии на клавишу

  console.log(e.key); // 'е' в данном случае это атрибут функции, .key это свойство нажимаемой клавиши
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {  
    closeModal();
  }
});
