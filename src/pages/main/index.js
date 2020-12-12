import "./index.css";

//импорт констант

import { SERVER_URL, ERROR_MESSAGES, SERVER_CONFIG } from '../../js/constants/data.js'
import { HEADER_CONTAINER, NAV_AUTH_TEMPLATE, NAV_UNAUTH_TEMPLATE } from '../../js/constants/header.js';
import { popupSignInContainer, buttonPopupAuth } from '../../js/constants/popupSignIn.js';
import { popupSignUpContainer, buttonReg } from '../../js/constants/popupSignUp.js';
import { popupSuccesContainer, popupButtonSignInAfterSucces } from '../../js/constants/popupSucces.js';

//импорт компонентов

import PopupSignIn from '../../js/components/PopupSignIn.js';
import PopupSignIUp from '../../js/components/PopupSignUp.js';
import PopupSucces from '../../js/components/PopupSucces.js';
import MainApi from '../../js/api/MainApi.js';
import FormValidator from '../../js/components/FormValidator.js';
import Header from '../../js/components/Header.js';

// инициализация классов

const mainApi = new MainApi(SERVER_CONFIG); // апи регистрации/логина



const validationSignIn = new FormValidator(ERROR_MESSAGES, popupSignInContainer); //валидация полей при логине

const validationSignUp = new FormValidator(ERROR_MESSAGES, popupSignUpContainer); //валидация полей при регистрации

const popupSignIn = new PopupSignIn(popupSignInContainer, buttonPopupAuth, popupButtonSignInAfterSucces, mainApi, validationSignIn); //попап логина

const popupSucces = new PopupSucces(popupSuccesContainer); // попап успешной регистрации

const popupSignUp = new PopupSignIUp(popupSignUpContainer, buttonReg, popupSucces, mainApi, validationSignUp); // попап регистрации

const header = new Header(HEADER_CONTAINER, popupSignIn, NAV_AUTH_TEMPLATE, NAV_UNAUTH_TEMPLATE);

header.render();



popupSignIn.setEventListeners();
popupSignUp.setEventListeners();
popupSucces.setEventListeners();

validationSignIn.setEventListeners();
validationSignUp.setEventListeners();