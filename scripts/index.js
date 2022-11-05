let editButton = document.querySelector(".profile__edit-button");
let popup = document.querySelector(".popup");
function openPopup() {
  popup.setAttribute("class", "popup popup_opened");
}
editButton.addEventListener("click", openPopup);

let closeButton = document.querySelector(".popup__close-button");
function closePopup() {
  popup.removeAttribute("class");
  popup.setAttribute("class", "popup");
}
closeButton.addEventListener("click", closePopup);

let namePopup = document.querySelector(".popup__name");
let nameProfile = document.querySelector(".profile__name");
let descriptionPopup = document.querySelector(".popup__description");
let descriptionProfile = document.querySelector(".profile__description");
function rename() {
  nameProfile.textContent = namePopup.value;
  descriptionProfile.textContent = descriptionPopup.value;
}
rename();

let formElement = document.querySelector(".popup__container");
function formSubmitHandler(evt) {
  evt.preventDefault();
  rename();
  closePopup();
}

formElement.addEventListener("submit", formSubmitHandler);
