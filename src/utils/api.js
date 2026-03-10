class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) return res.json();
    return Promise.reject(`Error: ${res.status}`);
  }

  _request(path, options = {}) {
    const headers = {
      ...this._headers,
      ...(options.headers || {}),
    };

    return fetch(`${this._baseUrl}${path}`, {
      ...options,
      headers,
    }).then(this._checkResponse);
  }

  getAppInfo() {
    return Promise.all([this.getUserInfo(), this.getInitialCards()]);
  }

  getUserInfo() {
    return this._request("/users/me");
  }

  getInitialCards() {
    return this._request("/cards");
  }

  updateUserInfo({ name, about }) {
    return this._request("/users/me", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, about }),
    });
  }

  addCard({ name, link }) {
    return this._request("/cards", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, link }),
    });
  }

  deleteCard(cardId) {
    return this._request(`/cards/${cardId}`, {
      method: "DELETE",
    });
  }

  changeLikeCardStatus(cardId, isLiked) {
    return this._request(`/cards/${cardId}/likes`, {
      method: isLiked ? "PUT" : "DELETE",
    });
  }

  updateAvatar({ avatar }) {
    return this._request("/users/me/avatar", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ avatar }),
    });
  }
}

const api = new Api({
  baseUrl: "https://around-api.pt-br.tripleten-services.com/v1",
  headers: {
    authorization: "d96dea7b-0ff4-4a6a-8888-596d93c1e617",
  },
});

export default api;