import BaseComponent from './BaseComponent';

export default class Popup extends BaseComponent {
  constructor(popup) {
    super();
    this.element = popup; //форма попап
    this.closePopupButton = this.element.querySelector('.popup__close');//найти кнопку закрытия окна
    this.closePopupByEscapeButton = this.closePopupByEscapeButton.bind(this);
  };


// Очищает форму ввода попапа
clearPopup() {
  this.form = this.element.querySelector('.popup__form');
  if (this.form) {
    this.form.reset();
  }
}

//открытие окна
  open() {
    this.clearPopup();
    this.element.classList.add('popup_is-opened');
  };

//закрытие окна
  close() {
    this.element.classList.remove('popup_is-opened');
  };

//закрытие окна при нажатии Esc
  closePopupByEscapeButton(event) {
    if (event.code === 'Escape') {
      this.close();
    }
  };

  setEventListeners() {
    this._setHandlers([
      [this.closePopupButton, 'click', () => {this.close()}],
      [window, 'keydown', this.closePopupByEscapeButton]
    ]);
  }
}