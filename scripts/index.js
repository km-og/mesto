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

// закрытие по нажатию на Esc

function closeByEsc(evt) {
  const popupOpen = document.querySelector(".popup_opened");
  if (evt.code === "Escape") {
    closePopup(popupOpen);
  }
}

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

// открыть попап

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closeByEsc);
}

// закрыть попап

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeByEsc);
}

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

// лайк карточки

const toggleLike = (evt) => {
  evt.target.classList.toggle("elements__like-button_type_active");
};

// удаление карточки

const deleteCard = (evt) => {
  evt.target.closest(".elements__item").remove();
};

// открыть попап с картинкой

const openImg = (item) => {
  openPopup(popupImg);
  popupImgLink.src = item.link;
  popupImgLink.alt = item.name;
  popupImgName.textContent = item.name;
};

// генерация карточки

function createElement(item) {
  const elementsTemplate = document.querySelector(
    "#elements__template"
  ).content;
  const newElement = elementsTemplate
    .querySelector(".elements__item")
    .cloneNode(true);

  const previewImg = newElement.querySelector(".elements__photo");
  newElement.querySelector(".elements__title").textContent = item.name;
  previewImg.src = item.link;
  previewImg.alt = item.name;

  const deleteBtn = newElement.querySelector(".elements__delete-button");
  deleteBtn.addEventListener("click", deleteCard);

  const likeBtn = newElement.querySelector(".elements__like-button");
  likeBtn.addEventListener("click", toggleLike);

  previewImg.addEventListener("click", () => openImg(item));

  return newElement;
}

// добавить карточки

const renderElement = (item) => {
  elementsTable.prepend(createElement(item));
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
