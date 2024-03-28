const BASE_URL = "https://norma.nomoreparties.space";

export function request(endPoint, options) {
  return fetch(BASE_URL + endPoint, options).then(checkResponse);
}

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
}

export default request;
