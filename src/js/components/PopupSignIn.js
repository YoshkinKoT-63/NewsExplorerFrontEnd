import Popup from './Popup.js';

export default class PopupSignIn extends Popup {
  constructor(popup, openButton, openButtonSecond ) {
    super(popup);
    this.openButton = openButton;
    this.openButtonSecond = openButtonSecond;
    this.signUpButtom = document.querySelector('.popup__form-button-sign-up');

  }

  setEventListeners() {
    super.setEventListeners();
    this.openButton.addEventListener('click', () => this.open());//открытие по заданной кнопке
    this.openButtonSecond.addEventListener('click', () => this.open());//открытие по заданной кнопке
    this.signUpButtom.addEventListener('click', () => this.close());//закрыть попап перед открытием попапа регистрации
  };
}