import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    // функция создания карточки и добавление ее на страницу
  }

  // метод собирает данные всех полей формы.
  _getInputValues() {
    this._inputList = this._popupSelector.querySelectorAll(".popup__item");
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  close() {
    super.close();
  }

  setEventListeners() {
    super.setEventListeners();

    this._popupSelector.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.close(this._popupSelector);
      evt.target.reset();
    });
  }
}
