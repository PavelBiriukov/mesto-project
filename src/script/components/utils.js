import { title, subtitle, nameForm, profForm, popapName, popupCart, popupButtonCard } from './const'
export function openPopup(popup) {
    popup.classList.add("popup_opened");
    document.addEventListener('keydown', closeByEscape);
}
export function closePopup(popup) {
    disabledSaveButton(popup);
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
function disabledSaveButton(evt){
    const disabledButton = evt.querySelector(".popup__button")
    disabledButton.classList.add('popup__button_inactive');
    disabledButton.disabled = true;
}
export function openPopupCart() {
    openPopup(popupCart)
}
export function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    title.textContent = nameForm.value;
    subtitle.textContent = profForm.value;
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
}