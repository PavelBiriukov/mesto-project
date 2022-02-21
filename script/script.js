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
//Open and Cloce Form ---
function openPopup() {
    popap_name.classList.add("popup_opened");
} profileButton.addEventListener("click", openPopup);//класс добавляется

function closePopup() {
    popap_name.classList.remove("popup_opened");
}
popupClose.addEventListener("click", closePopup);//класс удаляется
popupButton.addEventListener("click", closePopup);//класс удаляется на СОХРАНИТЬ

/* nameForm.value = title.textContent;
profForm.value = subtitle.textContent; */
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
popupButton.addEventListener("click", RenameForm);

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
    const cartTemplate = document.querySelector('#newCart').content;/*  */
    const cartElement = cartTemplate.querySelector('.element').cloneNode(true);/* при вынесении переменной не работают */
    cartElement.querySelector('.element__title').textContent = titleValue;
    cartElement.querySelector('.element__image').src = srcValue;

  /*   cartElement.querySelector('.element__like').addEventListener('click', function (evt) {
        evt.target.classList.toggle("element__like_activ")
    });
    cartElement.querySelector('.element__delete').addEventListener('click', function () {  работает, но при выноси из функции не работает ,но если 
        cartElement.remove();                                                              вынести переменную  то работает но тогда карточки при 
    });                                                                                    добавлении 2й наслаиваются друг на друга.
    cartElement.querySelector('.element__image').addEventListener('click', function () {
        popapImage.classList.toggle("popup_opened");
        popapImageOpeneTitle.textContent = cartElement.querySelector('.element__title').textContent;
        image.src = cartElement.querySelector('.element__image').src;
    }); */
    elements.prepend(cartElement);
}


popupButtonCart.addEventListener('click'/* при изменениее на submit перезагружается страница */, function(sub) {
    newCart(subheadingCart.value, headingCart.value); 
    headingCart.value = '';
    subheadingCart.value = '';
/*     sub.preventDefault();  не работает  */ 
});

for(let q = 0; q < 6; q++){
    function sixCard() {
        const cartTemplateNew = document.querySelector('#newCart').content;
        const cartElementNew = cartTemplateNew.querySelector('.element').cloneNode(true);
        let cartElementNewClone = cartElementNew.cloneNode(true)
        cartElementNewClone.querySelector('.element__title').textContent = initialCards[q].name;
        cartElementNewClone.querySelector('.element__image').src = initialCards[q].link;
        elements.prepend(cartElementNewClone);
        /* cartElementNew.querySelector('.element__like').addEventListener('click', function (evt) {
            evt.target.classList.toggle("element__like_activ")
        });
        cartElementNew.querySelector('.element__delete').addEventListener('click', function () {     все это не работает 
            cartElementNew.remove();
        });
        cartElementNew.querySelector('.element__image').addEventListener('click', function () {
            popapImage.classList.toggle("popup_opened");
            popapImageOpeneTitle.textContent = cartElementNew.querySelector('.element__title').textContent;
            image.src = cartElementNew.querySelector('.element__image').src;
        }); */
    }
    sixCard();
}

function openPopupCart(){
    popupCart.classList.add("popup_opened");
}
mesto.addEventListener("click", openPopupCart);
function clousPopupCart(){
    popupCart.classList.remove("popup_opened");
}
popupButtonCart.addEventListener("click", clousPopupCart);


/* for(let i = 0;i < massCart.length; i++){
    function like(){
        elementLike[i].classList.toggle("element__like_activ");
    };
    elementLike[i].addEventListener("click", like);
}
for(let a = 0;a < massCart.length; a++){
    function del(){
        element[a].classList.toggle("delete-cart");
    };
    elementDelete[a].addEventListener("click", del);
} */

/* IMAGE_OPEN */

/* for(let b = 0;b < massCart.length; b++){
    function openImage(){
        popapImage.classList.add("popup_opened");
        image.src = elementImage[b].src;
        popapImageOpeneTitle.textContent = elementTitle[b].textContent;
    };
    elementImage[b].addEventListener("click", openImage);
} */
function clousImage(){
    popapImage.classList.remove("popup_opened");
}
popapImageClouse.addEventListener("click", clousImage);
