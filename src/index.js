console.log('Версия 78');

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

let profileId = null;

// @todo: DOM узлы
const titleProfile = document.querySelector(".profile__title");

const popupAvatar = document.querySelector('.popup_type_edit-avatar'); //окно смены аватара
const formAvatar = document.querySelector('form[name="edit-avatar"]'); //форма ввода данных для аватара
const avatarInput = formAvatar.querySelector('.popup__input_type_avatar'); //ввод адреса на новый аватар
const avatarProfile = document.querySelector('.profile__image'); //аватар на странице

const placesList = document.querySelector(".places__list");
const popupImage = document.querySelector(".popup_type_image");
const popupImage_image = popupImage.querySelector(".popup__image");
const popupImage_caption = popupImage.querySelector(".popup__caption");
const formProfile = document.querySelector('.popup__form[name="edit-profile"]');
const nameInput = formProfile.querySelector('input[name="name"]');
const jobInput = formProfile.querySelector('input[name="description"]');
const descriptionProfile = document.querySelector(".profile__description");

//Открытие и закрытие модальных окон
const popups = document.querySelectorAll(".popup");

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
  popupImage_image.src = card.link;
  popupImage_image.alt = card.name;
  popupImage_caption.textContent = card.name;
  openModal(popupImage);
}

//Открытие и закрытие окон
document.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("popup__close")) {
    closeModal(evt.target.closest('.popup'));
  }
});

popups.forEach((popups) => popups.addEventListener("mousedown", closeByOverlay));

/*
// @todo: Вывести карточки на страницу НЕ АКТУАЛЬНО
initialCards.forEach(function (card) {
  const cardContent = createCard(card, likeCard, removeCard, openCard);
  placesList.append(cardContent);
});
*/

//Изменение данных профиля
function chanceFormProfile(evt) {
  evt.preventDefault();
  loading(true, formPlace);//начало загрузки
  const jobInputtValue = jobInput.value;
  const nameInputValue = nameInput.value;
  editProfileInfo(nameInputValue, jobInputtValue)//меняем данные на сервере
    .then((res) => {
      titleProfile.textContent = nameInputValue;
      descriptionProfile.textContent = jobInputtValue;
      closeModal(popupEditProfile);
    })
    //.catch((err) => )
    .finally(() => {
      loading(false, formPlace);//конец загрузки
    })
}


//Автозаполнение формы
function fillPopupEditInputs() {
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


  const cardContent = createCard(card, profileId, true, likeCard, removeCard, openCard);
  placesList.prepend(cardContent);
  formPlace.reset();
  loading(false, formPlace);//конец загрузки


  addNewCard(card);//сохранение карточки на сервере
  closeModal(popupAddProfile);
}

//Функция обновления аватар
function chanceAvatarProfile(evt) {
  evt.preventDefault();
  loading(true, formPlace);//начало загрузки
  const avatar = avatarInput.value;
  editProfileAvatar(avatar)
    .then((res) => {
      // const avatarUrl = `url(${avatarInput.value})`;
      //  avatarProfile.style.backgroundImage = avatarUrl;
      avatarProfile.style.backgroundImage = `url(${avatarInput.value})`;
      closeModal(popupAvatar);
    })
    //.catch((err) => )
    .finally(() => {
      loading(false, formPlace);//конец загрузки
    })
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
function loading(status, popups) {
  const submitFormEnd = popups.querySelector('.popup__button')
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

//выводим информацию в профиле
//выводим все карточки группы
Promise.all([getProfileInfo(), getInitialCards()])
  // тут деструктурируете ответ от сервера, чтобы было понятнее, что пришло
  .then(([userData, cards]) => {
    // тут установка данных пользователя
    const jobInputValue = userData.about;
    const nameInputValue = userData.name;
    const descriptionProfile = document.querySelector(".profile__description");
    avatarProfile.setAttribute(
      "style",
      `background-image: url('${userData.avatar}')`
    );
    titleProfile.textContent = nameInputValue;
    descriptionProfile.textContent = jobInputValue;
    profileId = userData._id;

    // и тут отрисовка карточек
    cards.forEach(function (card) {
      const cardContent = createCard(card, profileId, false, likeCard, removeCard, openCard);
      placesList.append(cardContent);
    });
  })
  .catch(err => {
    // тут ловим ошибку
    console.log(err);
  });
