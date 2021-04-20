/* eslint-disable no-undef */
/* eslint linebreak-style: ["error", "windows"] */
// Modal
const btnCalls = document.querySelectorAll('.btn__call');
const btnPromo = document.querySelector('.btnPromo');
const consultation = document.querySelector('#consultation');
const thanks = document.querySelector('#thanks');
const overlay = document.querySelector('.overlay');
const modalCloses = document.querySelectorAll('.modal__close');
const detail = document.querySelector('#detail');
const сalculation = document.querySelector('#сalculation');

// const modal__form = document.querySelector('.modal__form').addEventListener(
//     // 'click', stopDefAction, false
// );;

// function stopDefAction(evt) {
//     evt.preventDefault();
// }

if (modalCloses.length > 0) {
  modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
      overlay.style.display = 'none';
      consultation.style.display = 'none';
      thanks.style.display = 'none';
      detail.style.display = 'none';
      сalculation.style.display = 'none';
    });
  });
}

if (btnCalls.length > 0) {
  btnCalls.forEach((btnCall) => {
    btnCall.addEventListener('click', () => {
      сalculation.style.display = 'none';
      thanks.style.display = 'none';
      detail.style.display = 'none';
      consultation.style.display = 'block';
      overlay.style.display = 'block';
    });
  });
}

btnPromo.addEventListener('click', () => {
  thanks.style.display = 'none';
  detail.style.display = 'none';
  consultation.style.display = 'none';
  сalculation.style.display = 'block';
  overlay.style.display = 'block';
});

overlay.addEventListener('click', (e) => {
  if (e.target.classList.contains('overlay')) {
    thanks.style.display = 'none';
    detail.style.display = 'none';
    consultation.style.display = 'none';
    сalculation.style.display = 'none';
    overlay.style.display = 'none';
  }
});
