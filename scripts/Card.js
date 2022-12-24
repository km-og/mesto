import { openPopup, popupImg, popupImgLink, popupImgName } from "./index.js";

// класс создания карточки с текстом и ссылком на изображение

class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardTemplate = document
      .querySelector(this._templateSelector)
      .content.querySelector(".elements__item")
      .cloneNode(true);

    return cardTemplate;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector(".elements__title").textContent = this._name;
    this._element.querySelector(".elements__photo").src = this._link;

    return this._element;
  }

  _toggleLike() {
    this._element
      .querySelector(".elements__like-button")
      .classList.toggle("elements__like-button_type_active");
  }

  _deleteCard() {
    this._element.closest(".elements__item").remove();
  }

  _openImg() {
    openPopup(popupImg);
    popupImgLink.src = this._link;
    popupImgLink.alt = this._name;
    popupImgName.textContent = this._name;
  }

  _setEventListeners() {
    this._element
      .querySelector(".elements__like-button")
      .addEventListener("click", () => {
        this._toggleLike();
      });

    this._element
      .querySelector(".elements__delete-button")
      .addEventListener("click", () => {
        this._deleteCard();
      });

    this._element
      .querySelector(".elements__photo")
      .addEventListener("click", () => {
        this._openImg();
      });
  }
}

export { Card };
