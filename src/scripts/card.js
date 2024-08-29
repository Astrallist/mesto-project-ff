// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;

// @todo: Функция создания карточки
export function createCard(card, likeCard, removeCard, openCard) {
  const cardContent = cardTemplate.querySelector(".card").cloneNode(true);
  cardContent.querySelector(".card__title").textContent = card.name;
  const image = cardContent.querySelector(".card__image");
  image.src = card.link;
  image.alt = card.name;

  image.addEventListener("click", () => openCard(card));

  const likeButton = cardContent.querySelector(".card__like-button");
  likeButton.addEventListener("click", () => likeCard(likeButton));

  const deleteButton = cardContent.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", () => removeCard(cardContent));

  return cardContent;
}

// @todo: Функция удаления карточки
export function removeCard(cardContent) {
  cardContent.remove();
}

// @todo: Функция лайка карточки
export function likeCard(likeButton) {
  likeButton.classList.toggle("card__like-button_is-active");
}
