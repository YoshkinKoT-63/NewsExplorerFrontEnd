export default class MainApi {
  constructor(option) {
    this._option = option;

  }



  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
    };

//регистрация пользователя-------------------------------------------------------------------------------

  signup(email, password, name) {
    return fetch(`${this._option.url}/signup`, {
      redirect: 'follow',
      credentials: 'include',
      method: 'POST',
      headers: this._option.headers,
      body: JSON.stringify({
        email, password, name,
      }),
    })
      .then((res) => this._getResponseData(res));
  }

//логин пользователя-------------------------------------------------------------------------------

  signin (email, password) {
    return fetch(`${this._option.url}/signin`, {
      redirect: 'follow',
      credentials: 'include',
      method: 'POST',
      headers: this._option.headers,
      body: JSON.stringify({
        email, password,
      }),
    })
      .then((res) => this._getResponseData(res));
  }


//получение данных пользователя-----------------------------------------------------------------------

  getUserData() {
    this._option.headers['Authorization'] = `Bearer ${localStorage.getItem('jwt')}`;
    return fetch(`${this._option.url}/users/me`, {
      redirect: 'follow',
      credentials: 'include',
      method: 'GET',
      headers: this._option.headers,
    })
    .then((res) => this._getResponseData(res));
  }

//сохранение карточки статьи-----------------------------------------------------------------------

  saveArticle(data) {
    this._option.headers['Authorization'] = `Bearer ${localStorage.getItem('jwt')}`;
    return fetch(`${this._option.url}/articles`, {
      credentials: 'include',
      method: 'POST',
      headers: this._option.headers,
      body: JSON.stringify({
        keyword: data.keyword,
        title: data.title,
        text: data.text,
        date: data.date,
        source: data.source,
        link: data.link,
        image: data.image,
      }),
    })
      .then((res) => this._getResponseData(res));
  }

//удаление карточки статьи-----------------------------------------------------------------------
  deleteArticle(data) {
    this._option.headers['Authorization'] = `Bearer ${localStorage.getItem('jwt')}`;
    return fetch(`${this._option.url}/articles/${data.id}`, {
      credentials: 'include',
      method: 'DELETE',
      headers: this._option.headers,
      body: JSON.stringify({
      }),
    })
      .then((res) => this._getResponseData(res));
  }
//--------------------------------------------------------------------------------------------------------

//получить сохранённые статьи
getArticles() {
  this._option.headers['Authorization'] = `Bearer ${localStorage.getItem('jwt')}`;
  return fetch(`${this._option.url}/articles`, {
    credentials: "include",
    method: "GET",
    headers: this._option.headers,
  })
  .then((res) => this._getResponseData(res));
}



}

/*
signup регистрирует нового пользователя;
signin аутентифицирует пользователя на основе почты и пароля;
getUserData возвращает информацию о пользователе;
getArticles забирает все статьи;
createArticle создаёт статью;
removeArticle удаляет статью.
Каждый из методов этих классов возвращает промис, содержит в себе обработку ответа и обязательный блок .catch(),
бросающий ошибку дальше с помощью Promise.reject или throw. Также классы MainApi и NewsApi не должны
взаимодействовать с DOM напрямую из своих методов.
*/