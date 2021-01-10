export default class NewsCardList {
  constructor(cardList, showMoreButton, newCard) {
    this.cardList = cardList;
    this.showMoreButton = showMoreButton;
    this.newCard = newCard;
    this.addCard = this.addCard.bind(this);
    this.cards = [];
    this.keyword = '';
    this.renderResult = this.renderResult.bind(this);
    this.showMore = this.showMore.bind(this);

  }

//запрос создания карточки и добавление ее в результыты поиска
  addCard(newsData, keyword) {
    this.cardList.appendChild(this.newCard.create(newsData, keyword));
  };

//установить ключевое слово
  setKeyword(word) {
    this.keyword = word;
  };

// очистка результата поиска
  clear() {
    this.cardList.innerHTML = '';
    this.cards = [];
    this.keyword = '';
  };



// рендер карточек из поиска
  renderResult(data) {
    this.cards = data.articles;
    console.log(this.cards);

    for (this.counter = 0; this.counter < 3; this.counter++) {
      this.addCard(this.cards[this.counter], this.keyword);
    }
  }

// рендер карточек при нажатии кнопки "показать ещё"
  showMore() {
    this.counter += 3;
    for (let i = this.counter - 3; i < this.counter; i++) {
      this.addCard(this.cards[i], this.keyword);
    }
  }



  setEventListeners() {
    this.showMoreButton.addEventListener("click", this.showMore);
  }

}