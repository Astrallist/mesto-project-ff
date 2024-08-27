import "./pages/index.css";
import { initialCards } from "./scripts/cards";
import { createCard, likeCard, removeCard } from "./scripts/card";
import { openModal, closeModal, closeByOverlay } from "./scripts/modal";

// @todo: DOM узлы
const placesList = document.querySelector(".places__list");

//Открытие и закрытие модальных окон
const popup = document.querySelectorAll(".popup");
//Окно редактирования
const buttonEditProfile = document.querySelector(".profile__edit-button");
const popupEditProfile = document.querySelector(".popup_type_edit");
buttonEditProfile.addEventListener("click", function () {
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
    closeModal(evt.closest());
  }
});

popup.forEach((popup) => popup.addEventListener("mousedown", closeByOverlay));

// @todo: Вывести карточки на страницу
initialCards.forEach(function (card) {
  const cardContent = createCard(card, likeCard, removeCard, openCard);
  placesList.append(cardContent);
});

//Изменение данных профиля
// Находим форму в DOM
const formProfile = document.querySelector('.popup__form[name="edit-profile"]'); // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
const nameInput = formProfile.querySelector('input[name="name"]'); // Воспользуйтесь инструментом .querySelector()
const jobInput = formProfile.querySelector('input[name="description"]'); // Воспользуйтесь инструментом .querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function chanceFormProfile(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.

  // Получите значение полей jobInput и nameInput из свойства value
  const jobInputtValue = jobInput.value;
  const nameInputValue = nameInput.value;
  // Выберите элементы, куда должны быть вставлены значения полей
  const titleProfile = document.querySelector(".profile__title");
  const descriptionProfile = document.querySelector(".profile__description");
  // Вставьте новые значения с помощью textContent
  titleProfile.textContent = nameInputValue;
  descriptionProfile.textContent = jobInputtValue;
  closeModal(popupEditProfile);
}

//Автозаполнение формы
function fillPopupEditInputs() {
  const titleProfile = document.querySelector(".profile__title");
  const descriptionProfile = document.querySelector(".profile__description");
  nameInput.value = titleProfile.textContent;
  jobInput.value = descriptionProfile.textContent;
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formProfile.addEventListener("submit", chanceFormProfile);

//Добавление новой карточки
// Находим форму в DOM
const formPlace = document.querySelector('.popup__form[name="new-place"]');
// Находим поля формы в DOM
const placeInput = formPlace.querySelector('input[name="place-name"]');
const linkInput = formPlace.querySelector('input[name="link"]');

function createNewCard(evt) {
  evt.preventDefault();
  const card = new Object();
  card.name = placeInput.value;
  card.link = linkInput.value;

  const cardContent = createCard(card, likeCard, removeCard, openCard);
  placesList.prepend(cardContent);
  formPlace.reset();
  closeModal(popupAddProfile);
}

formPlace.addEventListener("submit", createNewCard);
