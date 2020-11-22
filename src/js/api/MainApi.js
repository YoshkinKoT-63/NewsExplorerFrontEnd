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
    return fetch(`${this._option.baseUrl}.signup`, {
      method: 'POST',
      headers: this._options.headers,
      body: JSON.stringify({
        email, password, name,
      }),
    })
      .then((res) => this._getResponseData(res));
  }

//--------------------------------------------------------------------------------------------------------




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