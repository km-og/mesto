// класс создания карточки с текстом и ссылкой на изображение

class Card {
  constructor(
    data,
    templateSelector,
    {
      handleCardClick,
      handleDelete,
      handlePopupDelete,
      handleLike,
      handleDeleteLike,
    }
  ) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleDelete = handleDelete;
    this._handleCardClick = handleCardClick;
    this._handleLike = handleLike;
    this._id = data._id;
    this._likes = data.likes;
    this._owner = data.owner._id;
    this._handlePopupDelete = handlePopupDelete;
    this._myId = "c074c52e67f04b0ae50ddc4b";
    this._handleDeleteLike = handleDeleteLike;
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

    this._deleteBtn = this._element.querySelector(".elements__delete-button");
    this._likeBtn = this._element.querySelector(".elements__like-button");
    this._cardName = this._element.querySelector(".elements__title");
    this._cardName.textContent = this._name;
    this._cardImage = this._element.querySelector(".elements__photo");
    this._deleteCardBtn = this._element.querySelector(
      ".elements__delete-button"
    );
    this._quantityLikes = this._element.querySelector(
      ".elements__likes-quantity"
    );
    this._agreeBtn = document.querySelector(".popup-delete__save-button");

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;

    this._setEventListeners();
    this._showLikes();
    this._isMyLike();
    this._showDeleteIcon();

    return this._element;
  }

  _isMyLike() {
    this._likes.forEach((person) => {
      if (person._id === this._myId) {
        this._likeBtn.classList.add("elements__like-button_type_active");
      }
    });
  }

  _deleteMyLike() {
    this._likeBtn.classList.remove("elements__like-button_type_active");
    this._handleDeleteLike(this._id);
  }

  _showLikes() {
    this._quantityLikes.textContent = this._likes.length;
  }

  updateLikes(data) {
    this._likes = data.likes;
    this._showLikes();
    this._isMyLike();
  }

  _deleteCard() {
    this._element.remove();
  }

  _deleteCardPopup() {
    this._handleDelete();
    this._agreeBtn.addEventListener("click", () => {
      this._deleteCard();
      this._handlePopupDelete(this._id);
    });
  }

  _showDeleteIcon() {
    if (this._owner !== this._myId) {
      this._deleteCardBtn.remove();
    }
  }

  _openImg() {
    this._handleCardClick(this._name, this._link);
  }

  _setEventListeners() {
    this._likeBtn.addEventListener("click", () => {
      if (
        this._likeBtn.classList.contains("elements__like-button_type_active")
      ) {
        this._deleteMyLike();
      } else {
        this._handleLike(this._id);
      }
    });
    this._deleteBtn.addEventListener("click", () => {
      this._deleteCardPopup();
    });

    this._cardImage.addEventListener("click", () => {
      this._openImg();
    });
  }
}

export { Card };
