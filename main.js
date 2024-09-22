(()=>{"use strict";var e={baseUrl:"https://mesto.nomoreparties.co/v1/wff-cohort-21",headers:{authorization:"c0209747-23dd-4fc1-a84e-60bef0930bc8","Content-Type":"application/json"}};function t(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}var n=document.querySelector("#card-template").content;function o(e,t,o,r,c,a){var i=n.querySelector(".card").cloneNode(!0);i.querySelector(".card__title").textContent=e.name;var u=i.querySelector(".card__image");u.src=e.link,u.alt=e.name,u.addEventListener("click",(function(){return a(e)}));var s=i.querySelector(".card__like-sum"),l=i.querySelector(".card__like-button");l.addEventListener("click",(function(){return r(s,l,e)})),o&&(s.textContent=e.likes.length,e.likes.forEach((function(n){n._id===t&&l.classList.add("card__like-button_is-active"),e.likes.some((function(e){return e._id===t}))&&l.classList.add("card__like-button_is-active")})));var d=i.querySelector(".card__delete-button");return o||e.owner._id===t?d.addEventListener("click",(function(){return c(e,i)})):d.remove(),i}function r(n,o){!function(n){fetch("".concat(e.baseUrl,"/cards/").concat(n._id),{headers:e.headers,method:"DELETE"}).then((function(e){t(e)}))}(n),o.remove()}function c(n,o,r){o.classList.contains("card__like-button_is-active")?(function(n){fetch("".concat(e.baseUrl,"/cards/likes/").concat(n._id),{headers:e.headers,method:"DELETE"}).then((function(e){t(e)}))}(r),n.textContent--,o.classList.remove("card__like-button_is-active")):(function(n){fetch("".concat(e.baseUrl,"/cards/likes/").concat(n._id),{headers:e.headers,method:"PUT"}).then((function(e){t(e)}))}(r),n.textContent++,o.classList.add("card__like-button_is-active"))}function a(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",u)}function i(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",u)}function u(e){"Escape"===e.key&&i(document.querySelector(".popup_is-opened"))}function s(e){e.target.matches(".popup_is-opened, .popup__close")&&i(document.querySelector(".popup_is-opened"))}var l=function(e,t,n){var o=e.querySelector(".".concat(t.id,"-error"));o&&(t.classList.remove(n.inputErrorClass),o.classList.remove(n.errorClass),o.textContent="")},d=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(n.removeAttribute("disabled",!1),n.classList.remove(t.inactiveButtonClass)):(n.setAttribute("disabled",!0),n.classList.add(t.inactiveButtonClass))};function p(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),o=e.querySelector(t.submitButtonSelector);n.forEach((function(n){return l(e,n,t)})),d(n,t,o)}console.log("Версия 51");var _={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},f=document.querySelector(".profile__title"),m=null,v=document.querySelector(".popup_type_edit-avatar"),y=document.querySelector('form[name="edit-avatar"]'),S=y.querySelector(".popup__input_type_avatar"),h=document.querySelector(".profile__image");fetch("".concat(e.baseUrl,"/users/me"),{headers:e.headers}).then((function(e){t(e)})).then((function(e){var t=e.about,n=e.name,o=document.querySelector(".profile__description");h.setAttribute("style","background-image: url('".concat(e.avatar,"')")),f.textContent=n,o.textContent=t,m=e._id})).catch((function(e){console.log(e)})),fetch("".concat(e.baseUrl,"/cards"),{headers:e.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){e.forEach((function(e){var t=o(e,m,!1,c,r,g);b.append(t)}))})).catch((function(e){console.log(e)}));var b=document.querySelector(".places__list"),q=document.querySelectorAll(".popup"),k=document.querySelector(".profile__edit-button"),L=document.querySelector(".popup_type_edit");k.addEventListener("click",(function(){p(x,_),a(L),function(){var e=document.querySelector(".profile__title"),t=document.querySelector(".profile__description");A.value=e.textContent,U.value=t.textContent}()}));var C=document.querySelector(".profile__add-button"),E=document.querySelector(".popup_type_new-card");function g(e){var t=document.querySelector(".popup_type_image");t.querySelector(".popup__image").src=e.link,t.querySelector(".popup__image").alt=e.name,t.querySelector(".popup__caption").textContent=e.name,a(t)}C.addEventListener("click",(function(){return a(E)})),document.addEventListener("click",(function(e){e.target.classList.contains("popup__close")&&i(e.target.closest(".popup"))})),q.forEach((function(e){return e.addEventListener("mousedown",s)}));var x=document.querySelector('.popup__form[name="edit-profile"]'),A=x.querySelector('input[name="name"]'),U=x.querySelector('input[name="description"]');x.addEventListener("submit",(function(n){n.preventDefault(),P(!0,w);var o,r,c=U.value,a=A.value,u=document.querySelector(".profile__title"),s=document.querySelector(".profile__description");u.textContent=a,s.textContent=c,o=a,r=c,fetch("".concat(e.baseUrl,"/users/me"),{method:"PATCH",headers:e.headers,body:JSON.stringify({name:o,about:r})}).then((function(e){t(e)})),P(!1,w),i(L)}));var w=document.querySelector('.popup__form[name="new-place"]'),B=w.querySelector('input[name="place-name"]'),T=w.querySelector('input[name="link"]'),j=document.querySelector("#button_popup_type_new-card");function P(e,t){t.querySelector(".popup__button").textContent=e?"Сохранение...":"Сохранить"}h.addEventListener("click",(function(e){p(y,_),y.reset(),a(v)})),y.addEventListener("submit",(function(n){!function(n){n.preventDefault(),P(!0,w);var o,r="url(".concat(S.value,")"),c=S.value;h.style.backgroundImage=r,o=c,fetch("".concat(e.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:e.headers,body:JSON.stringify({avatar:o})}).then((function(e){t(e)})),P(!1,w),i(v)}(n)})),w.addEventListener("submit",(function(n){n.preventDefault(),P(!0,w);var a=new Object;a.name=B.value,a.link=T.value,j.setAttribute("disabled",!0),j.classList.add(_.inactiveButtonClass),p(w,_);var u=o(a,m,!0,c,r,g);b.prepend(u),w.reset(),P(!1,w),function(n){fetch("".concat(e.baseUrl,"/cards"),{headers:e.headers,method:"POST",body:JSON.stringify({name:n.name,link:n.link})}).then((function(e){t(e)}))}(a),i(E)})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){!function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),o=e.querySelector(t.submitButtonSelector);n.forEach((function(r){r.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.error):t.setCustomValidity(""),t.validity.valid?l(e,t,n):function(e,t,n){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(n.inputErrorClass),o.textContent=t.validationMessage,o.classList.add(n.errorClass)}(e,t,n)}(e,r,t),d(n,t,o)}))}))}(t,e)}))}(_),j.setAttribute("disabled",!0),j.classList.add(_.inactiveButtonClass)})();