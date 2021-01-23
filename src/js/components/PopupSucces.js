import Popup from './Popup.js';

export default class PopupSucces extends Popup {
  constructor(popup) {
    super(popup);
    this.popup = popup;
    this.signInButtom = popup.querySelector('.popup__button_succes');
  }

  setEventListeners() {
    super.setEventListeners();
    this._setHandlers([
      [this.signInButtom, 'click', () => this.close()],//закрыть попап перед открытием попапа логина
    ]);
  };
}
