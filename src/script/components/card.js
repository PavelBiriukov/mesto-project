import { elements, popupCart, popapImage, image,popapImageOpeneTitle, headingCart, subheadingCart} from './const';
import { openClosePopupAll } from './utils';
      
export function newCart(srcValue, titleValue) {
    const cartTemplate = document.querySelector('#newCart').content;
    const cartElement = cartTemplate.querySelector('.element').cloneNode(true);
    cartElement.querySelector('.element__title').textContent = titleValue;
    cartElement.querySelector('.element__image').src = srcValue;

    cartElement.querySelector('.element__like').addEventListener('click', function (evt) {
        evt.target.classList.toggle("element__like_activ")
    });
    cartElement.querySelector('.element__delete').addEventListener('click', function () {  
        cartElement.remove();                                                              
    });                                                                                    
    cartElement.querySelector('.element__image').addEventListener('click', function () {
        openClosePopupAll(popapImage)
        popapImageOpeneTitle.textContent = cartElement.querySelector('.element__title').textContent;
        image.src = cartElement.querySelector('.element__image').src;
    });
    return cartElement;  
};

export function renderCard(link, name) {
    const renderNewCart = newCart(link, name);
    elements.prepend(renderNewCart);
}
export function formSubmitHandler (evt){
    evt.preventDefault();
    renderCard(subheadingCart.value, headingCart.value);
    headingCart.value = '';
    subheadingCart.value = '';
    openClosePopupAll(popupCart)
}