import { title, subtitle, nameForm, profForm, headingCart, subheadingCart, subheadingNewAva, profileImage} from './const'
import { renderCard} from './card'
import { myId } from '../index'
/* export const api = {
    serverUrl: "https://mesto.nomoreparties.co/v1/plus-cohort-9/",
    token: "252b3c51-e2b7-489a-982e-dcfeb0d86f95"
}; */
export function addServer (mesto, method, info){
    return fetch(`https://mesto.nomoreparties.co/v1/plus-cohort-9/${mesto}`, {
        method: method,
        headers: {
            authorization: `252b3c51-e2b7-489a-982e-dcfeb0d86f95`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(info)
    })
    .then(res => {
      if (res.ok) {
        return res.json();
    }
      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка: ${res.status}`);
    });
}














