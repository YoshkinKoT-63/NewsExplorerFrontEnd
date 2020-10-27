import Popup from './Popup.js';

export default class PopupSignUp extends Popup {
  constructor(popup, openButton) {
    super(popup);
    this.openButton = openButton;
    this.signInButtom = document.querySelector('.popup__form-button-sign-in');
  }

  setEventListeners() {
    super.setEventListeners();
    this.openButton.addEventListener('click', () => this.open());//открытие по заданной кнопке
    this.signInButtom.addEventListener('click', () => this.close());//закрыть попап перед открытием попапа логина
  };
}