(()=>{"use strict";var e={baseUrl:"https://mesto.nomoreparties.co/v1/wff-cohort-21",headers:{authorization:"c0209747-23dd-4fc1-a84e-60bef0930bc8","Content-Type":"application/json"}};function t(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}var n=document.querySelector("#card-template").content;function o(e,t,o,r,c,i){var u=n.querySelector(".card").cloneNode(!0);u.querySelector(".card__title").textContent=e.name;var a=u.querySelector(".card__image");a.src=e.link,a.alt=e.name,a.addEventListener("click",(function(){return i(e)}));var s=u.querySelector(".card__like-sum"),l=u.querySelector(".card__like-button");l.addEventListener("click",(function(){return r(s,l,e)}));var d=u.querySelector(".card__delete-button");return o||e.owner._id===t?d.addEventListener("click",(function(){return c(e,u)})):d.remove(),u}function r(n,o){!function(n){fetch("".concat(e.baseUrl,"/cards/").concat(n._id),{headers:e.headers,method:"DELETE"}).then((function(e){t(e)}))}(n),o.remove()}function c(n,o,r){o.classList.contains("card__like-button_is-active")?function(n){return fetch("".concat(e.baseUrl,"/cards/like/").concat(n._id),{headers:e.headers,method:"DELETE"}).then((function(e){t(e)}))}(r._id).then((function(e){o.classList.toggle("card__like-button_is-active"),n.textContent=e.likes.length})).catch((function(e){console.error("Произошла ошибка при удалении лайка:",e)})):function(n){return fetch("".concat(e.baseUrl,"/cards/like/").concat(n._id),{headers:e.headers,method:"PUT"}).then((function(e){t(e)}))}(r._id).then((function(e){o.classList.toggle("card__like-button_is-active"),n.textContent=e.likes.length})).catch((function(e){console.error("Произошла ошибка при добавлении лайка:",e)}))}function i(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",a)}function u(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",a)}function a(e){"Escape"===e.key&&u(document.querySelector(".popup_is-opened"))}function s(e){e.target.matches(".popup_is-opened, .popup__close")&&u(document.querySelector(".popup_is-opened"))}var l=function(e,t,n){var o=e.querySelector(".".concat(t.id,"-error"));o&&(t.classList.remove(n.inputErrorClass),o.classList.remove(n.errorClass),o.textContent="")},d=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(n.removeAttribute("disabled",!1),n.classList.remove(t.inactiveButtonClass)):(n.setAttribute("disabled",!0),n.classList.add(t.inactiveButtonClass))};function p(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),o=e.querySelector(t.submitButtonSelector);n.forEach((function(n){return l(e,n,t)})),d(n,t,o)}var f={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},_=document.querySelector(".profile__title"),m=null,v=!1;fetch("".concat(e.baseUrl,"/users/me"),{headers:e.headers}).then((function(e){return t(e)})).then((function(e){var t=e.about,n=e.name,o=document.querySelector(".profile__description");_.textContent=n,o.textContent=t,m=e._id})).catch((function(e){console.log(e)})),fetch("".concat(e.baseUrl,"/cards"),{headers:e.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){e.forEach((function(e){var t=o(e,m,v,c,r,C);y.append(t)}))})).catch((function(e){console.log(e)}));var y=document.querySelector(".places__list"),h=document.querySelectorAll(".popup"),S=document.querySelector(".profile__edit-button"),b=document.querySelector(".popup_type_edit");S.addEventListener("click",(function(){p(E,f),i(b),function(){var e=document.querySelector(".profile__title"),t=document.querySelector(".profile__description");k.value=e.textContent,g.value=t.textContent}()}));var q=document.querySelector(".profile__add-button"),L=document.querySelector(".popup_type_new-card");function C(e){var t=document.querySelector(".popup_type_image");t.querySelector(".popup__image").src=e.link,t.querySelector(".popup__image").alt=e.name,t.querySelector(".popup__caption").textContent=e.name,i(t)}q.addEventListener("click",(function(){return i(L)})),document.addEventListener("click",(function(e){e.target.classList.contains("popup__close")&&u(e.target.closest(".popup"))})),h.forEach((function(e){return e.addEventListener("mousedown",s)}));var E=document.querySelector('.popup__form[name="edit-profile"]'),k=E.querySelector('input[name="name"]'),g=E.querySelector('input[name="description"]');E.addEventListener("submit",(function(n){n.preventDefault();var o,r,c=g.value,i=k.value,a=document.querySelector(".profile__title"),s=document.querySelector(".profile__description");a.textContent=i,s.textContent=c,u(b),o=i,r=c,fetch("".concat(e.baseUrl,"/users/me"),{method:"PATCH",headers:e.headers,body:JSON.stringify({name:o,about:r})}).then((function(e){return t(e)}))}));var x=document.querySelector('.popup__form[name="new-place"]'),A=x.querySelector('input[name="place-name"]'),w=x.querySelector('input[name="link"]'),U=document.querySelector("#button_popup_type_new-card");x.addEventListener("submit",(function(n){n.preventDefault();var i=new Object;i.name=A.value,i.link=w.value,U.setAttribute("disabled",!0),U.classList.add(f.inactiveButtonClass),p(x,f);var a=o(i,m,v=!0,c,r,C);y.prepend(a),x.reset(),u(L),v=!1,function(n){fetch("".concat(e.baseUrl,"/cards"),{headers:e.headers,method:"POST",body:JSON.stringify({name:n.name,link:n.link})}).then((function(e){t(e)}))}(i)})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){!function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),o=e.querySelector(t.submitButtonSelector);n.forEach((function(r){r.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.error):t.setCustomValidity(""),t.validity.valid?l(e,t,n):function(e,t,n){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(n.inputErrorClass),o.textContent=t.validationMessage,o.classList.add(n.errorClass)}(e,t,n)}(e,r,t),d(n,t,o)}))}))}(t,e)}))}(f),U.setAttribute("disabled",!0),U.classList.add(f.inactiveButtonClass)})();