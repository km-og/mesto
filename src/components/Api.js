export class Api {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  // проверка статуса ответа сервера

  _checkingStatus(response) {
    if (response.ok) {
      return response.json();
    } else {
      return Promise.reject(new Error("Что-то пошло не так..."));
    }
  }

  // получить данные с сервера

  getData() {
    return fetch(`${this._url}`, {
      method: "GET",
      headers: this._headers,
    }).then((response) => {
      return this._checkingStatus(response);
    });
  }

  // отправить данные на сервер

  sendData(data, methodType) {
    return fetch(`${this._url}`, {
      method: methodType,
      headers: this._headers,
      body: JSON.stringify(data),
    }).then((response) => {
      return this._checkingStatus(response);
    });
  }

  // удалить карточку

  deleteCardBtn(id) {
    return fetch(`${this._url}/${id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then((response) => {
      return this._checkingStatus(response);
    });
  }

  // поставить лайк

  likeCard(id, methodType) {
    return fetch(`${this._url}/${id}/likes`, {
      method: methodType,
      headers: this._headers,
    }).then((response) => {
      return this._checkingStatus(response);
    });
  }
  // обновить аватар

  changeAvatar(avatar) {
    return fetch(`${this._url}/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(avatar),
    }).then((response) => {
      return this._checkingStatus(response);
    });
  }
}
