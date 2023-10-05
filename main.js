(()=>{"use strict";var t=document.querySelector("#popup__profile"),e=document.querySelector(".profile__edit-button"),n=(document.querySelector(".popup__input_type_name"),document.querySelector(".popup__input_type_work"),document.querySelector(".profile__name"),document.querySelector(".profile__description"),t.querySelector("#popup__form-profile")),r=(document.querySelector(".cards__conteiner"),document.querySelector(".profile__add-button")),o=document.querySelector("#popup__card"),i=o.querySelector("#popup__form-card"),u=document.querySelector("#popup__image"),c=u.querySelector(".popup__img"),a=u.querySelector(".popup__img-title"),l=(o.querySelector(".popup__input_type_title"),o.querySelector(".popup__input_type_src"),document.querySelector(".popup__input"),document.querySelector("#popup__avatar").querySelector("#popup__form-avatar")),s=document.querySelector(".profile__avatar-edit-button"),f={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button-save",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_invalid"};function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,h(r.key),r)}}function d(t,e,n){return(e=h(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function h(t){var e=function(t,e){if("object"!==p(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===p(e)?e:String(e)}var _=function(){function t(e,n,r,o,i,u){var c=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),d(this,"checkLiked",(function(){return c._cardLike.classList.contains("card__button-like_active")})),d(this,"_handleLike",(function(){c._handleCardLike(c.checkLiked(),c._cardId)})),d(this,"_handleDelete",(function(){c._handleDeleteCard(c._cardId)})),this._title=e.name,this._img=e.link,this._handleCardClick=r,this._templateCard=u,this._handleDeleteCard=o,this._handleCardLike=i,this._userId=n,this._arrLikes=e.likes,this._likesLength=e.likes.length,this._ownerId=e.owner._id,this._cardId=e._id,this._cardElement=this._getCard(),this._imgCard=this._cardElement.querySelector(".card__img"),this._cardTitle=this._cardElement.querySelector(".card__title"),this._cardLike=this._cardElement.querySelector(".card__like-button"),this._cardRemove=this._cardElement.querySelector(".card__remove-button"),this._likesCounter=this._cardElement.querySelector(".card__like-counter")}var e,n;return e=t,(n=[{key:"_getCard",value:function(){return document.querySelector(this._templateCard).content.querySelector(".card").cloneNode(!0)}},{key:"toggleLike",value:function(t){this._cardLike.classList.toggle("card__button-like_active"),this._likesCounter.textContent=t.length}},{key:"_counterLike",value:function(){var t=this;this._arrLikes.forEach((function(e){e._id!==t._cardId?t._likesCounter.textContent=t._likesLength:t._cardLike.classList.add("card__button-like_active")}))}},{key:"deleteCard",value:function(){this._cardElement.remove()}},{key:"_setCardButtonDelete",value:function(){this._userId===this._ownerId?this._cardRemove.style.display="block":this._cardRemove.style.display="none"}},{key:"createCard",value:function(){return this._imgCard.src=this._img,this._imgCard.alt=this._title,this._cardTitle.textContent=this._title,this._counterLike(),this._setCardButtonDelete(),this._setEventListener(),this._cardElement}},{key:"_setEventListener",value:function(){var t=this;this._cardLike.addEventListener("click",this._handleLike),this._cardRemove.addEventListener("click",this._handleDelete),this._imgCard.addEventListener("click",(function(){return t._handleCardClick(t._title,t._img)}))}}])&&y(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,g(r.key),r)}}function b(t,e,n){return(e=g(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function g(t){var e=function(t,e){if("object"!==m(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==m(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===m(e)?e:String(e)}var S=function(){function t(e,n){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),b(this,"_checkInputValidity",(function(t){t.validity.valid?r._hideError(t):r._showError(t)})),b(this,"_showError",(function(t){var e=r._formElement.querySelector(".".concat(t.id,"-error"));t.classList.add(r._config.inputErrorClass),e.textContent=t.validationMessage})),b(this,"_hideError",(function(t){var e=r._formElement.querySelector(".".concat(t.id,"-error"));t.classList.remove(r._config.inputErrorClass),e.textContent=""})),this._config=e,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._config.inputSelector)),this._submitButtonElement=this._formElement.querySelector(this._config.submitButtonSelector)}var e,n;return e=t,(n=[{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(t){t.preventDefault()})),this._setEventListener()}},{key:"_setEventListener",value:function(){var t=this;this._toogleButtonState(this._formElement.checkValidity()),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toogleButtonState(t._formElement.checkValidity())}))}))}},{key:"resetValidation",value:function(){var t=this;this._toogleButtonState(),this._inputList.forEach((function(e){e.classList.contains(t._config.inputErrorClass)&&t._hideError(e)}))}},{key:"_disabledButton",value:function(){this._submitButtonElement.disabled="disabled",this._submitButtonElement.classList.add(this._config.inactiveButtonClass)}},{key:"_enableButton",value:function(){this._submitButtonElement.disabled=!1,this._submitButtonElement.classList.remove(this._config.inactiveButtonClass)}},{key:"_checkInputListValid",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_toogleButtonState",value:function(){this._checkInputListValid(this._inputList)?this._disabledButton():this._enableButton()}}])&&v(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function k(t){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(t)}function w(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,P(r.key),r)}}function E(t,e,n){return(e=P(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function P(t){var e=function(t,e){if("object"!==k(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==k(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===k(e)?e:String(e)}var O=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),E(this,"_renderer",void 0),E(this,"_containerSelector",void 0),this._renderer=r,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"addItem",value:function(t){this._container.prepend(t)}},{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){return e._renderer(t)}))}}])&&w(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function j(t){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(t)}function L(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==j(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==j(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===j(o)?o:String(o)),r)}var o}var C=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._closeButtons=this._popup.querySelector(".popup__button-esc"),this._handleEscClose=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"openPopup",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"closePopup",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"closeOverlay",value:function(t){t.target.classList.contains("popup_opened")&&this.closePopup()}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.closePopup()}},{key:"setEventListeners",value:function(){var t=this;this._closeButtons.addEventListener("click",(function(){return t.closePopup()})),this._popup.addEventListener("mousedown",(function(e){e.currentTarget===e.target&&t.closePopup()}))}}])&&L(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function q(t){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},q(t)}function T(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==q(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==q(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===q(o)?o:String(o)),r)}var o}function I(){return I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=R(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},I.apply(this,arguments)}function B(t,e){return B=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},B(t,e)}function R(t){return R=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},R(t)}var x=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&B(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=R(r);if(o){var n=R(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===q(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e,n){var r,o=t.popupSelector;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,o))._popupImg=e,r._titleImg=n,r}return e=u,(n=[{key:"openPopup",value:function(t,e){I(R(u.prototype),"openPopup",this).call(this),this._popupImg.src=e,this._popupImg.alt=t,this._titleImg.textContent=t}}])&&T(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(C);function V(t){return V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},V(t)}function D(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==V(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==V(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===V(o)?o:String(o)),r)}var o}function A(){return A="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=H(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},A.apply(this,arguments)}function U(t,e){return U=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},U(t,e)}function H(t){return H=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},H(t)}var N=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&U(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=H(r);if(o){var n=H(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===V(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n,r=e.submitHandler;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._form=n._popup.querySelector(".popup__form"),n._inputList=Array.from(n._form.querySelectorAll(".popup__input")),n._submitHandler=r,n._popupButton=n._form.querySelector(".popup__button-save"),n._buttonText=n._popupButton.textContent,n}return e=u,(n=[{key:"_getInputValues",value:function(){var t=this;return this.inputValues={},this._inputList.forEach((function(e){t.inputValues[e.name]=e.value})),this.inputValues}},{key:"setInputValues",value:function(t){this._inputList.forEach((function(e){e.value=t[e.name]}))}},{key:"setEventListeners",value:function(){var t=this;A(H(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._popupButton.textContent="Сохранение...",t._submitHandler(t._getInputValues())}))}},{key:"closePopup",value:function(){A(H(u.prototype),"closePopup",this).call(this),this._form.reset()}},{key:"setTextButton",value:function(){this._popupButton.textContent=this._buttonText}}])&&D(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(C);function J(t){return J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},J(t)}function F(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==J(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==J(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===J(o)?o:String(o)),r)}var o}var G=function(){function t(e){var n=e.nameProfileSelector,r=e.descriptionProfileSelector,o=e.avatarProfileSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._nameProfile=document.querySelector(n),this._descriptionProfile=document.querySelector(r),this._avatar=document.querySelector(o)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._nameProfile.textContent,about:this._descriptionProfile.textContent,avatar:this._avatar.src}}},{key:"setUserInfo",value:function(t){var e=t.name,n=t.about,r=t.avatar;this._nameProfile.textContent=e,this._descriptionProfile.textContent=n,this._avatar.src=r}}])&&F(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function M(t){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},M(t)}function z(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==M(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==M(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===M(o)?o:String(o)),r)}var o}var $=function(){function t(e){var n=e.url,r=e.headers;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=n,this._headers=r}var e,n;return e=t,(n=[{key:"_getRequest",value:function(t,e){return fetch(t,e).then((function(t){if(t.ok)return t.json();Promise.reject})).catch((function(t){console.log(t)}))}},{key:"setUserInfo",value:function(t){return this._getRequest("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t.name,about:t.about,avatar:t.avatar})})}},{key:"getUserInfo",value:function(){return this._getRequest("".concat(this._url,"/users/me"),{method:"GET",headers:this._headers})}},{key:"editAvatar",value:function(t){return this._getRequest("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t.name,about:t.about,avatar:t.avatar})})}},{key:"getAllCards",value:function(){return this._getRequest("".concat(this._url,"/cards"),{method:"GET",headers:this._headers})}},{key:"createCard",value:function(t){return this._getRequest("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t.name,link:t.link})})}},{key:"delete",value:function(t){return this._getRequest("".concat(this._url,"/cards//").concat(t),{method:"DELETE",headers:this._headers})}},{key:"deleteLike",value:function(t){return this._getRequest("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:this._headers})}},{key:"addLike",value:function(t){return this._getRequest("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"PUT",headers:this._headers})}}])&&z(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function K(t){return K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},K(t)}function Q(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==K(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==K(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===K(o)?o:String(o)),r)}var o}function W(){return W="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=Y(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},W.apply(this,arguments)}function X(t,e){return X=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},X(t,e)}function Y(t){return Y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Y(t)}var Z=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&X(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=Y(r);if(o){var n=Y(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===K(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._form=e._popup.querySelector(".popup__form"),e._popupButton=e._form.querySelector(".popup__button-save"),e._buttonText=e._popupButton.textContent,e}return e=u,(n=[{key:"setSubmit",value:function(t){this._submitForm=t}},{key:"setEventListeners",value:function(){var t=this;W(Y(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._popupButton.textContent="Удаление...",t._submitForm()}))}},{key:"setTextButton",value:function(){this._popupButton.textContent=this._buttonText}}])&&Q(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(C);function tt(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,c=[],a=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=i.call(n)).done)&&(c.push(r.value),c.length!==e);a=!0);}catch(t){l=!0,o=t}finally{try{if(!a&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return c}}(t,e)||function(t,e){if(t){if("string"==typeof t)return et(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?et(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function et(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var nt=new $({url:"https://mesto.nomoreparties.co/v1/cohort-76",headers:{authorization:"eda5b0b1-35bd-4b47-92b2-3de2fac0e53a","Content-Type":"application/json"}}),rt="";Promise.all([nt.getUserInfo(),nt.getAllCards()]).then((function(t){var e=tt(t,2),n=e[0],r=e[1];rt=n._id,ct.setUserInfo(n),r.reverse(),lt.renderItems(r)})).catch((function(t){return console.log("ошибка: ".concat(t))}));var ot=new S(f,n);ot.enableValidation();var it=new S(f,i);it.enableValidation();var ut=new S(f,l);ut.enableValidation();var ct=new G({nameProfileSelector:".profile__name",descriptionProfileSelector:".profile__description",avatarProfileSelector:".profile__avatar"}),at=function(t){var e=new _(t,rt,ht,(function(t){dt.openPopup(),dt.setSubmit((function(){nt.delete(t).then((function(){e.deleteCard(),dt.closePopup()})).catch((function(t){return console.log("ошибка: ".concat(t))})).finally((function(){dt.setTextButton()}))}))}),(function(t,n){t?(console.log(t),nt.deleteLike(n).then((function(t){e.toggleLike(t.likes)})).catch((function(t){return console.log("ошибка: ".concat(t))}))):nt.addLike(n).then((function(t){e.toggleLike(t.likes)})).catch((function(t){return console.log("ошибка: ".concat(t))}))}),"#card-item-template");return console.log(t),e.createCard()},lt=new O({renderer:function(t){var e=at(t);lt.addItem(e)}},".cards__conteiner"),st=new x({popupSelector:"#popup__image"},c,a);st.setEventListeners();var ft=new N("#popup__profile",{submitHandler:function(t){var e=t.name,n=t.about;nt.setUserInfo({name:e,about:n}).then((function(t){ct.setUserInfo({name:t.name,about:t.about,avatar:t.avatar}),ft.closePopup()})).catch((function(t){return console.log("ошибка: ".concat(t))})).finally((function(){return ft.setTextButton()}))}});ft.setEventListeners();var pt=new N("#popup__card",{submitHandler:function(t){Promise.all([nt.getUserInfo(),nt.createCard(t)]).then((function(t){var e=tt(t,2),n=e[0],r=e[1];r.myId=n._id,lt.addItem(at(r)),pt.closePopup()}))}});pt.setEventListeners();var yt=new N("#popup__avatar",{submitHandler:function(t){nt.editAvatar(t).then((function(t){ct.setUserInfo({name:t.name,about:t.about,avatar:t.avatar}),yt.closePopup()})).catch((function(t){return console.log("ошибка: ".concat(t))})).finally((function(){return yt.setTextButton()}))}});yt.setEventListeners();var dt=new Z("#popup__delete",{submitHandler:function(t,e){nt.deleteCard(t).then((function(){e.deleteCard()})).catch((function(t){return console.log("ошибка: ".concat(t))}))}});function ht(t,e){st.openPopup(t,e)}dt.setEventListeners(),r.addEventListener("click",(function(){it.resetValidation(),pt.openPopup()})),e.addEventListener("click",(function(){ft.setInputValues(ct.getUserInfo()),ot.resetValidation(),ft.openPopup()})),s.addEventListener("click",(function(){yt.setInputValues(ct.getUserInfo()),ut.resetValidation(),yt.openPopup()}))})();