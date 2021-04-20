/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
/* eslint linebreak-style: ["error", "windows"] */

function FormValid(formChek, name, email) {
  const form = document.forms[formChek];
  const inputEmail = document.forms[formChek][email];
  // const inputTell = document.forms[formChek][tell];
  const inputName = document.forms[formChek][name];
  // validate
  const regExpDic = {
    name: /^[A-Za-zА-Яа-я]{3,16}$/,
    email: /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\}?)$/,
    tell: /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/,

  };
  function validate(el) {
    const regExpName = el.dataset.required;
    if (!regExpDic[regExpName]) return true;
    return regExpDic[regExpName].test(el.value);
  }
  const inputs = [inputEmail, inputName];

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    onSubmit();
    form.reset();
  });

  function onSubmit() {
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
      thanks.style.display = 'block';
      detail.style.display = 'none';
      consultation.style.display = 'none';
      сalculation.style.display = 'none';
      overlay.style.display = 'block';
      setTimeout(() => {
        overlay.style.display = 'none';
        thanks.style.display = 'none';
      }, 4000);
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
btnContact.addEventListener('click', FormValid('contact__form', 'name', 'email'));
