import "./index.css";

const PAGE_NAME = 'main';

//импорт констант

import { ERROR_MESSAGES, SERVER_CONFIG, NEWS_API_CONFIG } from '../../js/constants/data.js'
import { HEADER_CONTAINER, NAV_AUTH_TEMPLATE, NAV_UNAUTH_TEMPLATE, NAV_SAVED_ARTICLES } from '../../js/constants/header.js';
import { popupSignInContainer, buttonPopupAuth } from '../../js/constants/popupSignIn.js';
import { popupSignUpContainer, buttonReg } from '../../js/constants/popupSignUp.js';
import { popupSuccesContainer, popupButtonSignInAfterSucces } from '../../js/constants/popupSucces.js';
import { SEARCH_INPUT, SEARCH_BUTTON, PRELOADER, RESULT, NO_RESULT } from '../../js/constants/search.js';
import { CARD, CARD_LIST, SHOW_MORE_BUTTON } from '../../js/constants/card.js';

//импорт компонентов

import PopupSignIn from '../../js/components/PopupSignIn.js';
import PopupSignIUp from '../../js/components/PopupSignUp.js';
import PopupSucces from '../../js/components/PopupSucces.js';
import MainApi from '../../js/api/MainApi.js';
import NewsApi from '../../js/api/NewsApi.js';
import FormValidator from '../../js/components/FormValidator.js';
import Header from '../../js/components/Header.js';
import Search from '../../js/components/Search.js';
import NewsCardList from '../../js/components/NewsCardList.js';
import NewsCard from '../../js/components/NewsCard.js';

// импорт утилит
import formatDate from '../../js/utils/formatDate.js';

// инициализация классов

const mainApi = new MainApi(SERVER_CONFIG); // апи регистрации/логина

const newsApi = new NewsApi(NEWS_API_CONFIG); // апи поиска новостей


const validationSignIn = new FormValidator(ERROR_MESSAGES, popupSignInContainer); //валидация полей при логине

const validationSignUp = new FormValidator(ERROR_MESSAGES, popupSignUpContainer); //валидация полей при регистрации

const popupSignIn = new PopupSignIn(popupSignInContainer, buttonPopupAuth, popupButtonSignInAfterSucces, mainApi, validationSignIn); //попап логина

const popupSucces = new PopupSucces(popupSuccesContainer); // попап успешной регистрации

const popupSignUp = new PopupSignIUp(popupSignUpContainer, buttonReg, popupSucces, mainApi, validationSignUp); // попап регистрации

const header = new Header(HEADER_CONTAINER, NAV_AUTH_TEMPLATE, NAV_UNAUTH_TEMPLATE, NAV_SAVED_ARTICLES, PAGE_NAME);

const newsCard = new NewsCard(CARD, mainApi, formatDate);

const newsCardList = new NewsCardList(CARD_LIST, SHOW_MORE_BUTTON, newsCard);

const search = new Search(SEARCH_INPUT, SEARCH_BUTTON, PRELOADER, RESULT, NO_RESULT, newsApi, newsCardList);





header.render();

search.setEventListeners();

newsCardList.setEventListeners();

popupSignIn.setEventListeners();
popupSignUp.setEventListeners();
popupSucces.setEventListeners();

validationSignIn.setEventListeners();
validationSignUp.setEventListeners();

