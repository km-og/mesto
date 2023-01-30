export class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
  }

  open() {
    this._popupSelector.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popupSelector.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.code === "Escape") {
      const popupOpen = document.querySelector(".popup_opened");
      popupOpen.classList.remove("popup_opened");
    }
  }

  setEventListeners() {
    const closeBtn = this._popupSelector.querySelector(".popup__close-button");
    closeBtn.addEventListener("click", () => {
      this.close(this._popupSelector);
    });

    // закрытие по нажатию на оверлей

    this._popupSelector.addEventListener("click", (evt) => {
      const isOverlay = evt.target.classList.contains("popup");
      const isClose = evt.target.classList.contains("popup__close-button");
      if (isOverlay || isClose) {
        this.close(this._popupSelector);
      }
    });
  }
}
