const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const validationConfig = {
  formSelector: ".popup__container",
  inputSelector: ".popup__item",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_type_inactive",
  inputErrorClass: "popup__item_type_error",
  errorClass: "popup__error_type_active",
};

// popup profile
const editButton = document.querySelector(".profile__edit-button");
const popupProfile = document.querySelector(".popup-profile");
const closeButtonProfile = popupProfile.querySelector(".popup__close-button");
const namePopup = popupProfile.querySelector(".popup__item_type_name");
const nameProfile = document.querySelector(".profile__name");
const descriptionPopup = popupProfile.querySelector(
  ".popup__item_type_description"
);
const avatar = document.querySelector(".profile__avatar");
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
// попап удаления карточек
const popupDelete = document.querySelector(".popup-delete");
const deleteCardBtn = document.querySelector(".elements__delete-button");
// попап редактирования аватара
const popupChange = document.querySelector(".popup-change");
const editAvatarBtn = document.querySelector(".profile__avatar-overlay");

export {
  initialCards,
  validationConfig,
  editButton,
  popupProfile,
  closeButtonProfile,
  namePopup,
  nameProfile,
  descriptionPopup,
  descriptionProfile,
  profileForm,
  popups,
  elementsTable,
  popupImg,
  popupImgLink,
  popupImgName,
  addButton,
  popupAdd,
  popupAddCloseBtn,
  namePopupAdd,
  linkPopupAdd,
  addForm,
  avatar,
  popupDelete,
  deleteCardBtn,
  popupChange,
  editAvatarBtn,
};
