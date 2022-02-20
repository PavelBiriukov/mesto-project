let profileButton = document.querySelector(".profile__button");
let popup = document.querySelector(".popup");
let popupClose = popup.querySelector(".popup__close");
let mesto = document.querySelector(".profile__add-button");
let elementLike = document.querySelectorAll(".element__like");
let elementDelete = document.querySelectorAll(".element__delete");
let element = document.querySelectorAll(".element");
let elements = document.querySelector(".elements");
let elementTitle = document.querySelectorAll(".element__title");
let popupButton = document.querySelector(".popup__button");
let popupCart = document.querySelector(".popup_cart");
let popupButtonCart = document.querySelector(".popup__button_card");
let elementImage = document.querySelectorAll(".element__image");
let nameForm = document.querySelector("#heading");
let profForm = document.querySelector("#subheading");
let title = document.querySelector(".profile__title");
let subtitle = document.querySelector(".profile__subtitle");
let popupCloceCart = document.querySelector(".popup-cloce_cart");
let popupTitle = popup.querySelector("h2");
let popapImage = document.querySelector("#popapImage");
let image = document.querySelector(".popapImageOpene__image");
let popapImageClouse = document.querySelector("#popapImageClouse");
let popapImageOpene__title = document.querySelector(".popapImageOpene__title");

//Open and Cloce Form ---
function click(){
    popup.classList.add("popup_opened");
    popupTitle.textContent = "Редактировать профиль";
    nameForm.value = title.textContent;
    profForm.value = subtitle.textContent;
    nameForm.setAttribute("placeholder", "Имя");
    profForm.setAttribute("placeholder", "О себе");
}
    
function close(){
    popup.classList.remove("popup_opened");
}
profileButton.addEventListener("click", click);
popupClose.addEventListener("click", close);

function closeCart(){
    popupCart.classList.remove("popup_opened");
}
popupCloceCart.addEventListener("click", closeCart);

//---->

//Name ---

function form(){
    title.textContent = nameForm.value;
    subtitle.textContent = profForm.value;
}
popupButton.addEventListener("click", form);
popupButton.addEventListener("click", close);
// --->

//New Mesto ---
let elementMass = Array.from(element);
let massCart = elementMass.map(index => {return index});
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
    cartElement.querySelector('.element__image').addEventListener('click', function (evt) {
        popapImage.classList.toggle("popup_opened");
        popapImageOpene__title.textContent = cartElement.querySelector('.element__title').textContent;
        image.src = cartElement.querySelector('.element__image').src;
      });
    elements.prepend(cartElement);
}

popupButtonCart.addEventListener('click', function () {
    const headingCart = document.querySelector('#heading-cart');
    const subheadingCart = document.querySelector('#subheading-cart');
    newCart(subheadingCart.value, headingCart.value)
    headingCart.value = '';
    subheadingCart.value = '';
});

function openPopupCart(){
    popupCart.classList.add("popup_opened");
}
mesto.addEventListener("click", openPopupCart);
function clousPopupCart(){
    popupCart.classList.remove("popup_opened");
}
popupButtonCart.addEventListener("click", clousPopupCart);


for(let i = 0;i < massCart.length; i++){
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
}

/* IMAGE_OPEN */

for(let b = 0;b < massCart.length; b++){
    function openImage(){
        popapImage.classList.add("popup_opened");
        image.src = elementImage[b].src;
        popapImageOpene__title.textContent = elementTitle[b].textContent;
    };
    elementImage[b].addEventListener("click", openImage);
}
function clousImage(){
    popapImage.classList.remove("popup_opened");
}
popapImageClouse.addEventListener("click", clousImage);
