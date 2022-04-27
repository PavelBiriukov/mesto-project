import {title, subtitle, nameForm, profForm,  popapName, popupCart, popupButtonCard} from './const'

export function togglePopup(popup) {
    popup.classList.toggle("popup_opened"); //Общая функция открытия и закрытия
}
export function openPopup(popup) {
    togglePopup(popup);
    document.addEventListener('keydown', closeByEscape);
}
export function closePopup(popup) {
    togglePopup(popup)
    document.removeEventListener('keydown', closeByEscape);
}
export  function closeByEscape(evt) {
    if (evt.key === 'Escape') {
      const openedPopup = document.querySelector('.popup_opened');
      closePopup(openedPopup);
    }
}
export function openPopupName() {
    openPopup(popapName)
}
export function openPopupCart() {
    popupButtonCard.classList.add('popup__button_inactive');
    openPopup(popupCart)
  }
export function renameForm(evt){
    evt.preventDefault();
    title.textContent = nameForm.value;
    subtitle.textContent = profForm.value;
    closePopup()
}