import "./index.css";

if(!window.localStorage.getItem("jwt")) {
  window.location.href = '../index.html'
};

const PAGE_NAME = 'saved_articles';

//импорт констант

import { ERROR_MESSAGES, SERVER_CONFIG, NEWS_API_CONFIG } from '../../js/constants/data.js'
import { HEADER_CONTAINER, NAV_AUTH_TEMPLATE, NAV_UNAUTH_TEMPLATE, NAV_SAVED_ARTICLES } from '../../js/constants/header.js';
import { CARD, CARD_LIST, SHOW_MORE_BUTTON } from '../../js/constants/card.js';
import { REPORT_CONTAINER } from '../../js/constants/report.js';


//импорт компонентов

import MainApi from '../../js/api/MainApi.js';

import Header from '../../js/components/Header.js';
import NewsCardList from '../../js/components/NewsCardList.js';
import NewsCard from '../../js/components/NewsCard.js';
import Report from '../../js/components/Report.js';

// импорт утилит
import formatDate from '../../js/utils/formatDate.js';
import ucFirst from '../../js/utils/ucFirst';

// инициализация классов

const mainApi = new MainApi(SERVER_CONFIG); // апи регистрации/логина



const header = new Header(HEADER_CONTAINER, NAV_AUTH_TEMPLATE, NAV_UNAUTH_TEMPLATE, NAV_SAVED_ARTICLES, PAGE_NAME);

const report = new Report(REPORT_CONTAINER, mainApi, ucFirst); // отчёт о сохранённых статьях

const newsCard = new NewsCard(CARD, mainApi, formatDate);

const newsCardList = new NewsCardList(CARD_LIST, SHOW_MORE_BUTTON, newsCard);



mainApi.getArticles()
  .then((res) => {
    window.localStorage.setItem("articles", JSON.stringify(res.data));
    console.log('запрос отправлен');
  });


header.render();

report.getSaveArticles();

report.setNumberArticles();

report.setKeywords();

report.setArticlesInfo();