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

const elementCard = document.querySelector('.cards__conteiner');//находим контейнер попапа карточки
const elementTemplate = document.querySelector('#card-item-template').content.querySelector('.card');//находим темплейт карточек
const addButton = document.querySelector('.profile__add-button');//находим кнопку добавления новых карточек
const addCardPopup = document.querySelector('#popup__card');//находим попап добавления карточек
const popupEscButton = addCardPopup.querySelector('.popup__button-esc');//находим кнопку закрытия попапа добавления карточек
const popupButtonСreate = addCardPopup.querySelector('.popup__button-save');//находим кнопку сохранение новых карточек
const formCard = addCardPopup.querySelector('#popup__form-card');//находим форму добавления карточек
const popupOpenImg = document.querySelector('#popup__image');//находим попап открытия картинок
const popupImg = popupOpenImg.querySelector('.popup__img');//находим открытые картинки
const popupTitleImg = popupOpenImg.querySelector('.popup__img-title');//находим заголовок открытой картинки
const imgButtonEsc = popupOpenImg.querySelector('.popup__image__button-esc');//находим кнопку закрытия картинки


function openPopup (popup) {
  //функция для открытия попапов
  popup.classList.add('popup_opened');
}

function escPopup (popup) {
  //функция закрытия попапов
  popup.classList.remove('popup_opened');
}


function createCard ({name, link}) {
  //функция добавления новых карточек на страницу
    const card = elementTemplate.cloneNode(true);//создаем копию темплейта
    const imgCard = card.querySelector('.card__img');//находим картинку карточки 
    const cardTitle = card.querySelector('.card__title');//находим заголовок карточки    
    const cardLike = card.querySelector('.card__like-button');//находим кнопку лайка карточки
    const cardRemove = card.querySelector('.card__remove-button');//находим кнопку удаления карточки

    cardTitle.textContent = name;
    imgCard.src = link;
    imgCard.alt = name;


    cardLike.addEventListener('click', function() {
      //функция изменения состояния кнопки лайка при нажатии
      if (cardLike.classList.contains('card__button-like_active') === true) {
        cardLike.classList.remove('card__button-like_active');
      } else {
        cardLike.classList.add('card__button-like_active');
      }
    })



    cardRemove.addEventListener('click', function() {
      //функция удаления карточки при нажатии на корзину
      card.remove();
    })


    addButton.addEventListener('click', function() {
      //используем функция открытия попапа при нажатии на кнопку добавления нововй карточки
      openPopup(addCardPopup);
    });

    popupEscButton.addEventListener('click', function() {
      //используем функцию закрытия попапа при нажатии на кнопку еsc
      escPopup(addCardPopup);
    });

    imgButtonEsc.addEventListener('click', function() {
      //используем функцию закрытия попапа при закрытии картинки
      escPopup(popupOpenImg);
    });

    imgCard.addEventListener('click', function () {
      //используем функцию открытия попапа при нажатии на картинку
      openPopup(popupOpenImg);
      popupImg.src = imgCard.src
      popupTitleImg.textContent = cardTitle.textContent;
  }); 
 
    return card;

}

function handleFormSubmit (evt) {
  //функция добавления новой карточки на страницу
  evt.preventDefault();
  const titleInput = document.querySelector('.popup__input_type_title');
  const linkInput = document.querySelector('.popup__input_type_src');
  const newCreateCard = {name:titleInput.value, link:linkInput.value};
  renderCard(newCreateCard, elementCard, 'prepend')
  escPopup ()


}

formCard.addEventListener('submit', handleFormSubmit)//при сохранении формы добавления новой карточки добавляем на страницу

function renderCard({name, link}, container, position = 'append') {
  //функция определяющая куда будет добавлена карточка
    switch (position) {
      case "append":
        container.append(createCard({name, link}));
        break;
      case "prepend":
        container.prepend(createCard({name, link}));
        break;
      case "before":
        container.before(createCard({name, link}));
        break;
      case "after":
        container.after(createCard({name, link}));
        break;
      default:
        break;
    }
  
  }

  initialCards.forEach((item) => {
    //функция добавления карточки из массива
    renderCard(item, elementCard, 'append');
  })




 