//https://Astrallist.github.io/mesto-project-ff

//Запрос к серверу
const config = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/wff-cohort-21',
  headers: {
    authorization: 'c0209747-23dd-4fc1-a84e-60bef0930bc8',
    'Content-Type': 'application/json'
  }
}

export const getInitialCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }

      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка: ${res.status}`);
    });
}

export function getProfileInfo() {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers,
  }).then((res) => {
    checkResponse(res)
  });
}

//Проверка получения данных
function checkResponse(res) {
  if (res.ok) return res.json();

  return Promise.reject(`Ошибка: ${res.status}`);
}

// Сохранение данных профиля на сервере
export function editProfileInfo(name, about) {
  return fetch(`${config.baseUrl}/users/me`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      about: about,
    }),
  }).then((res) => {
    checkResponse(res)
  });
}

//Сохранение новой карточке на сервере
export function addNewCard(card) {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers,
    method: 'POST',
    body: JSON.stringify({
      name: card.name,
      link: card.link
    }),
  })
    .then((res) => {
      checkResponse(res)
    })
};

//Удаление карточки
export function deleteCard(card) {
  return fetch(`${config.baseUrl}/cards/${card._id}`, {
    headers: config.headers,
    method: 'DELETE',
  })
    .then((res) => {
      checkResponse(res)
    })
};

//Поставить лайк
export function addLike(card) {
  return fetch(`${config.baseUrl}/cards/likes/${card._id}`,
    {
      headers: config.headers,
      method: 'PUT',
    })
    .then((res) => {
      checkResponse(res)
    })
};

//Убрать лайк
export function removeLike(card) {
  return fetch(`${config.baseUrl}/cards/likes/${card._id}`, {
    headers: config.headers,
    method: 'DELETE',
  })
    .then((res) => {
      checkResponse(res)
    })
};

//Обновление аватара пользователя
export function editProfileAvatar(urlAvatar) {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      avatar: urlAvatar,
    }),
  })
    .then((res) => {
      checkResponse(res)
    }
    );
};
