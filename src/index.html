console.log('Версия 50');

import "./pages/index.css";
//import { initialCards } from "./scripts/cards";  НЕ АКТУАЛЬНО
import { createCard, likeCard, removeCard } from "./scripts/card";
import { openModal, closeModal, closeByOverlay } from "./scripts/modal";
import { enableValidation, clearValidation } from "./scripts/validation";

// Валидация
const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

import { getInitialCards, getProfileInfo, editProfileInfo, addNewCard, editProfileAvatar } from './scripts/api.js'

const titleProfile = document.querySelector(".profile__title");
let profileId = null;
let newCardThis = false;

const popupAvatar = document.querySelector('.popup_type_edit-avatar'); //окно смены аватара
const formAvatar = document.querySelector('form[name="edit-avatar"]'); //форма ввода данных для аватара
const avatarInput = formAvatar.querySelector('.popup__input_type_avatar'); //ввод адреса на новый аватар
const avatarProfile = document.querySelector('.profile__image'); //аватар на странице

//выводим информацию в профиле
getProfileInfo()
  .then((result) => {
    const jobInputValue = result.about;
    const nameInputValue = result.name;

    const descriptionProfile = document.querySelector(".profile__description");

    avatarProfile.setAttribute(
      "style",
      `background-image: url('${result.avatar}')`
    );
    titleProfile.textContent = nameInputValue;
    descriptionProfile.textContent = jobInputValue;

    profileId = result._id;

  })
  .catch((err) => {
    console.log(err); // выводим ошибку в консоль
  });

//выводим все карточки группы
getInitialCards()
  .then((result) => {
    // обрабатываем результат
    result.forEach(function (card) {
      const cardContent = createCard(card, profileId, newCardThis, likeCard, removeCard, openCard);
      placesList.append(cardContent);
    });
  })
  .catch((err) => {
    console.log(err); // выводим ошибку в консоль
  });


// @todo: DOM узлы
const placesList = document.querySelector(".places__list");

//Открытие и закрытие модальных окон

const popup = document.querySelectorAll(".popup");

//Окно редактирования
const buttonEditProfile = document.querySelector(".profile__edit-button");
const popupEditProfile = document.querySelector(".popup_type_edit");
buttonEditProfile.addEventListener("click", function () {
  clearValidation(formProfile, validationConfig);
  openModal(popupEditProfile);
  fillPopupEditInputs();
});

//Окно новой карточки
const buttonAddProfile = document.querySelector(".profile__add-button");
const popupAddProfile = document.querySelector(".popup_type_new-card");
buttonAddProfile.addEventListener("click", () => openModal(popupAddProfile));

//Функция открытия карточки
export function openCard(card) {
  const popupImage = document.querySelector(".popup_type_image");

  popupImage.querySelector(".popup__image").src = card.link;
  popupImage.querySelector(".popup__image").alt = card.name;
  popupImage.querySelector(".popup__caption").textContent = card.name;
  openModal(popupImage);
}

//Открытие и закрытие окон
document.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("popup__close")) {
    closeModal(evt.target.closest('.popup'));
  }
});

popup.forEach((popup) => popup.addEventListener("mousedown", closeByOverlay));

/*
// @todo: Вывести карточки на страницу НЕ АКТУАЛЬНО
initialCards.forEach(function (card) {
  const cardContent = createCard(card, likeCard, removeCard, openCard);
  placesList.append(cardContent);
});
*/

//Изменение данных профиля
const formProfile = document.querySelector('.popup__form[name="edit-profile"]');
const nameInput = formProfile.querySelector('input[name="name"]');
const jobInput = formProfile.querySelector('input[name="description"]');

function chanceFormProfile(evt) {
  evt.preventDefault();
  loading(true, formPlace);//начало загрузки

  const jobInputtValue = jobInput.value;
  const nameInputValue = nameInput.value;
  const titleProfile = document.querySelector(".profile__title");
  const descriptionProfile = document.querySelector(".profile__description");

  titleProfile.textContent = nameInputValue;
  descriptionProfile.textContent = jobInputtValue;

  editProfileInfo(nameInputValue, jobInputtValue);//меняем данные на сервере
  loading(false, formPlace);//конец загрузки
  closeModal(popupEditProfile);
}

//Автозаполнение формы
function fillPopupEditInputs() {
  const titleProfile = document.querySelector(".profile__title");
  const descriptionProfile = document.querySelector(".profile__description");
  nameInput.value = titleProfile.textContent;
  jobInput.value = descriptionProfile.textContent;
}

formProfile.addEventListener("submit", chanceFormProfile);

//Добавление новой карточки
const formPlace = document.querySelector('.popup__form[name="new-place"]');
const placeInput = formPlace.querySelector('input[name="place-name"]');
const linkInput = formPlace.querySelector('input[name="link"]');

const buttonNewCard = document.querySelector('#button_popup_type_new-card');

function createNewCard(evt) {
  evt.preventDefault();
  loading(true, formPlace);//начало загрузки
  const card = new Object();
  card.name = placeInput.value;
  card.link = linkInput.value;

  buttonNewCard.setAttribute("disabled", true);
  buttonNewCard.classList.add(validationConfig.inactiveButtonClass);
  clearValidation(formPlace, validationConfig); //очищаем поле

  newCardThis = true;
  const cardContent = createCard(card, profileId, newCardThis, likeCard, removeCard, openCard);
  placesList.prepend(cardContent);
  formPlace.reset();
  loading(false, formPlace);//конец загрузки
  newCardThis = false;

  addNewCard(card);//сохранение карточки на сервере
  closeModal(popupAddProfile);
}

//Функция обновления аватар
function chanceAvatarProfile(evt) {
  evt.preventDefault();
  loading(true, formPlace);//начало загрузки

  const avatarUrl = `url(${avatarInput.value})`;
  const avatar = avatarInput.value;
  avatarProfile.style.backgroundImage = avatarUrl;

  editProfileAvatar(avatar);
  loading(false, formPlace);//конец загрузки
  closeModal(popupAvatar);
};

//кнопка и аватарка, смена аватарки
avatarProfile.addEventListener('click', function (evt) {
  clearValidation(formAvatar, validationConfig);
  formAvatar.reset();
  openModal(popupAvatar);
});

//Сменить аватар
formAvatar.addEventListener('submit', function (evt) {
  chanceAvatarProfile(evt)
});

//Загрузка
function loading(status, popup) {
  const submitFormEnd = popup.querySelector('.popup__button')
  if (status) {
    submitFormEnd.textContent = 'Сохранение...'
  } else {
    submitFormEnd.textContent = 'Сохранить'
  };
};

formPlace.addEventListener("submit", createNewCard);

//Настройки валидации
enableValidation(validationConfig);
buttonNewCard.setAttribute("disabled", true);
buttonNewCard.classList.add(validationConfig.inactiveButtonClass);
