import "./pages/index.css";

import {
  editButton,
  addButton,
  elementsTable,
  validationConfig,
  popupProfile,
  popupAdd,
  nameProfile,
  descriptionProfile,
  avatar,
  editAvatarBtn,
  popupChange,
} from "./utils/constants.js";
import { Section } from "./components/Section.js";
import { Card } from "./components/Card.js";
import { Popup } from "./components/Popup.js";
import { PopupWithImage } from "./components/PopupWithImage.js";
import { PopupWithForm } from "./components/PopupWithForm.js";
import { UserInfo } from "./components/UserInfo.js";
import { FormValidator } from "./components/FormValidator.js";
import { Api } from "./components/Api";

function renderLoading(popup, initialValue, isLoading) {
  const saveBtn = popup.querySelector(".popup__save-button");
  if (isLoading) {
    saveBtn.textContent = "Сохранение...";
  } else {
    saveBtn.textContent = initialValue;
  }
}

// Загрузка информации о пользователе с сервера

const configApiAboutUser = {
  url: "https://nomoreparties.co/v1/cohort-58/users/me",
  headers: {
    authorization: "c10b13af-a0c9-404f-bfd6-c1073097221f",
  },
};

const apiUserInfo = new Api(configApiAboutUser);

apiUserInfo
  .getData()
  .then((data) => {
    nameProfile.textContent = data.name;
    descriptionProfile.textContent = data.about;
    avatar.src = data.avatar;
  })
  .catch((err) => {
    console.log(err);
  });

// отправка отредактированных данных профиля на сервер

const configApiNewUserInfo = {
  url: "https://mesto.nomoreparties.co/v1/cohort-58/users/me",
  headers: {
    authorization: "c10b13af-a0c9-404f-bfd6-c1073097221f",
    "Content-Type": "application/json",
  },
};

const apiNewUserInfo = new Api(configApiNewUserInfo);

// отображение в полях формы значения профиля

const newProfileInfo = new UserInfo({
  nameProfile: ".profile__name",
  descriptionProfile: ".profile__description",
});

newProfileInfo.setEventListeners();

// попап редактирования профиля

const profilePopup = new PopupWithForm({
  popup: ".popup-profile",
  handleFormSubmit: (formData) => {
    // newProfileInfo.setUserInfo(formData);
    const initialValue = "Сохранить";
    renderLoading(popupProfile, initialValue, true);

    apiNewUserInfo
      .sendData(
        {
          name: formData.editHeading,
          about: formData.editSubheading,
        },
        "PATCH"
      )
      .then((data) => {
        newProfileInfo.setUserInfo(data);
        profilePopup.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        renderLoading(popupProfile, initialValue, false);
      });
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
}

// валидация формы профиля

const formValidatorForProfile = new FormValidator(
  validationConfig,
  popupProfile
);
formValidatorForProfile.enableValidation();

// редактировать профиль

editButton.addEventListener("click", openPopupProfile);

// попап редактирование аватара

const popupChangeAvatar = new PopupWithForm({
  popup: ".popup-change",
  handleFormSubmit: (formData) => {
    const initialValue = "Сохранить";
    renderLoading(popupChange, initialValue, true);

    // Обновление аватара пользователя

    apiNewUserInfo
      .changeAvatar({
        avatar: formData.cardLink,
      })
      .then((res) => {
        avatar.src = res.avatar;
        popupChangeAvatar.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        renderLoading(popupChange, initialValue, false);
      });
  },
});
popupChangeAvatar.setEventListeners();

// открыть попап редактирования аватара

function openPopupChangeAvatar() {
  popupChangeAvatar.open();
  formValidatorForAvatar.resetValidaion();
}

// валидация формы изменения аватара

const formValidatorForAvatar = new FormValidator(validationConfig, popupChange);
formValidatorForAvatar.enableValidation();

// редактировать аватар

editAvatarBtn.addEventListener("click", openPopupChangeAvatar);

// открыть попап с картинкой

const openPopupImg = new PopupWithImage(".popup-img");
openPopupImg.setEventListeners();

// Загрузка карточек с сервера

const configApiCards = {
  url: "https://mesto.nomoreparties.co/v1/cohort-58/cards",
  headers: {
    authorization: "c10b13af-a0c9-404f-bfd6-c1073097221f",
    "Content-Type": "application/json",
  },
};

const apiCards = new Api(configApiCards);

apiCards
  .getData()
  .then((data) => {
    cardList.renderItems(data);
  })
  .catch((err) => {
    console.log(err);
  });

// попап удаления карточки

const popupDeleteCard = new Popup(".popup-delete");

// создание новой карточки

function createCard(cardItem) {
  const card = new Card(cardItem, ".elements__template_type_default", {
    handleCardClick: () => {
      openPopupImg.openImg(cardItem.name, cardItem.link);
    },

    handleDelete: () => {
      popupDeleteCard.open();
      popupDeleteCard.setEventListeners();
    },

    handlePopupDelete: (id) => {
      popupDeleteCard.close();
      apiCards
        .deleteCardBtn(id)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    handleLike: (id) => {
      likeCards(id);
    },

    handleDeleteLike: (id) => {
      deleteLike(id);
    },
  });
  const cardElement = card.generateCard();

  // лайк карточек

  function likeCards(id) {
    apiCards
      .likeCard(id, "PUT")
      .then((res) => {
        card.updateLikes(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // снятие лайка

  function deleteLike(id) {
    apiCards
      .likeCard(id, "DELETE")
      .then((res) => {
        card.updateLikes(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return cardElement;
}
// добавить карточки

const cardList = new Section(
  {
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
    const initialValue = "Создать";
    renderLoading(popupAdd, initialValue, true);

    const { cardName: name, cardLink: link } = formData;
    const newFormData = { name, link };
    // cardList.addItem(createCard(newFormData));

    apiCards
      .sendData(
        {
          name: newFormData.name,
          link: newFormData.link,
        },
        "POST"
      )
      .then((data) => {
        // отрисовка карточек
        cardList.renderItems([data]);
        popupAddForm.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        renderLoading(popupAdd, initialValue, false);
      });
  },
});

popupAddForm.setEventListeners();

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
