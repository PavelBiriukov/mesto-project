import { title, subtitle, nameForm, popupButtonNewAva, popapName, popupCart, popupNewAva, profileImage, subheadingNewAva, profForm } from './const'
import { addServer } from './api'
export function toggleIndicator(activ, popap){
    if(activ){
        popap.querySelector("#indicator").style.display = "inline"
    }
    else{
        popap.querySelector("#indicator").style.display = "none"
    }
}
function addNameForm(){
    toggleIndicator(true, popapName);
    addServer('users/me','PATCH',({name: nameForm.value, about: profForm.value}))
    .then((result) => {
      title.textContent = result.name;
      subtitle.textContent = result.about;
      closePopup(popapName);
    })
    .catch(err => console.error(`Ошибка: ${err.status}`))
    .finally(res => {
        toggleIndicator(false, popapName)
    });
}
function addNewAva(){
    toggleIndicator(true, popupNewAva);
    addServer('users/me/avatar','PATCH',({avatar: subheadingNewAva.value}))
    .then((result) => {
        profileImage.src = subheadingNewAva.value;
        closePopup(popupNewAva);
    })
    .catch(err => console.error(`Ошибка: ${err.status}`))
    .finally(res => {
        toggleIndicator(false, popupNewAva);
    });
}
export function openPopup(popup) {
    popup.classList.add("popup_opened");
    document.addEventListener('keydown', closeByEscape);
}
export function closePopup(popup) {
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

export function closeButtonNewAva(evt) {
    evt.preventDefault();
    addNewAva();
}
  
export function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    addNameForm();
}
export const getUserInfo = new Promise ((resolve, reject) => {
    addServer('users/me', 'GET')
    .then((result) => {
      resolve(result)
    })
    .catch(err => reject(console.error(`Ошибка: ${err.status}`)))
})
