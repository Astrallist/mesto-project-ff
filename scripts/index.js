/*// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;

// @todo: DOM узлы
const placesList = document.querySelector(".places__list");

// @todo: Функция создания карточки
function createCard(card, removeCard) {
  const cardContent = cardTemplate.querySelector(".card").cloneNode(true);
  cardContent.querySelector(".card__title").textContent = card.name;
  cardContent.querySelector(".card__image").src = card.link;
  cardContent.querySelector(".card__image").alt = card.name;
  const deleteButton = cardContent.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", () => removeCard(cardContent));
  return cardContent;
}

// @todo: Функция удаления карточки
function removeCard(cardContent) {
  cardContent.remove();
}

// @todo: Вывести карточки на страницу
initialCards.forEach(function (card) {
  const cardContent = createCard(card, removeCard);
  placesList.append(cardContent);
});
*/
