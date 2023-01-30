import "./pages/index.css";
import { FormValidator } from "./components/FormValidator.js";
import { openPopupProfile, openPopupAdd } from "./utils/utils.js";
import {
  initialCards,
  validationConfig,
  editButton,
  popupProfile,
  addButton,
  popupAdd,
  elementsTable,
  popupImg,
} from "./utils/constants.js";
import { Section } from "./components/Section.js";
import { Card } from "./components/Card.js";
import { PopupWithImage } from "./components/PopupWithImage.js";
import { PopupWithForm } from "./components/PopupWithForm.js";
import { UserInfo } from "./components/UserInfo.js";

// редактировать профиль

editButton.addEventListener("click", openPopupProfile);

// отображение в полях формы значения профиля

const handleProfileFormSubmit = new PopupWithForm({
  popupSelector: popupProfile,
  handleFormSubmit: (formData) => {
    const newProfileInfo = new UserInfo(formData);
    newProfileInfo.setUserInfo();
  },
});
handleProfileFormSubmit.setEventListeners();

// открыть попап с картинкой

const openPopupImg = new PopupWithImage(popupImg);

// добавить карточки

const defaultCardList = new Section(
  {
    items: initialCards,
    renderer: (cardItem) => {
      const card = new Card(cardItem, ".elements__template_type_default", {
        handleCardClick: () => {
          openPopupImg.openImg(cardItem.name, cardItem.link);
        },
      });
      const cardElement = card.generateCard();
      defaultCardList.addItem(cardElement);
    },
  },
  elementsTable
);

// отрисовка карточек

defaultCardList.renderItems();

// открыть форму добавления карточек

addButton.addEventListener("click", openPopupAdd);

// добавление карточки через форму

const handleAddForm = new PopupWithForm({
  popupSelector: popupAdd,
  handleFormSubmit: (formData) => {
    const { cardName: name, cardLink: link } = formData;
    const cardInfo = { name, link };

    const newCardList = new Section(
      {
        items: [cardInfo],
        renderer: (cardItem) => {
          const newCard = new Card(
            cardItem,
            ".elements__template_type_default",
            {
              handleCardClick: () => {
                openPopupImg.openImg(cardItem.name, cardItem.link);
              },
            }
          );
          const cardElement = newCard.generateCard();
          newCardList.addItem(cardElement);
        },
      },
      elementsTable
    );
    newCardList.renderItems();
  },
});
handleAddForm.setEventListeners();

// валидация формы профиля

const formValidatorForProfile = new FormValidator(
  validationConfig,
  popupProfile
);
formValidatorForProfile.enableValidation();

// валидация формы добавления карточек

const formValidatorForAdd = new FormValidator(validationConfig, popupAdd);
formValidatorForAdd.enableValidation();
