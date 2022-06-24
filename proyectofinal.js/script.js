'use strict';

///////////////////////////////////////
// Iniciando sesion


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

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


////Creando cookie message
const header = document.querySelector('.header')

const message = document.createElement('div');
message.classList.add('cookie-message');

message.innerHTML = 'Esta pagina usa cookies! <button class="btn btn--close-cookie">Got it!</button>';
header.prepend(message);

message.style.backgroundColor = '#37383d'
message.style.width = '120%'
//Borrando el cookie message

document.querySelector('.btn--close-cookie').addEventListener('click', function(){
    message.remove();
})


/// alerta para titulo RAGNAROKTT





//// alerta button donate

const donateAlert = document.querySelector('.btn--donate')
donateAlert.addEventListener('click', function(){
  swal("Te enviamos un e-mail para proceder con la donacion?", {
    dangerMode: true,
    buttons: true,
  })
})
