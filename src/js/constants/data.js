const SERVER_URL = 'http://localhost:3000';

const ERROR_MESSAGES = {
  empty: 'Это обязательное поле',
  wrongLength: 'Должно быть от 2 до 30 символов',
  wrongUrl: 'Здесь должна быть ссылка',
  wrongEmail: 'Неправильный формат email',
  wrongPassword: 'Должно быть не меньше 8 символов',
};

const SERVER_CONFIG = {
  url: `${SERVER_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
};

export {
  SERVER_URL,
  ERROR_MESSAGES,
  SERVER_CONFIG
};