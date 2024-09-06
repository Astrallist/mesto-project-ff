(()=>{"use strict";var e=document.querySelector("#card-template").content;function t(t,n,o,r){var a=e.querySelector(".card").cloneNode(!0);a.querySelector(".card__title").textContent=t.name;var c=a.querySelector(".card__image");c.src=t.link,c.alt=t.name,c.addEventListener("click",(function(){return r(t)}));var i=a.querySelector(".card__like-button");return i.addEventListener("click",(function(){return n(i)})),a.querySelector(".card__delete-button").addEventListener("click",(function(){return o(a)})),a}function n(e){e.remove()}function o(e){e.classList.toggle("card__like-button_is-active")}function r(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",c)}function a(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",c)}function c(e){"Escape"===e.key&&a(document.querySelector(".popup_is-opened"))}function i(e){e.target.matches(".popup_is-opened, .popup__close")&&a(document.querySelector(".popup_is-opened"))}var u=document.querySelector(".places__list"),p=document.querySelectorAll(".popup"),d=document.querySelector(".profile__edit-button"),l=document.querySelector(".popup_type_edit");d.addEventListener("click",(function(){var e,t;clearValidation(f,validationConfig),r(l),e=document.querySelector(".profile__title"),t=document.querySelector(".profile__description"),v.value=e.textContent,y.value=t.textContent}));var s=document.querySelector(".profile__add-button"),m=document.querySelector(".popup_type_new-card");function _(e){var t=document.querySelector(".popup_type_image");t.querySelector(".popup__image").src=e.link,t.querySelector(".popup__image").alt=e.name,t.querySelector(".popup__caption").textContent=e.name,r(t)}s.addEventListener("click",(function(){return r(m)})),document.addEventListener("click",(function(e){e.target.classList.contains("popup__close")&&a(e.target.closest(".popup"))})),p.forEach((function(e){return e.addEventListener("mousedown",i)})),[{name:"Новороссийск",link:"https://images.unsplash.com/photo-1645865612436-fe9a0a480720?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},{name:"Москва",link:"https://media.istockphoto.com/id/815967526/photo/reflection-of-the-cathedral-of-christ-the-savior-and-the-water-tower.webp?b=1&s=170667a&w=0&k=20&c=dwI5LYLuuO3LXGa80uFOcstmw_j1v7qGlHxnlYKZ900="},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}].forEach((function(e){var r=t(e,o,n,_);u.append(r)}));var f=document.querySelector('.popup__form[name="edit-profile"]'),v=f.querySelector('input[name="name"]'),y=f.querySelector('input[name="description"]');f.addEventListener("submit",(function(e){e.preventDefault();var t=y.value,n=v.value,o=document.querySelector(".profile__title"),r=document.querySelector(".profile__description");o.textContent=n,r.textContent=t,a(l)}));var q=document.querySelector('.popup__form[name="new-place"]'),S=q.querySelector('input[name="place-name"]'),k=q.querySelector('input[name="link"]'),b=document.querySelector("#button_popup_type_new-card");q.addEventListener("submit",(function(e){e.preventDefault();var r=new Object;r.name=S.value,r.link=k.value,b.setAttribute("disabled",!0),b.classList.add(validationConfig.inactiveButtonClass),clearValidation(q,validationConfig);var c=t(r,o,n,_);u.prepend(c),q.reset(),a(m)})),enableValidation(validationConfig),b.setAttribute("disabled",!0),b.classList.add(validationConfig.inactiveButtonClass)})();