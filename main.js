(()=>{"use strict";var e={baseUrl:"https://mesto.nomoreparties.co/v1/wff-cohort-21",headers:{authorization:"c0209747-23dd-4fc1-a84e-60bef0930bc8","Content-Type":"application/json"}};function t(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}var n=document.querySelector("#card-template").content;function r(e,t,r,o,c,a){var i=n.querySelector(".card").cloneNode(!0);i.querySelector(".card__title").textContent=e.name;var u=i.querySelector(".card__image");u.src=e.link,u.alt=e.name,u.addEventListener("click",(function(){return a(e)}));var s=i.querySelector(".card__like-sum");s.textContent=e.likes.length;var l=i.querySelector(".card__like-button");l.addEventListener("click",(function(){return o(s,l,e)})),e.likes.forEach((function(e){e._id===t&&l.classList.add("card__like-button_is-active")})),e.likes.some((function(e){return e._id===t}))&&l.classList.add("card__like-button_is-active");var d=i.querySelector(".card__delete-button");return r||e.owner._id===t?d.addEventListener("click",(function(){return c(e,i)})):d.remove(),i}function o(n,r){!function(n){fetch("".concat(e.baseUrl,"/cards/").concat(n._id),{headers:e.headers,method:"DELETE"}).then((function(e){t(e)}))}(n),r.remove()}function c(n,r,o){r.classList.contains("card__like-button_is-active")?(function(n){fetch("".concat(e.baseUrl,"/cards/likes/").concat(n._id),{headers:e.headers,method:"DELETE"}).then((function(e){t(e)}))}(o),n.textContent--,r.classList.remove("card__like-button_is-active")):(function(n){fetch("".concat(e.baseUrl,"/cards/likes/").concat(n._id),{headers:e.headers,method:"PUT"}).then((function(e){t(e)}))}(o),n.textContent++,r.classList.add("card__like-button_is-active"))}function a(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",u)}function i(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",u)}function u(e){"Escape"===e.key&&i(document.querySelector(".popup_is-opened"))}function s(e){e.target.matches(".popup_is-opened, .popup__close")&&i(document.querySelector(".popup_is-opened"))}var l=function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));r&&(t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent="")},d=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(n.removeAttribute("disabled",!1),n.classList.remove(t.inactiveButtonClass)):(n.setAttribute("disabled",!0),n.classList.add(t.inactiveButtonClass))};function p(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(n){return l(e,n,t)})),d(n,t,r)}console.log("Версия 43");var _={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},f=document.querySelector(".profile__title"),m=null,v=!1,y=document.querySelector(".popup_type_edit-avatar"),h=document.querySelector('form[name="edit-avatar"]'),S=h.querySelector(".popup__input_type_avatar"),b=document.querySelector(".profile__image");fetch("".concat(e.baseUrl,"/users/me"),{headers:e.headers}).then((function(e){return t(e)})).then((function(e){var t=e.about,n=e.name,r=e.avatar.avatar;console.log("Вывели аватар с сервера");var o=document.querySelector(".profile__description");b.style.backgroundImage=r.value,f.textContent=n,o.textContent=t,m=e._id})).catch((function(e){console.log(e)})),fetch("".concat(e.baseUrl,"/cards"),{headers:e.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){e.forEach((function(e){var t=r(e,m,v,c,o,x);q.append(t)}))})).catch((function(e){console.log(e)}));var q=document.querySelector(".places__list"),k=document.querySelectorAll(".popup"),L=document.querySelector(".profile__edit-button"),E=document.querySelector(".popup_type_edit");L.addEventListener("click",(function(){p(A,_),a(E),function(){var e=document.querySelector(".profile__title"),t=document.querySelector(".profile__description");U.value=e.textContent,w.value=t.textContent}()}));var C=document.querySelector(".profile__add-button"),g=document.querySelector(".popup_type_new-card");function x(e){var t=document.querySelector(".popup_type_image");t.querySelector(".popup__image").src=e.link,t.querySelector(".popup__image").alt=e.name,t.querySelector(".popup__caption").textContent=e.name,a(t)}C.addEventListener("click",(function(){return a(g)})),document.addEventListener("click",(function(e){e.target.classList.contains("popup__close")&&i(e.target.closest(".popup"))})),k.forEach((function(e){return e.addEventListener("mousedown",s)}));var A=document.querySelector('.popup__form[name="edit-profile"]'),U=A.querySelector('input[name="name"]'),w=A.querySelector('input[name="description"]');A.addEventListener("submit",(function(n){n.preventDefault();var r,o,c=w.value,a=U.value,u=document.querySelector(".profile__title"),s=document.querySelector(".profile__description");u.textContent=a,s.textContent=c,i(E),r=a,o=c,fetch("".concat(e.baseUrl,"/users/me"),{method:"PATCH",headers:e.headers,body:JSON.stringify({name:r,about:o})}).then((function(e){return t(e)}))}));var B=document.querySelector('.popup__form[name="new-place"]'),T=B.querySelector('input[name="place-name"]'),j=B.querySelector('input[name="link"]'),P=document.querySelector("#button_popup_type_new-card");b.addEventListener("click",(function(e){p(h,_),h.reset(),a(y)})),h.addEventListener("submit",(function(n){!function(n){n.preventDefault();var r,o="url(".concat(S.value,")"),c=S.value;b.style.backgroundImage=o,console.log(c),r=c,fetch("".concat(e.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:e.headers,body:JSON.stringify({avatar:r})}).then((function(e){t(e)})),i(y)}(n)})),B.addEventListener("submit",(function(n){n.preventDefault();var a=new Object;a.name=T.value,a.link=j.value,P.setAttribute("disabled",!0),P.classList.add(_.inactiveButtonClass),p(B,_);var u=r(a,m,v=!0,c,o,x);q.prepend(u),B.reset(),i(g),v=!1,function(n){fetch("".concat(e.baseUrl,"/cards"),{headers:e.headers,method:"POST",body:JSON.stringify({name:n.name,link:n.link})}).then((function(e){t(e)}))}(a)})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){!function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.error):t.setCustomValidity(""),t.validity.valid?l(e,t,n):function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.add(n.inputErrorClass),r.textContent=t.validationMessage,r.classList.add(n.errorClass)}(e,t,n)}(e,o,t),d(n,t,r)}))}))}(t,e)}))}(_),P.setAttribute("disabled",!0),P.classList.add(_.inactiveButtonClass)})();