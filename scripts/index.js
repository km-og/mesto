import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { openPopup, closePopup } from "./utils.js";

// popup profile
const editButton = document.querySelector(".profile__edit-button");
const popupProfile = document.querySelector(".popup-profile");
const closeButtonProfile = popupProfile.querySelector(".popup__close-button");
const namePopup = popupProfile.querySelector(".popup__item_type_name");
const nameProfile = document.querySelector(".profile__name");
const descriptionPopup = popupProfile.querySelector(
  ".popup__item_type_description"
);
const descriptionProfile = document.querySelector(".profile__description");
const profileForm = popupProfile.querySelector(".popup__container");
const popups = document.querySelectorAll(".popup");
const elementsTable = document.querySelector(".elements__table");
// переменные для карточек
const popupImg = document.querySelector(".popup-img");
const popupImgLink = popupImg.querySelector(".popup-img__image");
const popupImgName = popupImg.querySelector(".popup-img__name");
// попап добавления карточек
const addButton = document.querySelector(".profile__add-button");
const popupAdd = document.querySelector(".popup-add");
const popupAddCloseBtn = popupAdd.querySelector(".popup__close-button");
const namePopupAdd = popupAdd.querySelector(".popup__item_type_name");
const linkPopupAdd = popupAdd.querySelector(".popup__item_type_link");
const addForm = popupAdd.querySelector(".popup__container");

// закрытие по нажатию на оверлей

popups.forEach((popupItem) => {
  popupItem.addEventListener("click", (evt) => {
    const isOverlay = evt.target.classList.contains("popup");
    const isClose = evt.target.classList.contains("popup__close-button");
    if (isOverlay || isClose) {
      closePopup(popupItem);
    }
  });
});

// редактировать профиль

function openPopupProfile() {
  openPopup(popupProfile);
  namePopup.value = nameProfile.textContent;
  descriptionPopup.value = descriptionProfile.textContent;
}
editButton.addEventListener("click", openPopupProfile);

// отображение в полях формы значения профиля

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  nameProfile.textContent = namePopup.value;
  descriptionProfile.textContent = descriptionPopup.value;
  closePopup(popupProfile);
}
profileForm.addEventListener("submit", handleProfileFormSubmit);

// добавить карточки

const renderElement = (data) => {
  const card = new Card(
    data,
    ".elements__template_type_default",
    popupImg,
    popupImgLink,
    popupImgName
  );
  const cardElement = card.generateCard();
  elementsTable.prepend(cardElement);
};

initialCards.forEach(renderElement);

// открыть форму добавления карточек

function openPopupAdd() {
  openPopup(popupAdd);
}
addButton.addEventListener("click", openPopupAdd);

// добавление карточки через форму

const handleAddFormSubmit = (evt) => {
  evt.preventDefault();
  renderElement({ name: namePopupAdd.value, link: linkPopupAdd.value });
  evt.target.reset();
  closePopup(popupAdd);
};
addForm.addEventListener("submit", handleAddFormSubmit);

const formValidatorForProfile = new FormValidator(
  validationConfig,
  popupProfile
);
formValidatorForProfile.enableValidation();

const formValidatorForAdd = new FormValidator(validationConfig, popupAdd);
formValidatorForAdd.enableValidation();
