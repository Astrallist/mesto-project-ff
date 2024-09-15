(()=>{"use strict";var e={baseUrl:"https://mesto.nomoreparties.co/v1/wff-cohort-21",headers:{authorization:"c0209747-23dd-4fc1-a84e-60bef0930bc8","Content-Type":"application/json"}};function t(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}var n=document.querySelector("#card-template").content;function r(e,t,r,o,c,u){var a=n.querySelector(".card").cloneNode(!0);a.querySelector(".card__title").textContent=e.name;var i=a.querySelector(".card__image");i.src=e.link,i.alt=e.name,i.addEventListener("click",(function(){return u(e)}));var s=a.querySelector(".card__like-button");s.addEventListener("click",(function(){return o(s)}));var l=a.querySelector(".card__delete-button");return r||e.owner._id===t?l.addEventListener("click",(function(){return c(e,a)})):l.remove(),a}function o(n,r){!function(n){fetch("".concat(e.baseUrl,"/cards/").concat(n._id),{headers:e.headers,method:"DELETE"}).then((function(e){t(e)}))}(n),r.remove()}function c(e){e.classList.toggle("card__like-button_is-active")}function u(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",i)}function a(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",i)}function i(e){"Escape"===e.key&&a(document.querySelector(".popup_is-opened"))}function s(e){e.target.matches(".popup_is-opened, .popup__close")&&a(document.querySelector(".popup_is-opened"))}var l=function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));r&&(t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent="")},d=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(n.removeAttribute("disabled",!1),n.classList.remove(t.inactiveButtonClass)):(n.setAttribute("disabled",!0),n.classList.add(t.inactiveButtonClass))};function p(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(n){return l(e,n,t)})),d(n,t,r)}var m={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},f=document.querySelector(".profile__title"),_=null,v=!1;fetch("".concat(e.baseUrl,"/users/me"),{headers:e.headers}).then((function(e){return t(e)})).then((function(e){var t=e.about,n=e.name,r=document.querySelector(".profile__description");f.textContent=n,r.textContent=t,_=e._id})).catch((function(e){console.log(e)})),fetch("".concat(e.baseUrl,"/cards"),{headers:e.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){e.forEach((function(e){var t=r(e,_,v,c,o,L);y.append(t)}))})).catch((function(e){console.log(e)}));var y=document.querySelector(".places__list"),S=document.querySelectorAll(".popup"),h=document.querySelector(".profile__edit-button"),q=document.querySelector(".popup_type_edit");h.addEventListener("click",(function(){p(E,m),u(q),function(){var e=document.querySelector(".profile__title"),t=document.querySelector(".profile__description");k.value=e.textContent,g.value=t.textContent}()}));var b=document.querySelector(".profile__add-button"),C=document.querySelector(".popup_type_new-card");function L(e){var t=document.querySelector(".popup_type_image");t.querySelector(".popup__image").src=e.link,t.querySelector(".popup__image").alt=e.name,t.querySelector(".popup__caption").textContent=e.name,u(t)}b.addEventListener("click",(function(){return u(C)})),document.addEventListener("click",(function(e){e.target.classList.contains("popup__close")&&a(e.target.closest(".popup"))})),S.forEach((function(e){return e.addEventListener("mousedown",s)}));var E=document.querySelector('.popup__form[name="edit-profile"]'),k=E.querySelector('input[name="name"]'),g=E.querySelector('input[name="description"]');E.addEventListener("submit",(function(n){n.preventDefault();var r,o,c=g.value,u=k.value,i=document.querySelector(".profile__title"),s=document.querySelector(".profile__description");i.textContent=u,s.textContent=c,a(q),r=u,o=c,fetch("".concat(e.baseUrl,"/users/me"),{method:"PATCH",headers:e.headers,body:JSON.stringify({name:r,about:o})}).then((function(e){return t(e)}))}));var A=document.querySelector('.popup__form[name="new-place"]'),x=A.querySelector('input[name="place-name"]'),w=A.querySelector('input[name="link"]'),B=document.querySelector("#button_popup_type_new-card");A.addEventListener("submit",(function(n){n.preventDefault();var u=new Object;u.name=x.value,u.link=w.value,B.setAttribute("disabled",!0),B.classList.add(m.inactiveButtonClass),p(A,m);var i=r(u,_,v=!0,c,o,L);y.prepend(i),A.reset(),a(C),v=!1,function(n){fetch("".concat(e.baseUrl,"/cards"),{headers:e.headers,method:"POST",body:JSON.stringify({name:n.name,link:n.link})}).then((function(e){t(e)}))}(u)})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){!function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.error):t.setCustomValidity(""),t.validity.valid?l(e,t,n):function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.add(n.inputErrorClass),r.textContent=t.validationMessage,r.classList.add(n.errorClass)}(e,t,n)}(e,o,t),d(n,t,r)}))}))}(t,e)}))}(m),B.setAttribute("disabled",!0),B.classList.add(m.inactiveButtonClass)})();