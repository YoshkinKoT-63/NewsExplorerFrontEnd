import Popup from './Popup.js';

export default class PopupSignIn extends Popup {
  constructor(popup, openButton, buttonPopupAuth, buttonPopupSignInAfterSucces, mainApi) {
    super(popup);
    this.openButton = openButton;
    this.buttonPopupAuth = buttonPopupAuth;
    this.buttonPopupSignInAfterSucces = buttonPopupSignInAfterSucces;
    this.signUpButtom = document.querySelector('.popup__form-button-sign-up');
    this.popupForm = document.forms.sign_in;
    this.submit = this.submit.bind(this);
    this.mainApi = mainApi;
  }

  submit(evt) {
    evt.preventDefault();
    const formValue = {
      email: this.popupForm.elements.signin_email.value,
      password: this.popupForm.elements.signin_password.value,
    };
    this.mainApi.signin(formValue.email, formValue.password)
    .then(() => {
      console.log('логин прошёл');
      this.close();
    })
    .catch(err => {
      alert(err);
    });
  }

  setEventListeners() {
    super.setEventListeners();
    this.openButton.addEventListener('click', () => this.clearPopup());//сброс формы по заданной кнопке
    this.openButton.addEventListener('click', () => this.open());//открытие по заданной кнопке
    this.buttonPopupAuth.addEventListener('click', () => this.open());//открытие из попапа регистрации
    this.buttonPopupSignInAfterSucces.addEventListener('click', () => this.open()); //открытие из попапа успешной регистрации
    this.signUpButtom.addEventListener('click', () => this.close());//закрыть попап перед открытием попапа регистрации
    this.popupForm.addEventListener('submit', this.submit);
  };
}