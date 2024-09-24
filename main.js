(()=>{"use strict";var e={baseUrl:"https://mesto.nomoreparties.co/v1/wff-cohort-21",headers:{authorization:"c0209747-23dd-4fc1-a84e-60bef0930bc8","Content-Type":"application/json"}};function t(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}var n=document.querySelector("#card-template").content;function r(e,t,r,o,c,a){console.log("Создание карточки");var i=n.querySelector(".card").cloneNode(!0);i.querySelector(".card__title").textContent=e.name;var u=i.querySelector(".card__image");u.src=e.link,u.alt=e.name,u.addEventListener("click",(function(){return a(e)}));var l=i.querySelector(".card__like-sum"),s=i.querySelector(".card__like-button");s.addEventListener("click",(function(){return o(l,s,e)})),r||(console.log("Это неновая карточка"),l.textContent=e.likes.length,e.likes.forEach((function(n){console.log(n._id),console.log(t),n._id===t&&s.classList.add("card__like-button_is-active"),e.likes.some((function(e){return e._id===t}))&&s.classList.add("card__like-button_is-active")})));var d=i.querySelector(".card__delete-button");return r||e.owner._id===t?d.addEventListener("click",(function(){return c(e,i)})):d.remove(),i}function o(n,r){(function(n){return fetch("".concat(e.baseUrl,"/cards/").concat(n._id),{headers:e.headers,method:"DELETE"}).then((function(e){t(e)}))})(n).then((function(e){r.remove()}))}function c(n,r,o){r.classList.contains("card__like-button_is-active")?function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n._id),{headers:e.headers,method:"DELETE"}).then((function(e){t(e)}))}(o).then((function(e){r.classList.remove("card__like-button_is-active"),n.textContent=e.likes.length})):function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n._id),{headers:e.headers,method:"PUT"}).then((function(e){t(e)}))}(o).then((function(e){r.classList.add("card__like-button_is-active"),n.textContent=e.likes.length}))}function a(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",u)}function i(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",u)}function u(e){"Escape"===e.key&&i(document.querySelector(".popup_is-opened"))}function l(e){e.target.matches(".popup_is-opened, .popup__close")&&i(document.querySelector(".popup_is-opened"))}var s=function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));r&&(t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent="")},d=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(n.removeAttribute("disabled",!1),n.classList.remove(t.inactiveButtonClass)):(n.setAttribute("disabled",!0),n.classList.add(t.inactiveButtonClass))};function p(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(n){return s(e,n,t)})),d(n,t,r)}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}console.log("Версия 57");var m={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},_=document.querySelector(".profile__title"),v=document.querySelector(".popup_type_edit-avatar"),y=document.querySelector('form[name="edit-avatar"]'),h=y.querySelector(".popup__input_type_avatar"),b=document.querySelector(".profile__image");Promise.all([fetch("".concat(e.baseUrl,"/users/me"),{method:"GET",headers:e.headers}).then((function(e){t(e)})),fetch("".concat(e.baseUrl,"/cards"),{headers:e.headers}).then(t)]).then((function(e){var t,n,a=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,i=[],u=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=c.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());a[0],a[1].forEach((function(e){var t=r(e,null,!1,c,o,w);S.append(t)}))})).catch((function(e){console.log(e)}));var S=document.querySelector(".places__list"),q=document.querySelector(".popup_type_image"),k=q.querySelector(".popup__image"),E=q.querySelector(".popup__caption"),L=document.querySelectorAll(".popup"),C=document.querySelector(".profile__edit-button"),g=document.querySelector(".popup_type_edit");C.addEventListener("click",(function(){p(U,m),a(g),T.value=_.textContent,j.value=B.textContent}));var A=document.querySelector(".profile__add-button"),x=document.querySelector(".popup_type_new-card");function w(e){k.src=e.link,k.alt=e.name,E.textContent=e.name,a(q)}A.addEventListener("click",(function(){return a(x)})),document.addEventListener("click",(function(e){e.target.classList.contains("popup__close")&&i(e.target.closest(".popup"))})),L.forEach((function(e){return e.addEventListener("mousedown",l)}));var U=document.querySelector('.popup__form[name="edit-profile"]'),T=U.querySelector('input[name="name"]'),j=U.querySelector('input[name="description"]'),B=document.querySelector(".profile__description");U.addEventListener("submit",(function(n){n.preventDefault(),N(!0,O);var r,o,c=j.value,a=T.value;_.textContent=a,B.textContent=c,(r=a,o=c,fetch("".concat(e.baseUrl,"/users/me"),{method:"PATCH",headers:e.headers,body:JSON.stringify({name:r,about:o})}).then((function(e){t(e)}))).then((function(e){i(g)})).finally((function(){N(!1,O)}))}));var O=document.querySelector('.popup__form[name="new-place"]'),P=O.querySelector('input[name="place-name"]'),D=O.querySelector('input[name="link"]'),I=document.querySelector("#button_popup_type_new-card");function N(e,t){t.querySelector(".popup__button").textContent=e?"Сохранение...":"Сохранить"}b.addEventListener("click",(function(e){p(y,m),y.reset(),a(v)})),y.addEventListener("submit",(function(n){!function(n){n.preventDefault(),N(!0,O);var r,o="url(".concat(h.value,")"),c=h.value;b.style.backgroundImage=o,r=c,fetch("".concat(e.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:e.headers,body:JSON.stringify({avatar:r})}).then((function(e){t(e)})),N(!1,O),i(v)}(n)})),O.addEventListener("submit",(function(n){n.preventDefault(),N(!0,O);var a=new Object;a.name=P.value,a.link=D.value,I.setAttribute("disabled",!0),I.classList.add(m.inactiveButtonClass),p(O,m);var u=r(a,null,!0,c,o,w);S.prepend(u),O.reset(),N(!1,O),function(n){fetch("".concat(e.baseUrl,"/cards"),{headers:e.headers,method:"POST",body:JSON.stringify({name:n.name,link:n.link})}).then((function(e){t(e)}))}(a),i(x)})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){!function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.error):t.setCustomValidity(""),t.validity.valid?s(e,t,n):function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.add(n.inputErrorClass),r.textContent=t.validationMessage,r.classList.add(n.errorClass)}(e,t,n)}(e,o,t),d(n,t,r)}))}))}(t,e)}))}(m),I.setAttribute("disabled",!0),I.classList.add(m.inactiveButtonClass)})();