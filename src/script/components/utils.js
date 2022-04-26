import {title, subtitle, nameForm, profForm, overlay, popapName, popupCart, buttonElement, popapImage} from './const'
export function closePopup() {
    openClosePopupAll(popapName);
}
export function renameForm(evt){
    evt.preventDefault();
    title.textContent = nameForm.value;
    subtitle.textContent = profForm.value;
    closePopup()
}
export function openClosePopupAll(openСlose) {
    openСlose.classList.toggle("popup_opened"); //Общая функция открытия и закрытия
    for(let q = 0; q < overlay.length; q++){
        function overlayOn() {
            overlay[q].classList.toggle("overlay_on");
        }
        overlayOn();
    }
    escape(openСlose);
}
function escape(openСlose){
    document.addEventListener('keydown', function(event) {
        const key = event.key;
        if (key === "Escape") {
            openСlose.classList.remove("popup_opened");
        }
    });
}

export function openPopup() {
    openClosePopupAll(popapName);
} 
export function clousImage(){
    openClosePopupAll(popapImage);
}
export function closeCart(){
    openClosePopupAll(popupCart);
}
export function openPopupCart(){
    openClosePopupAll(popupCart);
    buttonElement[1].classList.add('popup__button_inactive');
}