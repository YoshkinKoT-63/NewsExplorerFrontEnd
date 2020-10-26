import "./index.css";

import { buttonAuth } from '../../js/constants/header.js';

console.log(buttonAuth);

import { popupSignInContainer } from '../../js/constants/popupSignIn.js';

console.log(popupSignInContainer);

import PopupSignIn from '../../js/components/PopupSignIn.js';

console.log(PopupSignIn);

const popupSignIn = new PopupSignIn(popupSignInContainer, buttonAuth);



popupSignIn.setEventListeners();