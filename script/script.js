const profileButton = document.querySelector(".profile__button");
const popap_name = document.querySelector(".popup");
const popupClose = popap_name.querySelector(".popup__close");
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
function openPopup() {
    popap_name.classList.add("popup_opened");
} profileButton.addEventListener("click", openPopup);//класс добавляется

function closePopup(evt) {
    evt.preventDefault();
    popap_name.classList.remove("popup_opened");
}
popupClose.addEventListener("click", closePopup);//класс удаляется
popupFormName.addEventListener("submit", closePopup);//класс удаляется на СОХРАНИТЬ

function closeCart(){
    popupCart.classList.remove("popup_opened");
}
popupCloceCart.addEventListener("click", closeCart);
//---->

//Name ---
function RenameForm(){
    title.textContent = nameForm.value;
    subtitle.textContent = profForm.value;
}
popupFormName.addEventListener("submit", RenameForm);
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
        popapImage.classList.toggle("popup_opened");
        popapImageOpeneTitle.textContent = cartElement.querySelector('.element__title').textContent;
        image.src = cartElement.querySelector('.element__image').src;
    });
    elements.prepend(cartElement);
    return cartElement;
     
};
function formSubmitHandler (evt){
    evt.preventDefault();
    newCart(subheadingCart.value, headingCart.value);
    headingCart.value = '';
    subheadingCart.value = '';
    popupCart.classList.remove("popup_opened");
}
popupForm.addEventListener("submit",formSubmitHandler);

for(let q = 0; q < 6; q++){
    function sixCard() {
        const cartElementNew = newCart();
        cartElementNew.querySelector('.element__title').textContent = initialCards[q].name;
        cartElementNew.querySelector('.element__image').src = initialCards[q].link;
        elements.prepend(cartElementNew);
    }
    sixCard();
}

function openPopupCart(){
    popupCart.classList.add("popup_opened");
}
mesto.addEventListener("click", openPopupCart);

function clousImage(){
    popapImage.classList.remove("popup_opened");
}
popapImageClouse.addEventListener("click", clousImage);


