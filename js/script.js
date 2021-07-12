/* eslint-disable no-unused-expressions */
/* eslint-disable consistent-return */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-inner-declarations */
/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */

/* eslint linebreak-style: ["error", "windows"] */

// import burger from './modules/burger';
import * as modal from './modules/modal';
import * as slider from './modules/slider';
import * as forms from './modules/forms';
import * as blog from './modules/blog';
import * as worksImg from './modules/worksImg';
import * as modalServise from './modules/modalServise';
import * as price from './modules/price';

window.addEventListener('DOMContentLoded', () => {
  // burger();
  modal();
  slider();
  forms();
  blog();
  worksImg();
  modalServise();
  price();
});

// filter box

// function filterItem(event) {
//   const filterClass = event.target.getAttribute('data-type');
//   btnWorks = document.querySelectorAll('.btn__works-1');
//   for (let i = 0; i < btnWorks.length; i += 1) {
//     btnWorks[i].classList.remove('btn-active');
//   }
//   event.target.classList.add('btn-active');
//   btn.textContent = 'VIEW ALL';
//   filterBoxer(filterClass);
//   return filterClass;
// }

// function filterBoxer(filterClass) {
//   filterBox = document.querySelectorAll('.works__card');
//   index = 0;
//   maxItemCard = 3;
//   filterBox.forEach((element) => {
//     element.style.display = 'none';
//     element.classList.remove('hide');
//     if (!element.classList.contains(filterClass) && filterClass !== 'ALL') {
//       element.classList.add('hide');
//     }
//     if (element.classList.contains(filterClass) && (index < maxItemCard)) {
//       element.style.display = 'block';
//       isOpen = false;
//       index++;
//     } else if (filterClass === 'ALL' && (index < 6)) {
//       element.style.display = 'block';
//       index++;
//     }
//     if (!filterClass && (index < 6)) {
//       element.style.display = 'block';
//       index++;
//     } else if (!filterClass) {
//       viewMore(filterClass = 'ALL');
//     }
//   });
// }

// function viewMoreCard(filterClass) {
//   filterBox = document.querySelectorAll('.works__card');
//   filterBox.forEach((element) => {
//     if (element.classList.contains(filterClass)) {
//       element.style.display = 'block';
//     } else if (filterClass === 'ALL') {
//       element.style.display = 'block';
//     } else {
//       element.style.display = 'none';
//     }
//   });
// }

// function viewMore(filterClass) {
//   let isOpen = false;
//   btn = document.querySelector('.btn__works-bottom');
//   btn.addEventListener('click', () => {
//     console.log(isOpen);
//     if (!isOpen) {
//       viewMoreCard(filterClass);
//       isOpen = true;
//       btn.textContent = 'VIEW LESS';
//     } else {
//       filterBoxer(filterClass);
//       isOpen = false;
//       btn.textContent = 'VIEW ALL';
//     }
//   });
// }

// // eslint-disable-next-line consistent-return
// document.querySelector('.works__buttons').addEventListener('click', (event) => {
//   if (event.target.tagName !== 'BUTTON') return false;
//   filterClass = filterItem(event);
//   viewMore(filterClass);
// });
// filterBoxer();


