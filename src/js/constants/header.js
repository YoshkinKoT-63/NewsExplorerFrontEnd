

const HEADER_CONTAINER = document.querySelector('.header__container');

const NAV_AUTH_TEMPLATE = document.querySelector('#nav-authorized-template');
const NAV_UNAUTH_TEMPLATE =  document.querySelector('#nav-unauthorized-template');

const buttonAuth = NAV_AUTH_TEMPLATE.content.querySelector('.header__auth'); //авторизация

export { buttonAuth, HEADER_CONTAINER, NAV_AUTH_TEMPLATE, NAV_UNAUTH_TEMPLATE };


