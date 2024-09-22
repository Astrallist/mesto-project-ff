import { deleteCard, addLike, removeLike } from './api.js';

// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;

// @todo: Функция создания карточки
export function createCard(card, profileId, newCardThis, likeCard, removeCard, openCard) {
  const cardContent = cardTemplate.querySelector(".card").cloneNode(true);
  cardContent.querySelector(".card__title").textContent = card.name;
  const image = cardContent.querySelector(".card__image");
  image.src = card.link;
  image.alt = card.name;

  image.addEventListener("click", () => openCard(card));

  const likeSum = cardContent.querySelector(".card__like-sum");

  const likeButton = cardContent.querySelector(".card__like-button");
  likeButton.addEventListener("click", () => likeCard(likeSum, likeButton, card));

  if (!newCardThis) { //только для карт, загруженных с сервера
    likeSum.textContent = card.likes.length;
    card.likes.forEach(element => {
      if (element._id === profileId) {
        likeButton.classList.add('card__like-button_is-active');
      }
      const userLike = card.likes.some(like => {
        return like._id === profileId
      })
      if (userLike) {
        likeButton.classList.add('card__like-button_is-active')
      }
    });
  }

  const deleteButton = cardContent.querySelector(".card__delete-button");
  if (newCardThis || card.owner._id === profileId) {
    deleteButton.addEventListener("click", () => removeCard(card, cardContent));
  }
  else {
    deleteButton.remove();
  }
  newCardThis = false;
  return cardContent;
}

// @todo: Функция удаления карточки
export function removeCard(card, cardContent) {
  deleteCard(card);//удаляем на сервере
  cardContent.remove();
}

// @todo: Функция лайка карточки
export function likeCard(likeSum, likeButton, card) {
  if (likeButton.classList.contains('card__like-button_is-active')) {
    removeLike(card)

    likeSum.textContent--;

    likeButton.classList.remove('card__like-button_is-active');
  }
  else {
    addLike(card)

    likeSum.textContent++;

    likeButton.classList.add('card__like-button_is-active');
  }
};
