!function(e){var t={};function s(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=t,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(i,n,function(t){return e[t]}.bind(null,n));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=3)}([function(e,t,s){},,,function(e,t,s){"use strict";s.r(t);s(0);const i={empty:"Это обязательное поле",wrongLength:"Должно быть от 2 до 30 символов",wrongUrl:"Здесь должна быть ссылка",wrongEmail:"Неправильный формат email",wrongPassword:"Должно быть не меньше 8 символов"},n={url:"http://localhost:3000",headers:{"Content-Type":"application/json"}},o=document.querySelector(".header__container"),r=document.querySelector("#nav-authorized-template"),a=document.querySelector("#nav-unauthorized-template"),u=document.querySelector(".popup_type_sign-in"),l=document.querySelector(".popup__form-button-sign-in"),c=document.querySelector(".popup_type_sign-up"),h=document.querySelector(".popup__form-button-sign-up"),d=document.querySelector(".popup_type_succes"),p=document.querySelector(".popup__button_succes"),m=document.querySelector(".search__input"),_=document.querySelector(".search__button"),g=document.querySelector(".preloader"),v=document.querySelector(".result"),y=document.querySelector(".no-result"),b=document.querySelector("#card").content.querySelector(".card"),S=document.querySelector(".result__cards-container");class w{constructor(){}_setHandlers(e){e.forEach(e=>{this._addHandler(...e)})}_addHandler(e,t,s){e.addEventListener(t,s)}_removeHandler(e,t,s){e.removeEventListener(t,s)}}class f extends w{constructor(e){super(),this.element=e,this.closePopupButton=this.element.querySelector(".popup__close"),this.closePopupByEscapeButton=this.closePopupByEscapeButton.bind(this)}clearPopup(){console.log("сработал сброс формы"),this.element.querySelector(".popup__form").reset()}open(){this.clearPopup(),this.element.classList.add("popup_is-opened")}close(){console.log("Сработало закрытие попапа"),this.element.classList.remove("popup_is-opened")}closePopupByEscapeButton(e){"Escape"===e.code&&this.close()}setEventListeners(){this._setHandlers([[this.closePopupButton,"click",()=>{this.close()}],[window,"keydown",this.closePopupByEscapeButton]])}}class L extends w{constructor(e,t){super(),this.form=t,this.errorMessages=e,this.button=this.form.querySelector(".popup__button"),this.isValidate=this.isValidate.bind(this),this.checkInputValidity=this.checkInputValidity.bind(this),this.setButtonActive=this.setButtonActive.bind(this),this.setButtonInactive=this.setButtonInactive.bind(this),this.resetValidationErrors=this.resetValidationErrors.bind(this),this.inputHandler=this.inputHandler.bind(this),this.setEventListeners=this.setEventListeners.bind(this)}isValidate(e){return e.setCustomValidity(""),e.validity.valueMissing?(e.setCustomValidity(this.errorMessages.empty),!1):e.validity.tooShort&&"password"===e.type?(e.setCustomValidity(this.errorMessages.wrongPassword),!1):e.validity.tooShort||e.validity.tooLong?(e.setCustomValidity(this.errorMessages.wrongLength),!1):e.validity.patternMismatch?(e.setCustomValidity(this.errorMessages.wrongEmail),!1):e.checkValidity()}checkInputValidity(e){const t=e.parentNode.querySelector(`#${e.id}-error`),s=this.isValidate(e);return t.textContent=e.validationMessage,s}setButtonActive(){this.button.removeAttribute("disabled"),this.button.classList.add("popup__button_active"),this.button.classList.remove("popup__button_inactive")}setButtonInactive(){this.button.setAttribute("disabled","disabled"),this.button.classList.remove("popup__button_active"),this.button.classList.add("popup__button_inactive")}resetValidationErrors(){this.errors=this.form.querySelectorAll(".popup__error"),this.errors.forEach(e=>e.textContent="")}inputHandler(e){const[...t]=this.form.querySelectorAll(".popup__input");this.checkInputValidity(e.target),t.every(this.isValidate)?this.setButtonActive(this.button):this.setButtonInactive(this.button)}setServerError(e){this.form.querySelector(".popup__server-error").textContent=e}setEventListeners(){this.form.addEventListener("input",this.inputHandler,!0)}}const E=new class{constructor(e){this._option=e}_getResponseData(e){return e.ok?e.json():Promise.reject("Ошибка: "+e.status)}signup(e,t,s){return fetch(this._option.url+"/signup",{redirect:"follow",credentials:"include",method:"POST",headers:this._option.headers,body:JSON.stringify({email:e,password:t,name:s})}).then(e=>this._getResponseData(e))}signin(e,t){return fetch(this._option.url+"/signin",{redirect:"follow",credentials:"include",method:"POST",headers:this._option.headers,body:JSON.stringify({email:e,password:t})}).then(e=>this._getResponseData(e))}getUserData(){return this._option.headers.Authorization="Bearer "+localStorage.getItem("jwt"),fetch(this._option.url+"/users/me",{redirect:"follow",credentials:"include",method:"GET",headers:this._option.headers}).then(e=>this._getResponseData(e))}}(n),q=new class{constructor(e){this.url=e.url,this.key=e.key,this.pageSize=e.pageSize,this.getNews=this.getNews.bind(this)}getNews(e,t,s){return fetch(`${this.url}/v2/everything?q=${e}}&from=${t}&to=${s}&sortBy=date&apiKey=${this.key}&pageSize=${this.pageSize}`).then(e=>Promise.resolve(e.json()))}}({key:"fba4e04be8764ddf9ace1cfaaa116caa",url:"https://nomoreparties.co/news",pageSize:"100"}),B=new L(i,u),k=new L(i,c),I=new class extends f{constructor(e,t,s,i,n){super(e),this.buttonPopupAuth=t,this.buttonPopupSignInAfterSucces=s,this.signUpButtom=document.querySelector(".popup__form-button-sign-up"),this.popupForm=document.forms.sign_in,this.submit=this.submit.bind(this),this.mainApi=i,this.validation=n}submit(e){e.preventDefault();const t={email:this.popupForm.elements.signin_email.value,password:this.popupForm.elements.signin_password.value};this.mainApi.signin(t.email,t.password).then(e=>{window.localStorage.setItem("jwt",e.token),this.mainApi.getUserData().then(e=>{console.log(e),window.localStorage.setItem("name",e.name),location.reload()}).catch(e=>{console.log(e)}),this.close()}).catch(e=>{console.log(e),this.validation.setServerError(e)})}setEventListeners(){super.setEventListeners(),this.buttonPopupAuth.addEventListener("click",()=>this.open()),this.buttonPopupSignInAfterSucces.addEventListener("click",()=>this.open()),this.signUpButtom.addEventListener("click",()=>this.close()),this.popupForm.addEventListener("submit",this.submit)}}(u,l,p,E,B),P=new class extends f{constructor(e){super(e),this.popup=e,this.signInButtom=e.querySelector(".popup__button_succes")}setEventListeners(){super.setEventListeners(),this.signInButtom.addEventListener("click",()=>this.close())}}(d),A=new class extends f{constructor(e,t,s,i,n){super(e),this.popup=e,this.popupForm=document.forms.sign_up,this.openButton=t,this.submit=this.submit.bind(this),this.signInButtom=document.querySelector(".popup__form-button-sign-in"),this.popupSucces=s,this.mainApi=i,this.validation=n}submit(e){e.preventDefault();const t={email:this.popupForm.elements.signup_email.value,password:this.popupForm.elements.signup_password.value,name:this.popupForm.elements.name.value};this.mainApi.signup(t.email,t.password,t.name).then(()=>{console.log("регистрация прошла"),this.close(),this.popupSucces.open()}).catch(e=>{console.log(e),this.validation.setServerError(e)})}setEventListeners(){super.setEventListeners(),this.openButton.addEventListener("click",()=>this.open()),this.signInButtom.addEventListener("click",()=>this.close()),this.popupForm.addEventListener("submit",this.submit)}}(c,h,P,E,k),C=new class extends w{constructor(e,t,s,i){super(),this._container=e,this.popupSignIn=t,this.authMenu=s,this.unAuthMenu=i}render(){window.localStorage.getItem("jwt")?(this._template=this.authMenu.content.querySelector(".header__nav-container"),this._element=this._template.cloneNode(!0),this._buttonLogOut=this._element.querySelector(".header__logout"),this._buttonLogOut.textContent=window.localStorage.getItem("name"),this._buttonLogOut.addEventListener("click",()=>{try{window.localStorage.removeItem("jwt"),window.localStorage.removeItem("name"),location.reload()}catch(e){console.log(e)}}),this._container.appendChild(this._element)):(this._template=this.unAuthMenu.content.querySelector(".header__nav-container"),this._element=this._template.cloneNode(!0),this._container.appendChild(this._element),this.buttonAuth=document.querySelector(".header__auth"),this.buttonAuth.addEventListener("click",()=>this.popupSignIn.open())),this.header_nav=this._container.querySelector(".header__nav-links"),this.header_button=this._container.querySelector(".header__button"),this.header_button.addEventListener("click",()=>this.burgerShow())}burgerShow(){this.header_nav.classList.toggle("header__nav-links_is-opened")}}(o,I,r,a),x=new class{constructor(e){this.card=e}renderIcon(){}create(e){return this._element=this.card.cloneNode(!0),null!==e.urlToImage?this._element.querySelector(".card__image").src=e.urlToImage:this._element.querySelector(".card__image").src="../../images/no-image.png",this._element.querySelector(".card__date").textContent=e.publishedAt,this._element.querySelector(".card__tittle").textContent=e.title,this._element.querySelector(".card__text").textContent=e.description,this._element.querySelector(".card__source").textContent=e.source.name,this._element}}(b),M=new class{constructor(e,t){this.cardList=e,this.newCard=t,this.addCard=this.addCard.bind(this)}addCard(e){this.cardList.appendChild(this.newCard.create(e))}render(e){this.cardList.innerHTML="",e.forEach(e=>{this.addCard(e)})}}(S,x),V=new class extends w{constructor(e,t,s,i,n,o,r){super(),this.search_input=e,this.search_button=t,this.preloader=s,this.result=i,this.no_result=n,this.newsApi=o,this.requestNews=this.requestNews.bind(this),this.today=new Date,this.weekBefore=new Date,this.weekBefore.setDate(this.today.getDate()-7),this.newsCardList=r}leftPad(e){return e>=9?e:"0"+e}formatDate(e){return`${e.getFullYear()}-${this.leftPad(e.getMonth()+1)}-${this.leftPad(e.getDate())}`}requestNews(){this.search_input.value?(this.preloader.classList.remove("preloader_hide"),this.result.classList.add("result_hide"),this.no_result.classList.contains("no-result_hide")||this.no_result.classList.add("no-result_hide"),this.newsApi.getNews(this.search_input.value,this.formatDate(this.today),this.formatDate(this.weekBefore)).then(e=>{this.preloader.classList.add("preloader_hide"),e.articles.length>0?(this.search_input.value="",this.result.classList.remove("result_hide"),this.newsCardList.render(e.articles)):0===e.articles.length&&this.no_result.classList.remove("no-result_hide")}).catch(e=>{this.preloader.classList.add("preloader_hide"),console.log(e)})):this.search_input.placeholder="Нужно ввести ключевое слово"}setEventListeners(){this.search_button.addEventListener("click",this.requestNews)}}(m,_,g,v,y,q,M);C.render(),V.setEventListeners(),I.setEventListeners(),A.setEventListeners(),P.setEventListeners(),B.setEventListeners(),k.setEventListeners()}]);