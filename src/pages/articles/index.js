import "./index.css";

if(!window.localStorage.getItem("jwt")) {
  console.log('пользователь не авторизован')
  window.location.href = '../index.html'
};

const PAGE_NAME = 'saved_articles';

//импорт констант

import { ERROR_MESSAGES, SERVER_CONFIG, NEWS_API_CONFIG } from '../../js/constants/data.js'
import { HEADER_CONTAINER, NAV_AUTH_TEMPLATE, NAV_UNAUTH_TEMPLATE, NAV_SAVED_ARTICLES } from '../../js/constants/header.js';
import { popupSuccesContainer, popupButtonSignInAfterSucces } from '../../js/constants/popupSucces.js';
import { CARD, CARD_LIST, SHOW_MORE_BUTTON } from '../../js/constants/card.js';


//импорт компонентов

import MainApi from '../../js/api/MainApi.js';

import Header from '../../js/components/Header.js';
import NewsCardList from '../../js/components/NewsCardList.js';
import NewsCard from '../../js/components/NewsCard.js';

// импорт утилит
import formatDate from '../../js/utils/formatDate.js';

// инициализация классов

const mainApi = new MainApi(SERVER_CONFIG); // апи регистрации/логина






const header = new Header(HEADER_CONTAINER, NAV_AUTH_TEMPLATE, NAV_UNAUTH_TEMPLATE, NAV_SAVED_ARTICLES, PAGE_NAME);

const newsCard = new NewsCard(CARD, mainApi, formatDate);

const newsCardList = new NewsCardList(CARD_LIST, SHOW_MORE_BUTTON, newsCard);





header.render();



