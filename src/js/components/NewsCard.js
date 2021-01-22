import cutText from '../utils/cutText.js';
import formatDate from '../utils/formatDate.js';

export default class NewsCard {
  constructor(card, mainApi, PAGE_NAME){
    this.card = card;
    this.mainApi = mainApi;
    this.formatDate = formatDate;
    this.cutText = cutText;
    this.saveCard = this.saveCard.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.pageName = PAGE_NAME;
  }

//сохраниь статью
  saveCard(event) {
    //остановить переход по ссылке
    event.preventDefault();
    const card = event.target.parentNode;
    if (!event.target.classList.contains('card__button_added')) {
//достать информацию из карточки
      const keyword = card.querySelector('.card__keyword').textContent;
      const title = this.cutText(card.querySelector('.card__tittle').textContent);
      const text = card.querySelector('.card__text').textContent;
      const date = card.querySelector('.card__date').textContent;
      const source = card.querySelector('.card__source').textContent;
      const link = card.href;
      const image = card.querySelector('.card__image').src;

      this.mainApi.saveArticle({
        keyword,
        title,
        text,
        date,
        source,
        link,
        image,
      })
      .then(values => {
        //закрасить закладку синим цветом
        event.target.classList.toggle('card__button_add');
        event.target.classList.toggle('card__button_added');
        //назначить статье id
        event.target.parentNode.id = values.data._id;
      })
      .catch(err => {
        console.log(err);
      })
    } else {

//достать id из карточки
      const id = event.target.parentNode.id;
      this.mainApi.deleteArticle({id})
      .then(values => {
        //закрасить прозрачным цветом
        event.target.classList.toggle('card__button_add');
        event.target.classList.toggle('card__button_added');
        //удалить id статьи
        event.target.parentNode.removeAttribute('id');
      })
      .catch(err => {
        console.log(err);
      })
    }
  }

  //удалить статью
  deleteCard(event) {
    event.preventDefault();

    const id = event.target.parentNode.id;
    console.log({id});
    this.mainApi.deleteArticle({id})
    .then(values => {

      event.target.parentNode.remove();

    })
    .catch(err => {
      console.log(err);
    })
  }

  create(data, keyword, id) {

    this._element = this.card.cloneNode(true);
    if (data.urlToImage !== null) {
      this._element.querySelector('.card__image').src = data.urlToImage;
    }

    this.button = this._element.querySelector('.card__button');

// Отрисовка блока сохранения карточки
    if (window.localStorage.getItem('jwt')) {
      // показать ключевое слово если пользователь залогинен
      this._element.querySelector('.card__keyword').classList.remove('card__keyword_hide');
      this._element.querySelector('.card__keyword').textContent = keyword.toLowerCase();
      //скрыть предупреждение если пользователь залогинен
      this.button.classList.remove('card__button_unlogged');
      //активировать кнопку если пользователь залогинен
      this.button.disabled=false;

        if (id) {
          this._element.id = id;
        }

        if (this.button.classList.contains('card__button_add')) {
          this.button.addEventListener("click", this.saveCard);
        }

        if (this.button.classList.contains('card__button_delete')) {
          this.button.addEventListener("click", this.deleteCard);
        }
    }
    this._element.querySelector('.card__date').textContent = (this.pageName === 'main' ? this.formatDate(data.publishedAt) : data.publishedAt);
    this._element.querySelector('.card__tittle').textContent = data.title;
    this._element.querySelector('.card__text').textContent = data.description;
    this._element.querySelector('.card__source').textContent = data.source.name;
    this._element.href = data.url;


    return this._element;
  }

}
