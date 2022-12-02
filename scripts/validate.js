// добавить класс с ошибкой

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add("popup__item_type_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("popup__error_type_active");
};

// удалить класс с ошибкой

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove("popup__item_type_error");
  errorElement.classList.remove("popup__error_type_active");
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
    buttonElement.classList.add("popup__save-button_type_inactive");
  } else {
    buttonElement.classList.remove("popup__save-button_type_inactive");
  }
};

// принимает элемент формы и добавляет полям нужные обработчики

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".popup__item"));
  const buttonElement = formElement.querySelector(".popup__save-button");
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      isValid(formElement, inputElement);

      toggleButtonState(inputList, buttonElement);
    });
  });
};

// поиск и перебор всех форм на странице

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(".popup__container"));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement);
  });
};

enableValidation();
