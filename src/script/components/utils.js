import { title, subtitle, nameForm, popupButtonNewAva, popapName, popupCart, popupNewAva, profileImage, subheadingNewAva, popupConfirmation } from './const'
import { addNameForm, addNewAva } from './api'

function toggleIndicator(activ){
    if(activ == true){
        popapName.querySelector("#indicator").style.display = "inline"
        popupCart.querySelector("#indicator").style.display = "inline"
        popupNewAva.querySelector("#indicator").style.display = "inline"
    }
    else{
        popapName.querySelector("#indicator").style.display = "none"
        popupCart.querySelector("#indicator").style.display = "none"
        popupNewAva.querySelector("#indicator").style.display = "none"
    }
}
export function openPopup(popup) {
    toggleIndicator(false);
    popup.classList.add("popup_opened");
    document.addEventListener('keydown', closeByEscape);
}
export function closePopup(popup) {
    toggleIndicator(true);
    popup.classList.remove("popup_opened");
    document.removeEventListener('keydown', closeByEscape);
}
export function closeByEscape(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
    }
}
export function openPopupName() {
    openPopup(popapName)
}
export function disableSaveButton(evt){
    const disabledButton = evt.querySelector(".popup__button")
    disabledButton.classList.add('popup__button_inactive');
    disabledButton.disabled = true;
}
export function openPopupCart() {
    openPopup(popupCart)
}
export function openPopupNewAva() {
    openPopup(popupNewAva)
}

export function closeButtonNewAva() {
    addNewAva();
    closePopup(popupNewAva);
}
  
export function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    addNameForm();
    closePopup(popapName);
}
