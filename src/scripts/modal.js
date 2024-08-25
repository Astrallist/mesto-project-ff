export function openModal(popup) {
  popup.classList.add("popup_is-opened");
  document.addEventListener("keydown", closeByEscape);
}

export function closeModal(popup) {
  popup.classList.remove("popup_is-opened");
  document.addEventListener("keydown", closeByEscape);
}

export function closeByEscape(evt) {
  const popup = document.querySelector(".popup_is-opened");
  if (evt.key === "Escape") closeModal(popup);
}

export function closeByOverlay(evt) {
  const popup = document.querySelector(".popup_is-opened");
  if (evt.target.matches(".popup_is-opened, .popup__close")) closeModal(popup);
}
