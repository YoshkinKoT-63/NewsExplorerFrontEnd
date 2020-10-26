import Popup from './Popup.js';

export default class PopupSignIn extends Popup {
  constructor(popup, openButton) {
    super(popup);
    this.openButton = openButton;
    console.log(popup);
  }

  setEventListeners() {
    super.setEventListeners();
    this.openButton.addEventListener('click', () => this.open());//открытие по заданной кнопке
  };



}