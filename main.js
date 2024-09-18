(()=>{"use strict";var e={baseUrl:"https://mesto.nomoreparties.co/v1/wff-cohort-21",headers:{authorization:"c0209747-23dd-4fc1-a84e-60bef0930bc8","Content-Type":"application/json"}};function t(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}var n=document.querySelector("#card-template").content;function o(e,t,o,r,c,i){var a=n.querySelector(".card").cloneNode(!0);a.querySelector(".card__title").textContent=e.name;var u=a.querySelector(".card__image");u.src=e.link,u.alt=e.name,u.addEventListener("click",(function(){return i(e)}));var s=a.querySelector(".card__like-sum");s.textContent=e.likes.length;var l=a.querySelector(".card__like-button");l.addEventListener("click",(function(){return r(s,l,e)})),e.likes.some((function(){l.classList.add("card__like-button_is-active")}),user);var d=a.querySelector(".card__delete-button");return o||e.owner._id===t?d.addEventListener("click",(function(){return c(e,a)})):d.remove(),a}function r(n,o){!function(n){fetch("".concat(e.baseUrl,"/cards/").concat(n._id),{headers:e.headers,method:"DELETE"}).then((function(e){t(e)}))}(n),o.remove()}function c(n,o,r){o.classList.contains("card__like-button_is-active")?(function(n){fetch("".concat(e.baseUrl,"/cards/likes/").concat(n._id),{headers:e.headers,method:"DELETE"}).then((function(e){t(e)}))}(r),o.classList.remove("card__like-button_is-active"),n.textContent=r.likes.length):(function(n){fetch("".concat(e.baseUrl,"/cards/likes/").concat(n._id),{headers:e.headers,method:"PUT"}).then((function(e){t(e)}))}(r),o.classList.add("card__like-button_is-active"),n.textContent=r.likes.length)}function i(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",u)}function a(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",u)}function u(e){"Escape"===e.key&&a(document.querySelector(".popup_is-opened"))}function s(e){e.target.matches(".popup_is-opened, .popup__close")&&a(document.querySelector(".popup_is-opened"))}var l=function(e,t,n){var o=e.querySelector(".".concat(t.id,"-error"));o&&(t.classList.remove(n.inputErrorClass),o.classList.remove(n.errorClass),o.textContent="")},d=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(n.removeAttribute("disabled",!1),n.classList.remove(t.inactiveButtonClass)):(n.setAttribute("disabled",!0),n.classList.add(t.inactiveButtonClass))};function p(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),o=e.querySelector(t.submitButtonSelector);n.forEach((function(n){return l(e,n,t)})),d(n,t,o)}console.log("Версия 14");var _={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},f=document.querySelector(".profile__title"),m=null,v=!1;fetch("".concat(e.baseUrl,"/users/me"),{headers:e.headers}).then((function(e){return t(e)})).then((function(e){var t=e.about,n=e.name,o=document.querySelector(".profile__description");f.textContent=n,o.textContent=t,m=e._id,e._id})).catch((function(e){console.log(e)})),fetch("".concat(e.baseUrl,"/cards"),{headers:e.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){e.forEach((function(e){var t=o(e,m,v,c,r,L);y.append(t)}))})).catch((function(e){console.log(e)}));var y=document.querySelector(".places__list"),h=document.querySelectorAll(".popup"),S=document.querySelector(".profile__edit-button"),b=document.querySelector(".popup_type_edit");S.addEventListener("click",(function(){p(C,_),i(b),function(){var e=document.querySelector(".profile__title"),t=document.querySelector(".profile__description");E.value=e.textContent,g.value=t.textContent}()}));var q=document.querySelector(".profile__add-button"),k=document.querySelector(".popup_type_new-card");function L(e){var t=document.querySelector(".popup_type_image");t.querySelector(".popup__image").src=e.link,t.querySelector(".popup__image").alt=e.name,t.querySelector(".popup__caption").textContent=e.name,i(t)}q.addEventListener("click",(function(){return i(k)})),document.addEventListener("click",(function(e){e.target.classList.contains("popup__close")&&a(e.target.closest(".popup"))})),h.forEach((function(e){return e.addEventListener("mousedown",s)}));var C=document.querySelector('.popup__form[name="edit-profile"]'),E=C.querySelector('input[name="name"]'),g=C.querySelector('input[name="description"]');C.addEventListener("submit",(function(n){n.preventDefault();var o,r,c=g.value,i=E.value,u=document.querySelector(".profile__title"),s=document.querySelector(".profile__description");u.textContent=i,s.textContent=c,a(b),o=i,r=c,fetch("".concat(e.baseUrl,"/users/me"),{method:"PATCH",headers:e.headers,body:JSON.stringify({name:o,about:r})}).then((function(e){return t(e)}))}));var x=document.querySelector('.popup__form[name="new-place"]'),A=x.querySelector('input[name="place-name"]'),w=x.querySelector('input[name="link"]'),U=document.querySelector("#button_popup_type_new-card");x.addEventListener("submit",(function(n){n.preventDefault();var i=new Object;i.name=A.value,i.link=w.value,U.setAttribute("disabled",!0),U.classList.add(_.inactiveButtonClass),p(x,_);var u=o(i,m,v=!0,c,r,L);y.prepend(u),x.reset(),a(k),v=!1,function(n){fetch("".concat(e.baseUrl,"/cards"),{headers:e.headers,method:"POST",body:JSON.stringify({name:n.name,link:n.link})}).then((function(e){t(e)}))}(i)})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){!function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),o=e.querySelector(t.submitButtonSelector);n.forEach((function(r){r.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.error):t.setCustomValidity(""),t.validity.valid?l(e,t,n):function(e,t,n){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(n.inputErrorClass),o.textContent=t.validationMessage,o.classList.add(n.errorClass)}(e,t,n)}(e,r,t),d(n,t,o)}))}))}(t,e)}))}(_),U.setAttribute("disabled",!0),U.classList.add(_.inactiveButtonClass)})();