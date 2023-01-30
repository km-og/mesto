import { openPopup } from "./utils.js";

// класс создания карточки с текстом и ссылком на изображение

class Card {
  constructor(data, templateSelector, popupImg, popupImgLink, popupImgName) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._popupImg = popupImg;
    this._popupImgLink = popupImgLink;
    this._popupImgName = popupImgName;
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
    this._element.querySelector(".elements__photo").alt = this._name;

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
    openPopup(this._popupImg);
    this._popupImgLink.src = this._link;
    this._popupImgLink.alt = this._name;
    this._popupImgName.textContent = this._name;
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
