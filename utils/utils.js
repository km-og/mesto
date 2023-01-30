import { Popup } from "../components/Popup.js";
import {
  popupProfile,
  namePopup,
  nameProfile,
  descriptionPopup,
  descriptionProfile,
  popupAdd,
} from "./constants.js";

// закрыть попап

function closePopup(popup) {
  const closeWindow = new Popup(popup);
  closeWindow.close();
}

// редактировать профиль

function openPopupProfile() {
  const openProfile = new Popup(popupProfile);
  openProfile.open();
  openProfile.setEventListeners();
  namePopup.value = nameProfile.textContent;
  descriptionPopup.value = descriptionProfile.textContent;
}

// открыть форму добавления карточек

function openPopupAdd() {
  const openPopup = new Popup(popupAdd);
  openPopup.open();
  openPopup.setEventListeners();
}

export { closePopup, openPopupProfile, openPopupAdd };
