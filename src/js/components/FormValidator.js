import BaseComponent from './BaseComponent';

export default class FormValidator extends BaseComponent {
  constructor(errorMessages, form){
    super();
    this.form = form;
    this.errorMessages = errorMessages;
    this.button = this.form.querySelector('.popup__button');
    this.isValidate = this.isValidate.bind(this);
    this.checkInputValidity = this.checkInputValidity.bind(this);
    this.setButtonActive = this.setButtonActive.bind(this);
    this.setButtonInactive = this.setButtonInactive.bind(this);
    this.resetValidationErrors = this.resetValidationErrors.bind(this);
    this.inputHandler = this.inputHandler.bind(this);
    this.setEventListeners = this.setEventListeners.bind(this);
  }

  // валидация поля ввода
  isValidate(input) {
    input.setCustomValidity("");
      if (input.validity.valueMissing) {
        input.setCustomValidity(this.errorMessages.empty);
        return false
      }
      if (input.validity.tooShort && input.type === 'password') {
        input.setCustomValidity(this.errorMessages.wrongPassword);
        return false
      }
      if (input.validity.tooShort || input.validity.tooLong) {
        input.setCustomValidity(this.errorMessages.wrongLength);
        return false
      }
      if (input.validity.patternMismatch) {
        input.setCustomValidity(this.errorMessages.wrongEmail);
        return false
      }
      return input.checkValidity();
  };

  //метод добавления/удаления ошибки с инпута
  checkInputValidity(input) {
    const errorElem = input.parentNode.querySelector(`#${input.id}-error`);
    const valid = this.isValidate(input);
    errorElem.textContent = input.validationMessage;
    return valid;
  };

  //включение кнопки ввода формы
  setButtonActive() {
    this.button.removeAttribute('disabled');
    this.button.classList.add('popup__button_active');
    this.button.classList.remove('popup__button_inactive');
  };

  //отключение кнопки ввода формы
  setButtonInactive() {
    this.button.setAttribute('disabled', 'disabled');
    this.button.classList.remove('popup__button_active');
    this.button.classList.add('popup__button_inactive');
  };

//метод сброса ошибок валидации
  resetValidationErrors() {
    this.errors = this.form.querySelectorAll('.popup__error');
    this.errors.forEach((err) => err.textContent = '');
};

// слушатель события на input
  inputHandler(evt) {
    const [...inputs] = this.form.querySelectorAll('.popup__input');
    this.checkInputValidity(evt.target);
    if (inputs.every(this.isValidate)) {
      this.setButtonActive(this.button);
    } else {
      this.setButtonInactive(this.button);
      }
  };


 // оторбражение ошибки с сервера
  setServerError(serverErr) {
    this.form.querySelector('.popup__server-error').textContent = serverErr;
  }


// добавление слушателей
  setEventListeners() {
    this.form.addEventListener('input', this.inputHandler, true);
  };
}