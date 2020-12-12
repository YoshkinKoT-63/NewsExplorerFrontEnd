import BaseComponent from './BaseComponent';

export default class Header extends BaseComponent {
  constructor(HEADER_CONTAINER, popupSignIn, authMenu, unAuthMenu) {
    super();
    this._container = HEADER_CONTAINER;
    this.popupSignIn = popupSignIn;
    this.authMenu = authMenu;
    this.unAuthMenu = unAuthMenu;
    console.log(this.authMenu);

   }

  // Рендер шапки
  render() {
    if (window.localStorage.getItem("jwt")) {
      console.log(window.localStorage.getItem("jwt"));
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
  }


}