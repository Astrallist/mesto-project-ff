export function openModal(popup) {
  popup.classList.add("popup_is-opened");
  document.addEventListener("keydown", closeByEscape);
}

export function closeModal(popup) {
  popup.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", closeByEscape);
}

export function closeByEscape(evt) {
  if (evt.key === "Escape") {
    const popup = document.querySelector(".popup_is-opened");
    closeModal(popup);
  }
}

export function closeByOverlay(evt) {
  if (evt.target.matches(".popup_is-opened, .popup__close")) {
    const popup = document.querySelector(".popup_is-opened");
    closeModal(popup);
  }
}
