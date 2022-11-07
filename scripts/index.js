let editButton = document.querySelector(".profile__edit-button");
let popup = document.querySelector(".popup");
let closeButton = document.querySelector(".popup__close-button");
let namePopup = document.querySelector(".popup_input-name");
let nameProfile = document.querySelector(".profile__name");
let descriptionPopup = document.querySelector(".popup_input-description");
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
