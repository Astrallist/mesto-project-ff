(()=>{"use strict";var e={baseUrl:"https://mesto.nomoreparties.co/v1/wff-cohort-21",headers:{authorization:"c0209747-23dd-4fc1-a84e-60bef0930bc8","Content-Type":"application/json"}};function t(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}var n=document.querySelector("#card-template").content;function r(e,t,r,o,c,a){var u=n.querySelector(".card").cloneNode(!0);u.querySelector(".card__title").textContent=e.name;var i=u.querySelector(".card__image");i.src=e.link,i.alt=e.name,i.addEventListener("click",(function(){return a(e)}));var l=u.querySelector(".card__like-sum"),s=u.querySelector(".card__like-button");s.addEventListener("click",(function(){return o(l,s,e)})),r||(l.textContent=e.likes.length,e.likes.forEach((function(n){n._id===t&&s.classList.add("card__like-button_is-active"),e.likes.some((function(e){return e._id===t}))&&s.classList.add("card__like-button_is-active")})));var d=u.querySelector(".card__delete-button");return r||e.owner._id===t?d.addEventListener("click",(function(){return c(e,u)})):d.remove(),u}function o(n,r){(function(n){return fetch("".concat(e.baseUrl,"/cards/").concat(n._id),{headers:e.headers,method:"DELETE"}).then((function(e){t(e)}))})(n).then((function(e){r.remove()}))}function c(n,r,o){r.classList.contains("card__like-button_is-active")?(console.log(o),function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n._id),{headers:e.headers,method:"DELETE"}).then((function(e){return t(e)}))}(o).then((function(e){r.classList.remove("card__like-button_is-active"),n.textContent=e.likes.length})).catch((function(e){return console.log(e)}))):function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n._id),{headers:e.headers,method:"PUT"}).then((function(e){return t(e)}))}(o).then((function(e){r.classList.add("card__like-button_is-active"),n.textContent=e.likes.length})).catch((function(e){return console.log(e)}))}function a(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",i)}function u(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",i)}function i(e){"Escape"===e.key&&u(document.querySelector(".popup_is-opened"))}function l(e){e.target.matches(".popup_is-opened, .popup__close")&&u(document.querySelector(".popup_is-opened"))}var s=function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));r&&(t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent="")},d=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(n.removeAttribute("disabled",!1),n.classList.remove(t.inactiveButtonClass)):(n.setAttribute("disabled",!0),n.classList.add(t.inactiveButtonClass))};function p(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(n){return s(e,n,t)})),d(n,t,r)}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}console.log("Версия 74");var m={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},_=document.querySelector(".profile__title"),v=null,y=document.querySelector(".popup_type_edit-avatar"),h=document.querySelector('form[name="edit-avatar"]'),b=h.querySelector(".popup__input_type_avatar"),S=document.querySelector(".profile__image"),q=document.querySelector(".places__list"),k=document.querySelector(".popup_type_image"),L=k.querySelector(".popup__image"),C=k.querySelector(".popup__caption"),E=document.querySelector('.popup__form[name="edit-profile"]'),g=E.querySelector('input[name="name"]'),A=E.querySelector('input[name="description"]'),x=document.querySelector(".profile__description"),w=document.querySelectorAll(".popup"),U=document.querySelector(".profile__edit-button"),j=document.querySelector(".popup_type_edit");U.addEventListener("click",(function(){p(E,m),a(j),g.value=_.textContent,A.value=x.textContent}));var B=document.querySelector(".profile__add-button"),O=document.querySelector(".popup_type_new-card");function T(e){L.src=e.link,L.alt=e.name,C.textContent=e.name,a(k)}B.addEventListener("click",(function(){return a(O)})),document.addEventListener("click",(function(e){e.target.classList.contains("popup__close")&&u(e.target.closest(".popup"))})),w.forEach((function(e){return e.addEventListener("mousedown",l)})),E.addEventListener("submit",(function(n){var r,o;n.preventDefault(),V(!0,I),(r=nameInputValue,o=jobInputtValue,fetch("".concat(e.baseUrl,"/users/me"),{method:"PATCH",headers:e.headers,body:JSON.stringify({name:r,about:o})}).then((function(e){t(e)}))).then((function(e){var t=A.value,n=g.value;_.textContent=n,x.textContent=t,u(j)}))}));var I=document.querySelector('.popup__form[name="new-place"]'),P=I.querySelector('input[name="place-name"]'),D=I.querySelector('input[name="link"]'),N=document.querySelector("#button_popup_type_new-card");function V(e,t){t.querySelector(".popup__button").textContent=e?"Сохранение...":"Сохранить"}S.addEventListener("click",(function(e){p(h,m),h.reset(),a(y)})),h.addEventListener("submit",(function(n){!function(n){var r;n.preventDefault(),V(!0,I),(r=b.value,fetch("".concat(e.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:e.headers,body:JSON.stringify({avatar:r})}).then((function(e){t(e)}))).then((function(e){S.style.backgroundImage="url(".concat(b.value,")"),u(y)})).finally((function(){V(!1,I)}))}(n)})),I.addEventListener("submit",(function(n){n.preventDefault(),V(!0,I);var a=new Object;a.name=P.value,a.link=D.value,N.setAttribute("disabled",!0),N.classList.add(m.inactiveButtonClass),p(I,m);var i=r(a,v,!0,c,o,T);q.prepend(i),I.reset(),V(!1,I),function(n){fetch("".concat(e.baseUrl,"/cards"),{headers:e.headers,method:"POST",body:JSON.stringify({name:n.name,link:n.link})}).then((function(e){t(e)}))}(a),u(O)})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){!function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.error):t.setCustomValidity(""),t.validity.valid?s(e,t,n):function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.add(n.inputErrorClass),r.textContent=t.validationMessage,r.classList.add(n.errorClass)}(e,t,n)}(e,o,t),d(n,t,r)}))}))}(t,e)}))}(m),N.setAttribute("disabled",!0),N.classList.add(m.inactiveButtonClass),Promise.all([fetch("".concat(e.baseUrl,"/users/me"),{headers:e.headers}).then(t),fetch("".concat(e.baseUrl,"/cards"),{headers:e.headers}).then(t)]).then((function(e){var t,n,a=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,u=[],i=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=c.call(n)).done)&&(u.push(r.value),u.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(t,n)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=a[0],i=a[1],l=u.about,s=u.name,d=document.querySelector(".profile__description");S.setAttribute("style","background-image: url('".concat(u.avatar,"')")),_.textContent=s,d.textContent=l,v=u._id,i.forEach((function(e){var t=r(e,v,!1,c,o,T);q.append(t)}))})).catch((function(e){console.log(e)}))})();