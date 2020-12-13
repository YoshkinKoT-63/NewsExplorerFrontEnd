export default class NewsCardList {
  constructor(cardList, showMoreButton, newCard) {
    this.cardList = cardList;
    this.showMoreButton = showMoreButton;
    this.newCard = newCard;
    this.addCard = this.addCard.bind(this);
    this.cards = [];
    this.renderResult = this.renderResult.bind(this);
    this.showMore = this.showMore.bind(this);
  }

//запрашивает создание карточки и добавляет ее в результыты поиска
  addCard(newsData) {
    this.cardList.appendChild(this.newCard.create(newsData));
  };

// очищает результаты поиска
  clear() {
    this.cardList.innerHTML = '';
  };


// рендер карточек из поиска
  renderResult(data) {
    this.cards = data;
    for (this.counter = 0; this.counter < 3; this.counter++) {
      this.addCard(this.cards[this.counter]);
    }
  }

// рендер карточек при нажатии кнопки "показать ещё"
  showMore() {
    this.counter += 3;
    for (let i = this.counter - 3; i < this.counter; i++) {
      this.addCard(this.cards[i]);
    }
  }


  setEventListeners() {
    this.showMoreButton.addEventListener("click", this.showMore);
  }

}