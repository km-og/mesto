// класс создания карточки с текстом и ссылкой на изображение

class Card {
  constructor(data, templateSelector, { handleCardClick }) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
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

    this._cardName = this._element.querySelector(".elements__title");
    this._cardName.textContent = this._name;
    this._cardImage = this._element.querySelector(".elements__photo");
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;

    this._setEventListeners();

    return this._element;
  }

  _toggleLike() {
    this._likeBtn.classList.toggle("elements__like-button_type_active");
  }

  _deleteCard() {
    this._element.remove();
  }

  _openImg() {
    this._handleCardClick(this._name, this._link);
  }

  _setEventListeners() {
    this._likeBtn = this._element.querySelector(".elements__like-button");

    this._likeBtn.addEventListener("click", () => {
      this._toggleLike();
    });

    this._deleteBtn = this._element.querySelector(".elements__delete-button");
    this._deleteBtn.addEventListener("click", () => {
      this._deleteCard();
    });

    this._cardImage.addEventListener("click", () => {
      this._openImg();
    });
  }
}

export { Card };
