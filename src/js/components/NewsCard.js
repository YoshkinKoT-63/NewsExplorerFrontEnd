export default class NewsCard {
  constructor(card){
    this.card = card;
  }

  renderIcon() {

  };


  create(data) {
    this._element = this.card.cloneNode(true);
    if (data.urlToImage !== null) {
      this._element.querySelector('.card__image').src = data.urlToImage;
    };
    this._element.querySelector('.card__date').textContent = data.publishedAt;
    this._element.querySelector('.card__tittle').textContent = data.title;
    this._element.querySelector('.card__text').textContent = data.description;
    this._element.querySelector('.card__source').textContent = data.source.name;
    this._element.addEventListener('click', () => window.open(data.url));
    return this._element;
  }

}

