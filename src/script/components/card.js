import { elements, popupCart, popapImage, image, popapImageOpeneTitle, headingCart, subheadingCart, 
    popupConfirmation, subheadingNewAva, popupButtonConfirmation} from './const';
import { closePopup, openPopup, disableSaveButton, toggleIndicator } from './utils';
import { addServer} from './api'
import { myId } from '../index'
export function addLikes(res, myId){
    for(let q = 0; q < res.length; q++) {
      if(res[q].owner._id != myId){
          res.reverse(renderCard(res[q].link, res[q].name, res[q].likes.length, "none", res[q]._id, res[q].likes));  
        }
      else{
          res.reverse(renderCard(res[q].link, res[q].name, res[q].likes.length, "block", res[q]._id, res[q].likes)); 
        }
    }
}
function deleteCard(id, card){
    toggleIndicator(true, popupConfirmation)
    addServer(`cards/${id}`,'DELETE')
    .then(() => {
      card.remove();
      closePopup(popupConfirmation)
    })
    .catch(err => console.error(`Ошибка: ${err.status}`))
    .finally(res => {
      toggleIndicator(false, popupConfirmation)
    });
}
function checkMyLike(card, likes) {
    likes.forEach((item) => {
      if (item._id == myId) {
        card.querySelector('.element__like').classList.add('element__like_activ')
      }
    })
}
function addNewCardServer(evt){
    toggleIndicator(true, popupCart)
    addServer('cards','POST',({name: headingCart.value,link: subheadingCart.value}))
    .then((result) => {
        renderCard(result.link, result.name, result.likes.length, "block", result._id, result.likes);
        evt.target.reset()
        closePopup(popupCart);
        disableSaveButton(popupCart);
    })
    .catch(err => console.error(`Ошибка: ${err.status}`))
    .finally(res => {
      toggleIndicator(false, popupCart)
    });
}

export function putLike(cardElement, like, id) {
    cardElement.querySelector('.element__like').addEventListener('click', (evt) => {
      if (!evt.target.classList.contains('element__like_activ')) {
        addServer(`cards/likes/${id}`,'PUT')
          .then(res => {
            evt.target.classList.add('element__like_activ');
            like.textContent = res.likes.length;
          })
          .catch(err => console.error(`Ошибка: ${err.status}`))
      } else {
        addServer(`cards/likes/${id}`,'DELETE')
        .then(res => {
          evt.target.classList.remove('element__like_activ');
          like.textContent = res.likes.length;
        }) 
        .catch(err => console.error(`Ошибка: ${err.status}`))
      }
    })
}

export function createCard(srcValue, titleValue, likes, delet, id, likeMy) {
    const cartTemplate = document.querySelector('#newCart').content;
    const cartElement = cartTemplate.querySelector('.element').cloneNode(true);
    cartElement.querySelector('.element__title').textContent = titleValue;
    const cartElementImg = cartElement.querySelector('.element__image');
    const like = cartElement.querySelector('.element__like-counter')
    cartElementImg.src = srcValue;
    cartElementImg.alt = titleValue;
    cartElement.querySelector('.element__like-counter').textContent = likes;
    cartElement.querySelector('.element__delete').style.display = delet;
    putLike(cartElement, like, id);
    checkMyLike(cartElement, likeMy);
    cartElement.querySelector('.element__delete').addEventListener('click', function () {
        openPopup(popupConfirmation); 
        popupButtonConfirmation.addEventListener("click",() =>{
          deleteCard(id, cartElement)
        });
    });
    cartElementImg.addEventListener('click', function () {
        openPopup(popapImage)
        popapImageOpeneTitle.textContent = titleValue;
        image.src = srcValue;
        image.alt = titleValue;
    });
    return cartElement;
};

export function renderCard(link, name, likes, delet, id, likeMy) {
    const renderNewCart = createCard(link, name, likes, delet, id, likeMy);
    elements.prepend(renderNewCart);
}
export function addNewCard(evt) {
    evt.preventDefault();
    addNewCardServer(evt);
}
export const getCards =  new Promise((resolve, reject) => {
    addServer('cards', 'GET')
    .then((result) => {
      resolve(result)
    })
    .catch(err => reject(console.error(`Ошибка: ${err.status}`)))
})
