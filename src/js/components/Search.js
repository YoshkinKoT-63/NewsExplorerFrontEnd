import BaseComponent from './BaseComponent';

export default class Search extends BaseComponent {
  constructor(SEARCH_INPUT, SEARCH_BUTTON, PRELOADER, RESULT, NO_RESULT, newsApi, newsCardList) {
    super();
    this.search_input = SEARCH_INPUT;
    this.search_button = SEARCH_BUTTON;
    this.preloader = PRELOADER;
    this.result = RESULT;
    this.no_result = NO_RESULT;
    this.newsApi = newsApi;
    this.requestNews = this.requestNews.bind(this);
    this.today = new Date();
    this.weekBefore = new Date();
    this.weekBefore.setDate(this.today.getDate() - 7);
    this.newsCardList = newsCardList;
  }

  leftPad(num) {
    return num >= 9 ? num : `0${num}`;
  }

  formatDate(date) {
    console.log(date);
    return `${date.getFullYear()}-${this.leftPad(date.getMonth() + 1)}-${this.leftPad(date.getDate())}`;
  }

  requestNews() {
    if (this.search_input.value) {
      this.preloader.classList.remove('preloader_hide');
      this.result.classList.add('result_hide');
      if (!this.no_result.classList.contains('no-result_hide')) {
        this.no_result.classList.add('no-result_hide');
      }
      this.newsApi
        .getNews(this.search_input.value, this.formatDate(this.today), this.formatDate(this.weekBefore))
        .then((res) => {
          this.preloader.classList.add('preloader_hide');

          if (res.articles.length > 0) {
            this.search_input.value = '';
            this.result.classList.remove('result_hide');
            this.newsCardList.renderResult(res.articles);
            // console.log(res.articles);
          } else if (res.articles.length === 0) {
            this.no_result.classList.remove('no-result_hide');
          }
        })
        .catch((err) => {
          this.preloader.classList.add('preloader_hide');
          console.log(err);
        });
    } else {
      this.search_input.placeholder = 'Нужно ввести ключевое слово';
    }
  };

  setEventListeners() {
    this.search_button.addEventListener("click", this.requestNews);
    this.search_button.addEventListener("click", this.newsCardList.clear());
  }



}