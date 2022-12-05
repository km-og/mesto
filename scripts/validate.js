// добавить класс с ошибкой

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(`${obj.inputErrorClass}`);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(`${obj.errorClass}`);
};

// удалить класс с ошибкой

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(`${obj.inputErrorClass}`);
  errorElement.classList.remove(`${obj.errorClass}`);
  errorElement.textContent = "";
};

//проверка валидности поля

const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

// проверка на наличие невалидного поля

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

// отключение кнопки

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(`${obj.inactiveButtonClass}`);
    buttonElement.setAttribute("disabled", true);
  } else {
    buttonElement.classList.remove(`${obj.inactiveButtonClass}`);
    buttonElement.removeAttribute("disabled");
  }
};

// принимает элемент формы и добавляет полям нужные обработчики

const setEventListeners = (formElement) => {
  const inputList = Array.from(
    formElement.querySelectorAll(`${obj.inputSelector}`)
  );
  const buttonElement = formElement.querySelector(
    `${obj.submitButtonSelector}`
  );

  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      isValid(formElement, inputElement);

      toggleButtonState(inputList, buttonElement);
    });
  });
  toggleButtonState(inputList, buttonElement);
};

// поиск и перебор всех форм на странице

const obj = {
  formSelector: ".popup__container",
  inputSelector: ".popup__item",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_type_inactive",
  inputErrorClass: "popup__item_type_error",
  errorClass: "popup__error_type_active",
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(`${obj.formSelector}`));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement);
  });
};

enableValidation(obj);
