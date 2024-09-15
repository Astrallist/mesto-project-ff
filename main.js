(()=>{"use strict";var e=[{name:"Новороссийск",link:"https://images.unsplash.com/photo-1645865612436-fe9a0a480720?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},{name:"Москва",link:"https://media.istockphoto.com/id/815967526/photo/reflection-of-the-cathedral-of-christ-the-savior-and-the-water-tower.webp?b=1&s=170667a&w=0&k=20&c=dwI5LYLuuO3LXGa80uFOcstmw_j1v7qGlHxnlYKZ900="},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],t=document.querySelector("#card-template").content;function o(e,o,r,n){var c=t.querySelector(".card").cloneNode(!0);c.querySelector(".card__title").textContent=e.name;var a=c.querySelector(".card__image");a.src=e.link,a.alt=e.name,a.addEventListener("click",(function(){return n(e)}));var i=c.querySelector(".card__like-button");return i.addEventListener("click",(function(){return o(i)})),c.querySelector(".card__delete-button").addEventListener("click",(function(){return r(c)})),c}function r(e){e.remove()}function n(e){e.classList.toggle("card__like-button_is-active")}function c(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",i)}function a(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",i)}function i(e){"Escape"===e.key&&a(document.querySelector(".popup_is-opened"))}function u(e){e.target.matches(".popup_is-opened, .popup__close")&&a(document.querySelector(".popup_is-opened"))}var s=function(e,t,o){var r=e.querySelector(".".concat(t.id,"-error"));r&&(t.classList.remove(o.inputErrorClass),r.classList.remove(o.errorClass),r.textContent="")},l=function(e,t,o){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(o.removeAttribute("disabled",!1),o.classList.remove(t.inactiveButtonClass)):(o.setAttribute("disabled",!0),o.classList.add(t.inactiveButtonClass))};function p(e,t){var o=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);o.forEach((function(o){return s(e,o,t)})),l(o,t,r)}var d={baseUrl:"https://mesto.nomoreparties.co/v1/wff-cohort-21",headers:{authorization:"c0209747-23dd-4fc1-a84e-60bef0930bc8","Content-Type":"application/json"}},m={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};fetch("".concat(d.baseUrl,"/cards"),{headers:d.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(t){console.log(res.ok),e.forEach((function(e){var t=o(e,n,r,b);f.append(t)}))})).catch((function(e){console.log(e)}));var f=document.querySelector(".places__list"),_=document.querySelectorAll(".popup"),v=document.querySelector(".profile__edit-button"),y=document.querySelector(".popup_type_edit");v.addEventListener("click",(function(){var e,t;p(h,m),c(y),e=document.querySelector(".profile__title"),t=document.querySelector(".profile__description"),k.value=e.textContent,L.value=t.textContent}));var S=document.querySelector(".profile__add-button"),q=document.querySelector(".popup_type_new-card");function b(e){var t=document.querySelector(".popup_type_image");t.querySelector(".popup__image").src=e.link,t.querySelector(".popup__image").alt=e.name,t.querySelector(".popup__caption").textContent=e.name,c(t)}S.addEventListener("click",(function(){return c(q)})),document.addEventListener("click",(function(e){e.target.classList.contains("popup__close")&&a(e.target.closest(".popup"))})),_.forEach((function(e){return e.addEventListener("mousedown",u)}));var h=document.querySelector('.popup__form[name="edit-profile"]'),k=h.querySelector('input[name="name"]'),L=h.querySelector('input[name="description"]');h.addEventListener("submit",(function(e){e.preventDefault();var t=L.value,o=k.value,r=document.querySelector(".profile__title"),n=document.querySelector(".profile__description");r.textContent=o,n.textContent=t,a(y)}));var C=document.querySelector('.popup__form[name="new-place"]'),E=C.querySelector('input[name="place-name"]'),x=C.querySelector('input[name="link"]'),g=document.querySelector("#button_popup_type_new-card");C.addEventListener("submit",(function(e){e.preventDefault();var t=new Object;t.name=E.value,t.link=x.value,g.setAttribute("disabled",!0),g.classList.add(m.inactiveButtonClass),p(C,m);var c=o(t,n,r,b);f.prepend(c),C.reset(),a(q)})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){!function(e,t){var o=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);o.forEach((function(n){n.addEventListener("input",(function(){!function(e,t,o){t.validity.patternMismatch?t.setCustomValidity(t.dataset.error):t.setCustomValidity(""),t.validity.valid?s(e,t,o):function(e,t,o){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.add(o.inputErrorClass),r.textContent=t.validationMessage,r.classList.add(o.errorClass)}(e,t,o)}(e,n,t),l(o,t,r)}))}))}(t,e)}))}(m),g.setAttribute("disabled",!0),g.classList.add(m.inactiveButtonClass)})();