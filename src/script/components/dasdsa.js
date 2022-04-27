import {title, subtitle, nameForm, profForm, overlay, popapName, popupCart, buttonElements, popapImage, popups} from './const'

function openPopup(popup) {
    togglePopup(popup);
    document.addEventListener('keydown', closeByEscape);
}
function closePopup(popup) {
    togglePopup(popup)
    document.removeEventListener('keydown', closeByEscape);
}
export function togglePopup(popup) {
    popup.classList.toggle("popup_opened"); //Общая функция открытия и закрытия
}

popups.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            closePopup(popup)
        }
        if (evt.target.classList.contains('popup__close')) {
          closePopup(popup)
        }
    })
})
function closeByEscape(evt) {
    if (evt.key === 'Escape') {
      const openedPopup = document.querySelector('.popup_opened');
      closePopup(openedPopup);
    }
}