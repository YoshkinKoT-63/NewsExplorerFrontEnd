!function(t){var e={};function s(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=e,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(i,r,function(e){return t[e]}.bind(null,r));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=10)}([function(t,e,s){"use strict";s.d(e,"a",(function(){return i}));class i{constructor(){}_setHandlers(t){t.forEach(t=>{this._addHandler(...t)})}_addHandler(t,e,s){t.addEventListener(e,s)}_removeHandler(t,e,s){t.removeEventListener(e,s)}}},function(t,e,s){"use strict";s.d(e,"a",(function(){return i})),s.d(e,"b",(function(){return r})),s.d(e,"d",(function(){return o})),s.d(e,"c",(function(){return n}));const i=document.querySelector(".header__container"),r=document.querySelector("#nav-authorized-template"),o=document.querySelector("#nav-unauthorized-template"),n=document.querySelector("#saved-articles-template")},function(t,e,s){"use strict";s.d(e,"a",(function(){return i})),s.d(e,"b",(function(){return r})),s.d(e,"c",(function(){return o}));const i=document.querySelector("#card").content.querySelector(".card"),r=document.querySelector(".result__cards-container"),o=document.querySelector(".result__show-more")},function(t,e,s){"use strict";s.d(e,"a",(function(){return i})),s.d(e,"c",(function(){return r})),s.d(e,"b",(function(){return o}));const i={empty:"Это обязательное поле",wrongLength:"Должно быть от 2 до 30 символов",wrongUrl:"Здесь должна быть ссылка",wrongEmail:"Неправильный формат email",wrongPassword:"Должно быть не меньше 8 символов"},r={url:"https://api.newsxplorer.ru",headers:{"Content-Type":"application/json"}},o={key:"fba4e04be8764ddf9ace1cfaaa116caa",url:"https://nomoreparties.co/news",pageSize:"100"}},function(t,e,s){"use strict";s.d(e,"a",(function(){return i}));class i{constructor(t){this._option=t}_getResponseData(t){return t.ok?t.json():Promise.reject("Ошибка: "+t.status)}signup(t,e,s){return fetch(this._option.url+"/signup",{redirect:"follow",credentials:"include",method:"POST",headers:this._option.headers,body:JSON.stringify({email:t,password:e,name:s})}).then(t=>this._getResponseData(t))}signin(t,e){return fetch(this._option.url+"/signin",{redirect:"follow",credentials:"include",method:"POST",headers:this._option.headers,body:JSON.stringify({email:t,password:e})}).then(t=>this._getResponseData(t))}getUserData(){return this._option.headers.Authorization="Bearer "+localStorage.getItem("jwt"),fetch(this._option.url+"/users/me",{redirect:"follow",credentials:"include",method:"GET",headers:this._option.headers}).then(t=>this._getResponseData(t))}saveArticle(t){return this._option.headers.Authorization="Bearer "+localStorage.getItem("jwt"),fetch(this._option.url+"/articles",{credentials:"include",method:"POST",headers:this._option.headers,body:JSON.stringify({keyword:t.keyword,title:t.title,text:t.text,date:t.date,source:t.source,link:t.link,image:t.image})}).then(t=>this._getResponseData(t))}deleteArticle(t){return this._option.headers.Authorization="Bearer "+localStorage.getItem("jwt"),fetch(`${this._option.url}/articles/${t.id}`,{credentials:"include",method:"DELETE",headers:this._option.headers,body:JSON.stringify({})}).then(t=>this._getResponseData(t))}getArticles(){return this._option.headers.Authorization="Bearer "+localStorage.getItem("jwt"),fetch(this._option.url+"/articles",{credentials:"include",method:"GET",headers:this._option.headers}).then(t=>this._getResponseData(t))}}},function(t,e,s){"use strict";s.d(e,"a",(function(){return r}));var i=s(0);class r extends i.a{constructor(t,e,s,i,r){super(),this._container=t,this.authMenu=e,this.unAuthMenu=s,this.savedArticles=i,this.pageName=r,this.logo=t.querySelector(".header__logo")}render(){window.localStorage.getItem("jwt")?"main"===this.pageName?(this._template=this.authMenu.content.querySelector(".header__nav-container"),this._element=this._template.cloneNode(!0),this._buttonLogOut=this._element.querySelector(".header__logout"),this._buttonLogOut.textContent=window.localStorage.getItem("name"),this._addHandler(this._buttonLogOut,"click",()=>{try{window.localStorage.removeItem("jwt"),window.localStorage.removeItem("name"),location.reload()}catch(t){console.log(t)}}),this._container.appendChild(this._element)):(this._template=this.savedArticles.content.querySelector(".header__nav-container"),this._element=this._template.cloneNode(!0),this._buttonLogOut=this._element.querySelector(".header__logout"),this._buttonLogOut.textContent=window.localStorage.getItem("name"),this._addHandler(this._buttonLogOut,"click",()=>{try{window.localStorage.removeItem("jwt"),window.localStorage.removeItem("name"),location.reload()}catch(t){console.log(t)}}),this._container.appendChild(this._element)):(this._template=this.unAuthMenu.content.querySelector(".header__nav-container"),this._element=this._template.cloneNode(!0),this._container.appendChild(this._element)),this.header_nav=this._container.querySelector(".header__nav-links"),this.header_button=this._container.querySelector(".header__button"),this._addHandler(this.header_button,"click",()=>this.burgerShow())}burgerShow(){this.header_nav.classList.toggle("header__nav-links_is-opened"),this.logo.classList.toggle("header__logo_white"),this.header_button.classList.toggle("header__button_dark")}}},function(t,e,s){"use strict";s.d(e,"a",(function(){return r}));var i=s(0);class r extends i.a{constructor(t,e,s){super(),this.cardList=t,this.showMoreButton=e,this.newCard=s,this.addCard=this.addCard.bind(this),this.cards=[],this.keyword="",this.renderResult=this.renderResult.bind(this),this.showMore=this.showMore.bind(this),this.toggleShowMoreButton=this.toggleShowMoreButton.bind(this)}addCard(t,e,s){this.cardList.appendChild(this.newCard.create(t,e,s))}setKeyword(t){this.keyword=t}clear(){this.cardList.innerHTML="",this.cards=[],this.keyword=""}toggleShowMoreButton(){this.counter===this.cards.length?this.showMoreButton.classList.add("result_hide"):this.showMoreButton.classList.remove("result_hide")}renderSaveCard(t){this.cards=t.articles,this.cards.forEach(t=>this.addCard(t,t.keyword,t._id)),this.number=this.cards.length}renderResult(t){for(this.cards=t.articles,this.number=this.cards.length<3?this.cards.length:3,this.counter=0;this.counter<this.number;this.counter++)this.addCard(this.cards[this.counter],this.keyword,0);this.toggleShowMoreButton()}showMore(){if(this.cards.length-this.counter<3){for(let t=this.counter;t<this.cards.length;t++)this.addCard(this.cards[t],this.keyword,0);this.counter=this.cards.length}else{this.counter+=3;for(let t=this.counter-3;t<this.counter;t++)this.addCard(this.cards[t],this.keyword,0)}}setEventListeners(){this._setHandlers([[this.showMoreButton,"click",this.showMore],[this.showMoreButton,"click",this.toggleShowMoreButton]])}}},function(t,e,s){"use strict";s.d(e,"a",(function(){return o}));var i=t=>t.length<=30?t:t.substr(0,t.lastIndexOf(" ",30))+"...";var r=t=>{const e=new Date(t);return`${e.toLocaleDateString("ru-RU",{day:"numeric",month:"long"})}, ${e.getFullYear()}`};class o{constructor(t,e,s){this.card=t,this.mainApi=e,this.formatDate=r,this.cutText=i,this.saveCard=this.saveCard.bind(this),this.deleteCard=this.deleteCard.bind(this),this.pageName=s}saveCard(t){t.preventDefault();const e=t.target.parentNode;if(t.target.classList.contains("card__button_added")){const e=t.target.parentNode.id;this.mainApi.deleteArticle({id:e}).then(e=>{t.target.classList.toggle("card__button_add"),t.target.classList.toggle("card__button_added"),t.target.parentNode.removeAttribute("id")}).catch(t=>{console.log(t)})}else{const s=e.querySelector(".card__keyword").textContent,i=this.cutText(e.querySelector(".card__tittle").textContent),r=e.querySelector(".card__text").textContent,o=e.querySelector(".card__date").textContent,n=e.querySelector(".card__source").textContent,a=e.href,c=e.querySelector(".card__image").src;this.mainApi.saveArticle({keyword:s,title:i,text:r,date:o,source:n,link:a,image:c}).then(e=>{t.target.classList.toggle("card__button_add"),t.target.classList.toggle("card__button_added"),t.target.parentNode.id=e.data._id}).catch(t=>{console.log(t)})}}deleteCard(t){t.preventDefault();const e=t.target.parentNode.id;console.log({id:e}),this.mainApi.deleteArticle({id:e}).then(e=>{t.target.parentNode.remove()}).catch(t=>{console.log(t)})}create(t,e,s){return this._element=this.card.cloneNode(!0),null!==t.urlToImage&&(this._element.querySelector(".card__image").src=t.urlToImage),this.button=this._element.querySelector(".card__button"),window.localStorage.getItem("jwt")&&(this._element.querySelector(".card__keyword").classList.remove("card__keyword_hide"),this._element.querySelector(".card__keyword").textContent=e.toLowerCase(),this.button.classList.remove("card__button_unlogged"),this.button.disabled=!1,s&&(this._element.id=s),this.button.classList.contains("card__button_add")&&this.button.addEventListener("click",this.saveCard),this.button.classList.contains("card__button_delete")&&this.button.addEventListener("click",this.deleteCard)),this._element.querySelector(".card__date").textContent="main"===this.pageName?this.formatDate(t.publishedAt):t.publishedAt,this._element.querySelector(".card__tittle").textContent=t.title,this._element.querySelector(".card__text").textContent=t.description,this._element.querySelector(".card__source").textContent=t.source.name,this._element.href=t.url,this._element}}},function(t,e,s){},,function(t,e,s){"use strict";s.r(e);s(8);var i=s(3),r=s(1);const o=document.querySelector(".popup_type_sign-in"),n=document.querySelector(".popup__form-button-sign-in"),a=document.querySelector(".popup_type_sign-up"),c=document.querySelector(".popup__form-button-sign-up"),h=document.querySelector(".popup_type_succes"),u=document.querySelector(".popup__button_succes"),l=document.querySelector(".search__input"),d=document.querySelector(".search__button"),p=document.querySelector(".preloader"),_=document.querySelector(".result"),m=document.querySelector(".no-result");var g=s(2),y=s(0);class b extends y.a{constructor(t){super(),this.element=t,this.closePopupButton=this.element.querySelector(".popup__close"),this.closePopupByEscapeButton=this.closePopupByEscapeButton.bind(this)}clearPopup(){this.form=this.element.querySelector(".popup__form"),this.form&&this.form.reset()}open(){this.clearPopup(),this.element.classList.add("popup_is-opened")}close(){this.element.classList.remove("popup_is-opened")}closePopupByEscapeButton(t){"Escape"===t.code&&this.close()}setEventListeners(){this._setHandlers([[this.closePopupButton,"click",()=>{this.close()}],[window,"keydown",this.closePopupByEscapeButton]])}}var w=s(4);class v extends y.a{constructor(t,e){super(),this.form=e,this.errorMessages=t,this.button=this.form.querySelector(".popup__button"),this.isValidate=this.isValidate.bind(this),this.checkInputValidity=this.checkInputValidity.bind(this),this.setButtonActive=this.setButtonActive.bind(this),this.setButtonInactive=this.setButtonInactive.bind(this),this.resetValidationErrors=this.resetValidationErrors.bind(this),this.inputHandler=this.inputHandler.bind(this),this.setEventListeners=this.setEventListeners.bind(this)}isValidate(t){return t.setCustomValidity(""),t.validity.valueMissing?(t.setCustomValidity(this.errorMessages.empty),!1):t.validity.tooShort&&"password"===t.type?(t.setCustomValidity(this.errorMessages.wrongPassword),!1):t.validity.tooShort||t.validity.tooLong?(t.setCustomValidity(this.errorMessages.wrongLength),!1):t.validity.patternMismatch?(t.setCustomValidity(this.errorMessages.wrongEmail),!1):t.checkValidity()}checkInputValidity(t){const e=t.parentNode.querySelector(`#${t.id}-error`),s=this.isValidate(t);return e.textContent=t.validationMessage,s}setButtonActive(){this.button.removeAttribute("disabled"),this.button.classList.add("popup__button_active"),this.button.classList.remove("popup__button_inactive")}setButtonInactive(){this.button.setAttribute("disabled","disabled"),this.button.classList.remove("popup__button_active"),this.button.classList.add("popup__button_inactive")}resetValidationErrors(){this.errors=this.form.querySelectorAll(".popup__error"),this.errors.forEach(t=>t.textContent="")}inputHandler(t){const[...e]=this.form.querySelectorAll(".popup__input");this.checkInputValidity(t.target),e.every(this.isValidate)?this.setButtonActive(this.button):this.setButtonInactive(this.button)}setServerError(t){this.form.querySelector(".popup__server-error").textContent=t}setEventListeners(){this.form.addEventListener("input",this.inputHandler,!0)}}var f=s(5);class S extends y.a{constructor(t,e,s,i,r,o,n){super(),this.search_input=t,this.search_button=e,this.preloader=s,this.result=i,this.no_result=r,this.newsApi=o,this.requestNews=this.requestNews.bind(this),this.today=new Date,this.weekBefore=new Date,this.weekBefore.setDate(this.today.getDate()-7),this.newsCardList=n}leftPad(t){return t>=9?t:"0"+t}formatDate(t){return`${t.getFullYear()}-${this.leftPad(t.getMonth()+1)}-${this.leftPad(t.getDate())}`}requestNews(t){t.preventDefault();let e=this.search_input.value;e?(this.preloader.classList.remove("preloader_hide"),this.result.classList.add("result_hide"),this.no_result.classList.contains("no-result_hide")||this.no_result.classList.add("no-result_hide"),this.newsApi.getNews(e,this.formatDate(this.today),this.formatDate(this.weekBefore)).then(t=>{this.preloader.classList.add("preloader_hide");const s=t.articles;s.length>0?(this.search_input.value="",this.search_input.placeholder="Введите тему новости",this.newsCardList.clear(),this.result.classList.remove("result_hide"),this.newsCardList.setKeyword(e),this.newsCardList.renderResult({articles:s})):0===s.length&&this.no_result.classList.remove("no-result_hide")}).catch(t=>{this.preloader.classList.add("preloader_hide"),console.log(t)})):this.search_input.placeholder="Нужно ввести ключевое слово"}setEventListeners(){this._setHandlers([[this.search_button,"click",this.requestNews]])}}var L=s(6),q=s(7);const k=new w.a(i.c),E=new class{constructor(t){this.url=t.url,this.key=t.key,this.pageSize=t.pageSize,this.getNews=this.getNews.bind(this)}getNews(t,e,s){return fetch(`${this.url}/v2/everything?q=${t}}&from=${e}&to=${s}&sortBy=date&apiKey=${this.key}&pageSize=${this.pageSize}`).then(t=>Promise.resolve(t.json()))}}(i.b),C=new v(i.a,o),A=new v(i.a,a),B=new class extends b{constructor(t,e,s,i,r){super(t),this.buttonPopupAuth=e,this.buttonPopupSignInAfterSucces=s,this.signUpButtom=document.querySelector(".popup__form-button-sign-up"),this.popupForm=document.forms.sign_in,this.submit=this.submit.bind(this),this.mainApi=i,this.validation=r}submit(t){t.preventDefault();const e={email:this.popupForm.elements.signin_email.value,password:this.popupForm.elements.signin_password.value};this.mainApi.signin(e.email,e.password).then(t=>{window.localStorage.setItem("jwt",t.token),this.mainApi.getUserData().then(t=>{window.localStorage.setItem("name",t.name),location.reload()}).catch(t=>{console.log(t)}),this.close()}).catch(t=>{console.log(t),this.validation.setServerError(t)})}setEventListeners(){super.setEventListeners(),this._setHandlers([[this.buttonPopupAuth,"click",()=>this.open()],[this.buttonPopupSignInAfterSucces,"click",()=>this.open()],[this.buttonPopupAuth,"click",this.validation.resetValidationErrors],[this.buttonPopupSignInAfterSucces,"click",this.validation.resetValidationErrors],[this.signUpButtom,"click",()=>this.close()],[this.popupForm,"submit",this.submit]]),window.localStorage.getItem("jwt")||(this.buttonAuth=document.querySelector(".header__auth"),this._setHandlers([[this.buttonAuth,"click",()=>this.open()],[this.buttonAuth,"click",this.validation.resetValidationErrors]]))}}(o,n,u,k,C),x=new class extends b{constructor(t){super(t),this.popup=t,this.signInButtom=t.querySelector(".popup__button_succes")}setEventListeners(){super.setEventListeners(),this._setHandlers([[this.signInButtom,"click",()=>this.close()]])}}(h),I=new class extends b{constructor(t,e,s,i,r){super(t),this.popup=t,this.popupForm=document.forms.sign_up,this.openButton=e,this.submit=this.submit.bind(this),this.signInButtom=document.querySelector(".popup__form-button-sign-in"),this.popupSucces=s,this.mainApi=i,this.validation=r}submit(t){t.preventDefault();const e={email:this.popupForm.elements.signup_email.value,password:this.popupForm.elements.signup_password.value,name:this.popupForm.elements.name.value};this.mainApi.signup(e.email,e.password,e.name).then(()=>{this.close(),this.popupSucces.open()}).catch(t=>{console.log(t),this.validation.setServerError(t)})}setEventListeners(){super.setEventListeners(),this._setHandlers([[this.openButton,"click",()=>this.open()],[this.openButton,"click",this.validation.resetValidationErrors],[this.signInButtom,"click",()=>this.close()],[this.popupForm,"submit",this.submit]])}}(a,c,x,k,A),M=new f.a(r.a,r.b,r.d,r.c,"main"),P=new q.a(g.a,k,"main"),D=new L.a(g.b,g.c,P),N=new S(l,d,p,_,m,E,D);M.render(),N.setEventListeners(),D.setEventListeners(),B.setEventListeners(),I.setEventListeners(),x.setEventListeners(),C.setEventListeners(),A.setEventListeners()}]);