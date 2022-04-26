import '../pages/index.css'
import { popupFormName, profileButton, popupClose, mesto, popupCloceCart, popupForm, 
  overlay, initialCards, enableValidationCONST } from './components/const';
import {renameForm, closePopup, clousImage, closeCart, openPopupCart, openPopup } from './components/utils'
import {renderCard, formSubmitHandler} from './components/card'
import { enableValidation } from './components/validate'

// Valid---
enableValidation(enableValidationCONST);
// --->

//Open and Cloce Form ---
mesto.addEventListener("click", openPopupCart);

popupCloceCart.addEventListener("click", closeCart);

overlay[1].addEventListener("click", closeCart);

popapImageClouse.addEventListener("click", clousImage);

overlay[2].addEventListener("click", clousImage);

profileButton.addEventListener("click", openPopup);//класс добавляется

popupClose.addEventListener("click", closePopup);//класс удаляется

overlay[0].addEventListener("click", closePopup);

popupFormName.addEventListener("submit", renameForm);
// --->

//New Mesto ---
popupForm.addEventListener("submit",formSubmitHandler);

for(let q = 0; q < initialCards.length; q++){
    function sixCard() {
        renderCard(initialCards[q].link, initialCards[q].name);
    }
    sixCard();
}
// --->



