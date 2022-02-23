const profileButton = document.querySelector(".profile__button");
const popapName = document.querySelector(".popup");
const popupClose = popapName.querySelector(".popup__close");
const mesto = document.querySelector(".profile__add-button");
const elementLike = document.querySelectorAll(".element__like");
const elementDelete = document.querySelectorAll(".element__delete");
const element = document.querySelectorAll(".element");
const elements = document.querySelector(".elements");
const elementTitle = document.querySelectorAll(".element__title");
const popupButton = document.querySelector(".popup__button");
const popupCart = document.querySelector(".popup_cart");
const popupButtonCart = document.querySelector(".popup__button_card");
const elementImage = document.querySelectorAll(".element__image");
const nameForm = document.querySelector("#heading");
const profForm = document.querySelector("#subheading");
const title = document.querySelector(".profile__title");
const subtitle = document.querySelector(".profile__subtitle");
const popupCloceCart = document.querySelector(".popup-cloce_cart");
const popapImage = document.querySelector("#popapImage");
const image = document.querySelector(".popapImageOpene__image");
const popapImageClouse = document.querySelector("#popapImageClouse");
const popapImageOpeneTitle = document.querySelector(".popapImageOpene__title");
const headingCart = document.querySelector('#heading-cart');
const subheadingCart = document.querySelector('#subheading-cart');
const popupForm = document.querySelector("#popupFormCard");
const popupFormName = document.querySelector(".popup__form");
//Open and Cloce Form ---
function openClosePopupAll(openСlose) {
    openСlose.classList.toggle("popup_opened"); //Общая функция открытия и закрытия
} 
//------
function openPopup() {
    openClosePopupAll(popapName)
} 
profileButton.addEventListener("click", openPopup);//класс добавляется

function closePopup() {
    openClosePopupAll(popapName)
} 
popupClose.addEventListener("click", closePopup);//класс удаляется
//---->



//Name ---
function renameForm(evt){
    evt.preventDefault();
    title.textContent = nameForm.value;
    subtitle.textContent = profForm.value;
    closePopup()
}
popupFormName.addEventListener("submit", renameForm);
// --->

//New Mesto ---
const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
    ];

function newCart(srcValue, titleValue) {
    const cartTemplate = document.querySelector('#newCart').content;
    const cartElement = cartTemplate.querySelector('.element').cloneNode(true);
    cartElement.querySelector('.element__title').textContent = titleValue;
    cartElement.querySelector('.element__image').src = srcValue;

    cartElement.querySelector('.element__like').addEventListener('click', function (evt) {
        evt.target.classList.toggle("element__like_activ")
    });
    cartElement.querySelector('.element__delete').addEventListener('click', function () {  
        cartElement.remove();                                                              
    });                                                                                    
    cartElement.querySelector('.element__image').addEventListener('click', function () {
        openClosePopupAll(popapImage)
        popapImageOpeneTitle.textContent = cartElement.querySelector('.element__title').textContent;
        image.src = cartElement.querySelector('.element__image').src;
    });
    return cartElement;  
};
function renderCard() {
    const renderNewCart = newCart(subheadingCart.value, headingCart.value);
    elements.prepend(renderNewCart);
}
function formSubmitHandler (evt){
    evt.preventDefault();
    renderCard();
    headingCart.value = '';
    subheadingCart.value = '';
    openClosePopupAll(popupCart)
}
popupForm.addEventListener("submit",formSubmitHandler);

for(let q = 0; q < initialCards.length; q++){
    function sixCard() {
        const cartElementNew = newCart();
        cartElementNew.querySelector('.element__title').textContent = initialCards[q].name;
        cartElementNew.querySelector('.element__image').src = initialCards[q].link;
        elements.prepend(cartElementNew);
    }
    sixCard();
}

function openPopupCart(){
    openClosePopupAll(popupCart)
}
mesto.addEventListener("click", openPopupCart);

function closeCart(){
    openClosePopupAll(popupCart);
}
popupCloceCart.addEventListener("click", closeCart);

function clousImage(){
    openClosePopupAll(popapImage);
}
popapImageClouse.addEventListener("click", clousImage);


