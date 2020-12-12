import Popup from './Popup.js';

export default class PopupSignUp extends Popup {
  constructor(popup, openButton, popupSucces, mainApi, validation) {
    super(popup);
    this.popup = popup;
    this.popupForm = document.forms.sign_up;
    this.openButton = openButton;
    this.submit = this.submit.bind(this);
    this.signInButtom = document.querySelector('.popup__form-button-sign-in');
    this.popupSucces = popupSucces;
    this.mainApi = mainApi;
    this.validation = validation;
  }

//отправка данных для регистрации

  submit(evt) {
    evt.preventDefault();
    const formValue = {
      email: this.popupForm.elements.signup_email.value,
      password: this.popupForm.elements.signup_password.value,
      name: this.popupForm.elements.name.value,
    };
    this.mainApi.signup(formValue.email, formValue.password, formValue.name)
    .then(() => {
      console.log('регистрация прошла');
      this.close();
      this.popupSucces.open();
    })
    .catch(err => {
      console.log(err);
      this.validation.setServerError(err);
    });

  }

  setEventListeners() {
    super.setEventListeners();
    this.openButton.addEventListener('click', () => this.open());//открытие по заданной кнопке
    this.signInButtom.addEventListener('click', () => this.close());//закрыть попап перед открытием попапа логина
    this.popupForm.addEventListener('submit', this.submit);
  };
}