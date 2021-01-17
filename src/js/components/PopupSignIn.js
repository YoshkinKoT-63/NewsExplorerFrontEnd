import Popup from './Popup.js';

export default class PopupSignIn extends Popup {
  constructor(popup, buttonPopupAuth, buttonPopupSignInAfterSucces, mainApi, validation) {
    super(popup);
    this.buttonPopupAuth = buttonPopupAuth;
    this.buttonPopupSignInAfterSucces = buttonPopupSignInAfterSucces;
    this.signUpButtom = document.querySelector('.popup__form-button-sign-up');
    this.popupForm = document.forms.sign_in;
    this.submit = this.submit.bind(this);
    this.mainApi = mainApi;
    this.validation = validation;
  }

  submit(evt) {
    evt.preventDefault();
    const formValue = {
      email: this.popupForm.elements.signin_email.value,
      password: this.popupForm.elements.signin_password.value,
    };
    this.mainApi.signin(formValue.email, formValue.password)
    .then((logInfo) => {
      window.localStorage.setItem("jwt", logInfo.token);
        this.mainApi.getUserData()
        .then((userData) => {
          window.localStorage.setItem("name", userData.name);
          location.reload();
        })
        .catch(err => {
          console.log(err);
        });
        this.close();

    })
    .catch(err => {
      console.log(err);
      this.validation.setServerError(err);
    });
  }

  setEventListeners() {
    super.setEventListeners();
    this.buttonPopupAuth.addEventListener('click', () => this.open());//открытие из попапа регистрации
    this.buttonPopupSignInAfterSucces.addEventListener('click', () => this.open()); //открытие из попапа успешной регистрации
    this.signUpButtom.addEventListener('click', () => this.close());//закрыть попап перед открытием попапа регистрации
    this.popupForm.addEventListener('submit', this.submit);
    if(!window.localStorage.getItem("jwt")){
    this.buttonAuth = document.querySelector('.header__auth');
    this.buttonAuth.addEventListener('click', () => this.open());//открытие по кнопке из шапки
    }
  };
}