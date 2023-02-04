import "./pages/index.css";

import {
  initialCards,
  editButton,
  addButton,
  elementsTable,
  validationConfig,
  popupProfile,
  namePopup,
  descriptionPopup,
  popupAdd,
} from "./utils/constants.js";
import { Section } from "./components/Section.js";
import { Card } from "./components/Card.js";
import { PopupWithImage } from "./components/PopupWithImage.js";
import { PopupWithForm } from "./components/PopupWithForm.js";
import { UserInfo } from "./components/UserInfo.js";
import { FormValidator } from "./components/FormValidator.js";

// отображение в полях формы значения профиля

const newProfileInfo = new UserInfo({
  nameProfile: ".profile__name",
  descriptionProfile: ".profile__description",
});

// попап редактирования профиля

const profilePopup = new PopupWithForm({
  popup: ".popup-profile",
  handleFormSubmit: (formData) => {
    newProfileInfo.setUserInfo(formData);
  },
});

profilePopup.setEventListeners();

// открыть попап редактирования профиля

function openPopupProfile() {
  profilePopup.open();
  newProfileInfo.getUserInfo();
  const infoObject = newProfileInfo.getUserInfo();

  profilePopup.setInputValues(infoObject);
  formValidatorForProfile.resetValidaion();
  // namePopup.value = infoObject.name;
  // descriptionPopup.value = infoObject.description;
}

// валидация формы профиля

const formValidatorForProfile = new FormValidator(
  validationConfig,
  popupProfile
);
formValidatorForProfile.enableValidation();

// редактировать профиль

editButton.addEventListener("click", openPopupProfile);

// открыть попап с картинкой

const openPopupImg = new PopupWithImage(".popup-img");
openPopupImg.setEventListeners();

// создание новой карточки

function createCard(cardItem) {
  const card = new Card(cardItem, ".elements__template_type_default", {
    handleCardClick: () => {
      openPopupImg.openImg(cardItem.name, cardItem.link);
    },
  });
  const cardElement = card.generateCard();

  return cardElement;
}

// добавить карточки

const cardList = new Section(
  {
    items: initialCards,
    renderer: (cardItem) => {
      createCard(cardItem);
      cardList.addItem(createCard(cardItem));
    },
  },
  elementsTable
);

// попап добавления карточек

const popupAddForm = new PopupWithForm({
  popup: ".popup-add",
  handleFormSubmit: (formData) => {
    const { cardName: name, cardLink: link } = formData;
    const newFormData = { name, link };
    cardList.addItem(createCard(newFormData));
  },
});

popupAddForm.setEventListeners();

// отрисовка карточек

cardList.renderItems();

// открыть попап добавления карточек

function openPopupAdd() {
  popupAddForm.open();
  formValidatorForAdd.resetValidaion();
}

// валидация формы добавления карточек

const formValidatorForAdd = new FormValidator(validationConfig, popupAdd);
formValidatorForAdd.enableValidation();

// открыть форму добавления карточек

addButton.addEventListener("click", openPopupAdd);
