import { elements, popupCart, popapImage, image, popapImageOpeneTitle, headingCart, subheadingCart } from './const';
import { closePopup, openPopup } from './utils';

export function createCard(srcValue, titleValue) {
    const cartTemplate = document.querySelector('#newCart').content;
    const cartElement = cartTemplate.querySelector('.element').cloneNode(true);
    cartElement.querySelector('.element__title').textContent = titleValue;
    const cartElementImg = cartElement.querySelector('.element__image');
    cartElementImg.src = srcValue;
    cartElementImg.alt = titleValue;

    cartElement.querySelector('.element__like').addEventListener('click', function (evt) {
        evt.target.classList.toggle("element__like_activ")
    });
    cartElement.querySelector('.element__delete').addEventListener('click', function () {
        cartElement.remove();
    });
    cartElementImg.addEventListener('click', function () {
        openPopup(popapImage)
        popapImageOpeneTitle.textContent = titleValue;
        image.src = srcValue;
        image.alt = titleValue;
    });
    return cartElement;
};

export function renderCard(link, name) {
    const renderNewCart = createCard(link, name);
    elements.prepend(renderNewCart);
}
export function addNewCard(evt) {
    evt.preventDefault();
    renderCard(subheadingCart.value, headingCart.value);
    evt.target.reset()
    closePopup(popupCart)
}