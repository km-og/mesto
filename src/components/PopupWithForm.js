import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor({ popup, handleFormSubmit }) {
    super(popup);
    this._handleFormSubmit = handleFormSubmit;
    // функция создания карточки и добавление ее на страницу

    this._inputList = this._popup.querySelectorAll(".popup__item");
    this._form = this._popup.querySelector(".popup__container");
  }

  // метод собирает данные всех полей формы.
  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }

  close() {
    super.close();
    this._form.reset();
  }

  setEventListeners() {
    super.setEventListeners();

    this._popup.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.close();
    });
  }

  // метод вставляет данные в инпуты

  setInputValues(data) {
    this._inputList.forEach((input) => {
      // тут вставляем в `value` инпута данные из объекта по атрибуту `name` этого инпута
      input.value = data[input.name];
    });
  }
}
