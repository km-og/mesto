// закрытие по нажатию на Esc

function closeByEsc(evt) {
  if (evt.code === "Escape") {
    const popupOpen = document.querySelector(".popup_opened");
    closePopup(popupOpen);
  }
}

// открыть попап

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closeByEsc);
}

// закрыть попап

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeByEsc);
}

export { openPopup, closePopup };
