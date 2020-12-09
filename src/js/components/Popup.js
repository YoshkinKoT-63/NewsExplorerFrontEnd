import BaseComponent from './BaseComponent';

export default class Popup extends BaseComponent {
  constructor(popup) {
    super();
    this.element = popup; //форма попап
    this.closePopupButton = this.element.querySelector('.popup__close');//найти кнопку закрытия окна
    this.closePopupByEscapeButton = this.closePopupByEscapeButton.bind(this);
  };

//открытие окна
  open() {

    this.element.classList.add('popup_is-opened');
  };

//закрытие окна
  close() {
    console.log('Сработало закрытие попапа');
    this.element.classList.remove('popup_is-opened');
  };

//закрытие окна при нажатии Esc
  closePopupByEscapeButton(event) {
    if (event.code === 'Escape') {
      this.close();
    }
  };

// Очищает форму ввода попапа
clearPopup() {
  console.log('сработал сброс формы')
  this.element.querySelector('.popup__form').reset();
}

  setEventListeners() {
    this._setHandlers([
      [this.closePopupButton, 'click', () => {this.close()}],
      [window, 'keydown', this.closePopupByEscapeButton]
    ]);
  }

}