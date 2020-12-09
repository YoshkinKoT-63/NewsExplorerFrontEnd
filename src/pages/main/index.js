import "./index.css";

//импорт констант

import { SERVER_URL, ERROR_MESSAGES, SERVER_CONFIG } from '../../js/constants/data.js'
import { buttonAuth } from '../../js/constants/header.js';
import { popupSignInContainer, buttonPopupAuth } from '../../js/constants/popupSignIn.js';
import { popupSignUpContainer, buttonReg } from '../../js/constants/popupSignUp.js';
import { popupSuccesContainer, popupButtonSignInAfterSucces } from '../../js/constants/popupSucces.js';

//импорт компонентов

import PopupSignIn from '../../js/components/PopupSignIn.js';
import PopupSignIUp from '../../js/components/PopupSignUp.js';
import PopupSucces from '../../js/components/PopupSucces.js';
import MainApi from '../../js/api/MainApi.js';
import FormValidator from '../../js/components/FormValidator.js';

// инициализация классов

const mainApi = new MainApi(SERVER_CONFIG); // апи регистрации/логина

const popupSignIn = new PopupSignIn(popupSignInContainer, buttonAuth, buttonPopupAuth, popupButtonSignInAfterSucces, mainApi); //попап логина

const popupSucces = new PopupSucces(popupSuccesContainer); // попап успешной регистрации

const popupSignUp = new PopupSignIUp(popupSignUpContainer, buttonReg, popupSucces, mainApi); // попап регистрации

const validationSignIn = new FormValidator(ERROR_MESSAGES, popupSignInContainer); //валидация полей при логине

const validationSignUp = new FormValidator(ERROR_MESSAGES, popupSignUpContainer); //валидация полей при регистрации



popupSignIn.setEventListeners();
popupSignUp.setEventListeners();
popupSucces.setEventListeners();

validationSignIn.setEventListeners();
validationSignUp.setEventListeners();