import { elements, popupCart, popapImage, image, popapImageOpeneTitle, headingCart, subheadingCart, popupConfirmation } from './const';
import { closePopup, openPopup, disableSaveButton } from './utils';
import { addNewCardServer, deleteCard, checkMyLike, putLike} from './api'
export function createCard(srcValue, titleValue, likes, delet, id, likeMy) {
    const cartTemplate = document.querySelector('#newCart').content;
    const cartElement = cartTemplate.querySelector('.element').cloneNode(true);
    cartElement.querySelector('.element__title').textContent = titleValue;
    const cartElementImg = cartElement.querySelector('.element__image');
    const like = cartElement.querySelector('.element__like');
    cartElementImg.src = srcValue;
    cartElementImg.alt = titleValue;
    cartElement.querySelector('.element__like-counter').textContent = likes;
    cartElement.querySelector('.element__delete').style.display = delet;
    putLike(cartElement, like, id);
    checkMyLike(cartElement, likeMy)
    cartElement.querySelector('.element__delete').addEventListener('click', function () {
        openPopup(popupConfirmation);
        document.querySelector('.popup__button_confirmation').addEventListener('click', function () {
            deleteCard(id, cartElement)
            closePopup(popupConfirmation)
        })
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
    addNewCardServer();
    evt.target.reset()
    closePopup(popupCart)
    disableSaveButton(popupCart);
}