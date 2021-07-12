/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-useless-escape */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
/* eslint linebreak-style: ["error", "windows"] */

// (function forms() {
const thanks = document.querySelector('#thanks');
const overlay = document.querySelector('.overlay');

function FormValid(formChek, name, email, massage) {
  const form = document.forms[formChek];
  const inputEmail = document.forms[formChek][email];
  const inputMassage = document.forms[formChek][massage];
  const inputName = document.forms[formChek][name];

  // validate
  const regExpDic = {
    name: /^[A-Za-zА-Яа-я]{3,16}$/,
    email: /\b[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}\b/,
    massage: /^(?:(?![\s\n]+$)[\s\S])+$/,
  };
  function validate(el) {
    const regExpName = el.dataset.required;
    console.log(regExpName);
    if (!regExpDic[regExpName]) return true;
    return regExpDic[regExpName].test(el.value);
  }
  const inputs = [inputEmail, inputName, inputMassage];

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    onSubmit();
    console.log('1');
    form.reset();
  });

  function onSubmit() {
    console.log('2');
    function validateform(el) {
      const isValidInput = validate(el);
      if (!isValidInput) {
        removeInputError(el);
        showInputError(el);
      }
      return isValidInput;
    }
    const isValidForm = inputs.every(validateform);
    inputs.forEach(validateform);
    inputs.forEach((el) => el.addEventListener('focus', () => removeInputError(el)));

    if (isValidForm) {
      alert("Дякуємо за вашу заявку, наш консультант з вами зв'яжеться");
    }
  }
  // inputErrorTemolate
  function inputErrorTemolate(msg) {
    return `<span class="invalid">${msg}</span>`;
  }
  // showInputError add input error
  function showInputError(el) {
    const parent = el.parentElement;
    const msg = el.dataset.invalidMessage || 'Invalid input';
    const template = inputErrorTemolate(msg);
    el.classList.add('is-valid');
    parent.insertAdjacentHTML('beforeend', template);
  }
  // removeInputError remove input error
  function removeInputError(el) {
    const parent = el.parentElement;
    const err = parent.querySelector('.invalid');
    if (!err) return;
    el.classList.remove('is-valid'),
    parent.removeChild(err);
  }
}
const btnContact = document.querySelector('.btn__contact');
btnContact.addEventListener('click', FormValid('contact__form', 'name', 'email', 'massage'));


