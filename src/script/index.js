import '../pages/index.css'
import {popups, popupFormName, profileButton, mesto, cardForm, initialCards,
  enableValidationCONST} from './components/const';
import {renameForm,closePopup, openPopupName, openPopupCart } from './components/utils'
import {renderCard, addNewCard} from './components/card'
import { enableValidation } from './components/validate'

profileButton.addEventListener("click", openPopupName);//класс добавляется
mesto.addEventListener("click", openPopupCart);//класс добавляется

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('overlay')) {
      closePopup(popup)
    }
      if (evt.target.classList.contains('popup__close')) {
        closePopup(popup)
      }
  })
})
popupFormName.addEventListener("submit", renameForm);
// --->

// Valid---
enableValidation(enableValidationCONST);
// --->

//New Mesto ---
cardForm.addEventListener("submit",addNewCard);

for(let q = 0; q < initialCards.length; q++){
  renderCard(initialCards[q].link, initialCards[q].name);
}
// --->



