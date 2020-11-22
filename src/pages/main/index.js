import "./index.css";

//импорт констант

import { SERVER_URL } from '../../js/constants/data.js'
import { buttonAuth } from '../../js/constants/header.js';
import { popupSignInContainer, buttonPopupAuth } from '../../js/constants/popupSignIn.js';
import { popupSignUpContainer, buttonReg } from '../../js/constants/popupSignUp.js';

//импорт компонентов

import PopupSignIn from '../../js/components/PopupSignIn.js';
import PopupSignIUp from '../../js/components/PopupSignUp.js';
import MainApi from '../../js/api/MainApi.js';

// инициализация классов

const popupSignIn = new PopupSignIn(popupSignInContainer, buttonAuth, buttonPopupAuth); //попап авторизации

const popupSignUp = new PopupSignIUp(popupSignUpContainer, buttonReg);


const mainApi = new MainApi({
  baseUrl: SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});



popupSignIn.setEventListeners();
popupSignUp.setEventListeners();