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
    this.toggleShowMoreButton = this.toggleShowMoreButton.bind(this);
  }

//запрос создания карточки и добавление ее в результыты поиска
  addCard(newsData, keyword, id) {
    this.cardList.appendChild(this.newCard.create(newsData, keyword, id));
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

// отрисовка кнопки "показать еще"
  toggleShowMoreButton() {
    if (this.counter === this.cards.length) {
      this.showMoreButton.classList.add('result_hide');
    } else {
      this.showMoreButton.classList.remove('result_hide');
    }
  }

  renderSaveCard(data) {
    this.cards = data.articles;
    console.log(this.cards);
    this.cards.forEach(card => this.addCard(card, card.keyword, card._id));
    this.number = this.cards.length;
  }


// рендер карточек из поиска
  renderResult(data) {
    this.cards = data.articles;
    console.log(this.cards);
    this.number = (this.cards.length < 3) ? this.cards.length : 3;
    for (this.counter = 0; this.counter < this.number; this.counter++) {
      this.addCard(this.cards[this.counter], this.keyword, 0);
    }
    this.toggleShowMoreButton();
  }

// рендер карточек при нажатии кнопки "показать ещё"
  showMore() {
    if (this.cards.length - this.counter < 3) {
      // this.counter = this.cards.length;
      for (let i = this.counter; i < this.cards.length; i++) {
        this.addCard(this.cards[i], this.keyword, 0);
        }
        this.counter = this.cards.length;
      } else {
        this.counter += 3;
        for (let i = this.counter - 3; i < this.counter; i++) {
          this.addCard(this.cards[i], this.keyword, 0);
        }
      }
  }

  setEventListeners() {
    this.showMoreButton.addEventListener("click", this.showMore);
    this.showMoreButton.addEventListener("click", this.toggleShowMoreButton);
  }

}