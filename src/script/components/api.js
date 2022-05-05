import { title, subtitle, nameForm, profForm, headingCart, subheadingCart, subheadingNewAva, profileImage} from './const'
import { renderCard} from './card'
export const api = {
    serverUrl: "https://mesto.nomoreparties.co/v1/plus-cohort-9/",
    token: "252b3c51-e2b7-489a-982e-dcfeb0d86f95"
};
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
export function addNameForm(){
    addServer('users/me','PATCH',({name: nameForm.value, about: profForm.value}))
    .then((result) => {
      title.textContent = result.name;
      subtitle.textContent = result.about;
    })
    .catch(err => console.error(`Ошибка: ${err.status}`))
}
export function addNewCardServer(){
    addServer('cards','POST',({name: headingCart.value,link: subheadingCart.value}))
    .then((result) => {
        renderCard(result.link, result.name, result.likes.length, "block", result._id, result.likes);  
        
    })
    .catch(err => console.error(`Ошибка: ${err.status}`))
}
export function addNewAva(){
    addServer('users/me/avatar','PATCH',({avatar: subheadingNewAva.value}))
    .then((result) => {
        profileImage.src = subheadingNewAva.value;
    })
    .catch(err => console.error(`Ошибка: ${err.status}`))
}
export function addLikes(){
    addServer('cards')
    .then((result) => {
      result.reverse();
      for(let q = 0; q < result.length; q++) {
        if(result[q].owner._id != "7062cbd011cffec1949ad911"){
            renderCard(result[q].link, result[q].name, result[q].likes.length, "none", result[q]._id, result[q].likes);  
        }
        else{
            renderCard(result[q].link, result[q].name, result[q].likes.length, "block", result[q]._id, result[q].likes); 
        }
      }
    })
    .catch(err => console.error(`Ошибка: ${err.status}`))
}
addLikes();

export function deleteCard(id, card){
    addServer('cards','DELETE',({avatar: subheadingNewAva.value}))
    .then(() => {
        card.remove();
    })
    .catch(err => console.error(`Ошибка: ${err.status}`))
}

export function putLike(cardElement, like, id) {
    cardElement.querySelector('.element__like').addEventListener('click', (evt) => {
      if (!evt.target.classList.contains('element__like_activ')) {
        addServer(`cards/likes/${id}`,'PUT')
          .then(res => {
            evt.target.classList.add('element__like_activ');
            cardElement.querySelector('.element__like-counter').textContent++;
          })
          .catch(err => console.error(`Ошибка: ${err.status}`))
      } else {
        addServer(`cards/likes/${id}`,'DELETE')
        .then(res => {
          evt.target.classList.remove('element__like_activ');
          cardElement.querySelector('.element__like-counter').textContent--;
        }) 
        .catch(err => console.error(`Ошибка: ${err.status}`))
      }
    })
}
export function checkMyLike(card, likes) {
    likes.forEach((item) => {
      if (item._id == '7062cbd011cffec1949ad911') {
        card.querySelector('.element__like').classList.add('element__like_activ')
      }
    })
}
