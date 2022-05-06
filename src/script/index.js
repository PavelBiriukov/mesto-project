import '../pages/index.css'
import {
  popups, popupFormName, profileButton, mesto, cardForm, initialCards,
  enableValidationCONST, profileImageHover, popupButtonNewAva,title, subtitle, nameForm,
  profForm, profileImage, popupButtonConfirmation } from './components/const';
import { handleProfileFormSubmit, closePopup, openPopupName, openPopupCart, openPopupNewAva, closeButtonNewAva,
  getUserInfo} from './components/utils'
import { renderCard, addNewCard, getCards, addLikes, clickPopupConfirmation } from './components/card'
import { enableValidation } from './components/validate'
import { api, addServer, } from './components/api'
export let myId;
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
Promise.all([getUserInfo, getCards])
  .then(([userData, cards]) => {
    title.textContent = userData.name;
    subtitle.textContent = userData.about;
    profileImageHover.src = userData.avatar;
    nameForm.value = userData.name;
    profForm.value = userData.about;
    profileImage.src = userData.avatar;
    myId = userData._id;
    addLikes(cards, myId);
  })
.catch(err => {
  // тут ловим ошибку
  console.error(`Ошибка: ${err.status}`)
});
// --->



