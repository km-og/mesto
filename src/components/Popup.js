export class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
    this._saveBtn = document.querySelector(".popup__save-button");
    // Для того чтобы ссылка стала постоянной, нужно "привязать" функцию к контексту this в конструкторе 1 раз с помощью bind.
  }

  open() {
    this._popup.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.code === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    // закрытие по нажатию на оверлей

    this._popup.addEventListener("click", (evt) => {
      const isOverlay = evt.target.classList.contains("popup");
      const isClose = evt.target.classList.contains("popup__close-button");
      if (isOverlay || isClose) {
        this.close();
      }
    });
  }

  // renderLoading(isLoading) {
  //   if (isLoading) {
  //     this._saveBtn.textContent = "Сохранение...";
  //   }
  // }
}
