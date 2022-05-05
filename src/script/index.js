import '../pages/index.css'
import {
  popups, popupFormName, profileButton, mesto, cardForm, initialCards,
  enableValidationCONST, profileImageHover, popupButtonNewAva,title, subtitle, nameForm,
  profForm, profileImage } from './components/const';
import { handleProfileFormSubmit, closePopup, openPopupName, openPopupCart, openPopupNewAva, closeButtonNewAva } from './components/utils'
import { renderCard, addNewCard } from './components/card'
import { enableValidation } from './components/validate'
import { api, addServer } from './components/api'

profileButton.addEventListener("click", openPopupName);//класс добавляется
mesto.addEventListener("click", openPopupCart);//класс добавляется
profileImageHover.addEventListener("click", openPopupNewAva);//класс добавляется
popupButtonNewAva.addEventListener("click", closeButtonNewAva);//класс добавляется
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
popupFormName.addEventListener("submit", handleProfileFormSubmit);
// --->

// Valid---
enableValidation(enableValidationCONST);
// --->

//New Mesto ---
cardForm.addEventListener("submit", addNewCard);

// --->
//API ---
addServer('users/me')
.then((result) => {
  title.textContent = result.name;
  subtitle.textContent = result.about;
  profileImageHover.src = result.avatar;
  nameForm.value = result.name;
  profForm.value = result.about;
  profileImage.src = result.avatar;
})
.catch(err => console.error(`Ошибка: ${err.status}`))

// --->



