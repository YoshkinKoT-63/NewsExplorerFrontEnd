import "./index.css";

import { buttonAuth } from '../../js/constants/header.js';
import { popupSignInContainer, buttonPopupAuth } from '../../js/constants/popupSignIn.js';
import PopupSignIn from '../../js/components/PopupSignIn.js';

import { popupSignUpContainer, buttonReg } from '../../js/constants/popupSignUp.js';
import PopupSignIUp from '../../js/components/PopupSignUp.js';

const popupSignIn = new PopupSignIn(popupSignInContainer, buttonAuth, buttonPopupAuth); //попап авторизации

const popupSignUp = new PopupSignIUp(popupSignUpContainer, buttonReg);

popupSignIn.setEventListeners();
popupSignUp.setEventListeners();