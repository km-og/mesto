let editButton = document.querySelector(".profile__edit-button");
let popup = document.querySelector(".popup");
let closeButton = document.querySelector(".popup__close-button");
let namePopup = document.querySelector(".popup__item_type_name");
let nameProfile = document.querySelector(".profile__name");
let descriptionPopup = document.querySelector(".popup__item_type_description");
let descriptionProfile = document.querySelector(".profile__description");

function openPopup() {
  popup.classList.add("popup_opened");
  namePopup.value = nameProfile.textContent;
  descriptionPopup.value = descriptionProfile.textContent;
}
editButton.addEventListener("click", openPopup);

function closePopup() {
  popup.classList.remove("popup_opened");
}
closeButton.addEventListener("click", closePopup);

let formElement = document.querySelector(".popup__container");
function formSubmitHandler(evt) {
  evt.preventDefault();
  nameProfile.textContent = namePopup.value;
  descriptionProfile.textContent = descriptionPopup.value;
  closePopup();
}
formElement.addEventListener("submit", formSubmitHandler);

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

const elementsTable = document.querySelector(".elements__table");

const likeButton = (evt) => {
  evt.target
    .closest("button")
    .classList.toggle("elements__like-button_type_active");
  evt.target.closest("button").classList.toggle("elements__like-button");
};

const deleteButton = (evt) => {
  evt.target.closest(".elements__item").remove();
};

const popupImg = document.querySelector(".popup-img");
const popupImgLink = document.querySelector(".popup-img__image");
const popupImgName = document.querySelector(".popup-img__name");

const openImg = (item) => {
  popupImg.classList.add("popup-img_opened");
  popupImgLink.src = item.link;
  popupImgName.textContent = item.name;
};

function closeImg() {
  popupImg.classList.remove("popup-img_opened");
}

function addElement(item) {
  const elementsTemplate = document.querySelector(
    "#elements__template"
  ).content;
  const newElement = elementsTemplate
    .querySelector(".elements__item")
    .cloneNode(true);

  newElement.querySelector(".elements__title").textContent = item.name;
  newElement.querySelector(".elements__photo").src = item.link;

  const deleteBtn = newElement.querySelector(".elements__delete-button");
  deleteBtn.addEventListener("click", deleteButton);

  const likeBtn = newElement.querySelector(".elements__like-button");
  likeBtn.addEventListener("click", likeButton);

  const previewImg = newElement.querySelector(".elements__photo");
  previewImg.addEventListener("click", () => openImg(item));

  const closePreviewImg = document.querySelector(".popup-img__close-button");
  closePreviewImg.addEventListener("click", closeImg);
  return newElement;
}

const renderElement = (item) => {
  elementsTable.prepend(addElement(item));
};

initialCards.forEach((item) => {
  renderElement(item);
});

const addButton = document.querySelector(".profile__add-button");
const popupAdd = document.querySelector(".popup-add");
const closeButtonSecond = document.querySelector(".popup-add__close-button");
const namePopupAdd = document.querySelector(".popup-add__item_type_name");
const linkPopupAdd = document.querySelector(".popup-add__item_type_link");

function openPopupAdd() {
  popupAdd.classList.add("popup-add_opened");
}
addButton.addEventListener("click", openPopupAdd);

function closePopupAdd() {
  popupAdd.classList.remove("popup-add_opened");
}
closeButtonSecond.addEventListener("click", closePopupAdd);

const addForm = document.querySelector(".popup-add__container");
const addFormSubmitHandler = (evt) => {
  evt.preventDefault();
  renderElement({ name: namePopupAdd.value, link: linkPopupAdd.value });
  namePopupAdd.value = "";
  linkPopupAdd.value = "";
  closePopupAdd();
};
addForm.addEventListener("submit", addFormSubmitHandler);
