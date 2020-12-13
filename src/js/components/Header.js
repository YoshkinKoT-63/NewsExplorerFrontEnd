import BaseComponent from './BaseComponent';

export default class Header extends BaseComponent {
  constructor(HEADER_CONTAINER, popupSignIn, authMenu, unAuthMenu) {
    super();
    this._container = HEADER_CONTAINER;
    this.popupSignIn = popupSignIn;
    this.authMenu = authMenu;
    this.unAuthMenu = unAuthMenu;
   }

  // Рендер шапки
  render() {
    if (window.localStorage.getItem("jwt")) {
      this._template = this.authMenu.content.querySelector('.header__nav-container');
      this._element = this._template.cloneNode(true);
      this._buttonLogOut = this._element.querySelector('.header__logout');
      this._buttonLogOut.textContent = window.localStorage.getItem("name");
      this._buttonLogOut.addEventListener('click', () => {
        try {
          window.localStorage.removeItem("jwt");
          window.localStorage.removeItem("name");
          location.reload();
        } catch (err) {
          console.log(err);
        }
      })
      this._container.appendChild(this._element);
    } else {
      this._template = this.unAuthMenu.content.querySelector('.header__nav-container');
      this._element = this._template.cloneNode(true);
      this._container.appendChild(this._element);
      this.buttonAuth = document.querySelector('.header__auth');
      this.buttonAuth.addEventListener('click', () => this.popupSignIn.open());//открытие по заданной кнопке
    }
    this.header_nav = this._container.querySelector('.header__nav-links');
    this.header_button = this._container.querySelector('.header__button');
    this.header_button.addEventListener('click', () => this.burgerShow())
  }

// бургер меню
  burgerShow() {
    this.header_nav.classList.toggle("header__nav-links_is-opened");
  }

}