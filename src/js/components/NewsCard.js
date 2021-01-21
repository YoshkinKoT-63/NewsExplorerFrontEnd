export default class NewsCard {
  constructor(card, mainApi, formatDate){
    this.card = card;
    this.mainApi = mainApi;
    this.formatDate = formatDate;
    this.saveCard = this.saveCard.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
  }


//сохраниь статью
  saveCard(event) {
    //остановить переход по ссылке
    event.preventDefault();
    console.log('сохранение статьи');
    const card = event.target.parentNode;

    if (!event.target.classList.contains('card__button_added')) {
      console.log('статья не сохранена, выполняем сохранение');

//достать информацию из карточки
      const keyword = card.querySelector('.card__keyword').textContent;
      const title = card.querySelector('.card__tittle').textContent.slice(0, 30);
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
        console.log(values);
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
      console.log('статья сохранена, выполняем удаление');
//достать id из карточки
      const id = event.target.parentNode.id;
      console.log(id);
      this.mainApi.deleteArticle({id})
      .then(values => {
        console.log(values);
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
    console.log('удаление статьи');

    const id = event.target.parentNode.id;
    console.log({id});
    this.mainApi.deleteArticle({id})
    .then(values => {
      console.log(values);
      console.log('статья удалена');

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

// Отрисовка блока сохранения карточки
    if (window.localStorage.getItem('jwt')) {
      // показать ключевое слово если пользователь залогинен
      this._element.querySelector('.card__keyword').classList.remove('card__keyword_hide');
      //скрыть предупреждение если пользователь залогинен
      this._element.querySelector('.card__button').classList.remove('card__button_unlogged');
      // показать ключевое слово если пользователь залогинен
      this._element.querySelector('.card__keyword').textContent = keyword.toLowerCase();
    }
    this._element.querySelector('.card__date').textContent = this.formatDate(data.publishedAt);
    this._element.querySelector('.card__tittle').textContent = data.title;
    this._element.querySelector('.card__text').textContent = data.description;
    this._element.querySelector('.card__source').textContent = data.source.name;
    this._element.href = data.url;
    // this._element.addEventListener('click', () => window.open(data.url));

    if (id) {
      this._element.id = id;
    }

    if (this._element.querySelector('.card__button').classList.contains('card__button_add')) {
      this._element.querySelector('.card__button').addEventListener("click", this.saveCard);
    }

    if (this._element.querySelector('.card__button').classList.contains('card__button_delete')) {
      this._element.querySelector('.card__button').addEventListener("click", this.deleteCard);
    }



    return this._element;
  }

}

