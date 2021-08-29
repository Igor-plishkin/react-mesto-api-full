const BASE_URL = 'https://api.plisha-jr.nomoredomains.rocks';

class Api {
  constructor(token) {
    this.token = token;
    this.url = BASE_URL;
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUser() {
    return fetch(`${this.url}/users/me`, {
      method: "GET",
      credentials: "include",
      headers: {
        authorization: this.token,
      },
    }).then(this._handleResponse);
  }

  setUser(data) {
    return fetch(`${this.url}/users/me`, {
      method: "PATCH",
      credentials: "include",
      headers: {
        authorization: this.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    }).then(this._handleResponse);
  }

  setAvatar(data) {
    return fetch(`${this.url}/users/me/avatar`, {
      method: "PATCH",
      credentials: "include",
      headers: {
        authorization: this.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    }).then(this._handleResponse);
  }

  setCard(data) {
    return fetch(`${this.url}/cards`, {
      method: "POST",
      credentials: "include",
      headers: {
        authorization: this.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    }).then(this._handleResponse);
  }

  deleteCard(id) {
    return fetch(`${this.url}/cards/${id}`, {
      method: "DELETE",
      credentials: "include",
      headers: {
        authorization: this.token,
      },
    }).then(this._handleResponse);
  }

  changeLikeCardStatus(id, isLiked) {
    return fetch(`${this.url}/cards/likes/${id}`, {
      method: isLiked ? "PUT" : "DELETE",
      credentials: "include",
      headers: {
        authorization: this.token,
      },
    }).then(this._handleResponse);
  }
  getInitialCards() {
    return fetch(`${this.url}/cards`, {
      method: "GET",
      credentials: "include",
      headers: {
        authorization: this.token,
      },
    }).then(this._handleResponse);
  }
}

const api = new Api("4756f29e-7074-4b91-8a7b-c92b73652806");

export default api;
