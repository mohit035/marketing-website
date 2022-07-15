'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// creating selecting and inserting element
const header = document.querySelector('.header');

const message = document.createElement('div');

message.classList.add('cookie-message');

message.innerHTML =
  "We use cookied for immporved functionality and analytics <button class= 'btn btn--close-cookie'>Got it</button>";

// header.prepend(message); this will be the first child
header.append(message);

// header.prepend(message.cloneNode(true));

// header.before(message)
// header.after(message)this are the siblings
