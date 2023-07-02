const popupProfile = document.querySelector('#popup__profile'); //находим попап изменения информации профиля в DOM  
const editButton = document.querySelector('.profile__edit-button'); //находим кнопку редактирования информации профиля в DOM 
const escButtonProfile = popupProfile.querySelector('.popup__button-esc'); // находим кнопку закрытия редактирования профиля в DOM 
const nameInput = document.querySelector('.popup__input_type_name'); //находим значение формы инпута имени в DOM 
const jobInput = document.querySelector('.popup__input_type_work'); //находим значение формы инпута работы в DOM 
const nameProfile = document.querySelector('.profile__name'); //находим значение имени в DOM 
const descriptionProfile = document.querySelector('.profile__description'); //находим значение работы в DOM 
const formProfile = popupProfile.querySelector('.popup__form'); //находим форму редактирования информации профиля в DOM

function openedPopup (popup) {
  //функция для открытия попапов
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
  popup.addEventListener('click', closeOverlay);
  closePopupButtonClose ();
}

function closePopup (popup) {
  //функция закрытия попапов
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
  popup.removeEventListener('click', closeOverlay);


}

function closeOverlay (evt) {
  //функция закрытия попапов при клике на оверлей
  if(evt.target.classList.contains('popup_opened')) {
    closePopup(evt.target);
  };
}

function closePopupEsc(evt) {
  // //функция закрытия попапов при нажатии на escape
  if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
  }
}

function closePopupButtonClose () {
  const closeButtons = document.querySelectorAll('.popup__button-esc');

closeButtons.forEach((button) => {
  // находим 1 раз ближайший к крестику попап 
  const popup = button.closest('.popup');
  // устанавливаем обработчик закрытия на крестик
  button.addEventListener('click', () => closePopup(popup));
 
});

}
 


function handleProfileFormSubmit (evt) {
  //функция изменения информации профиля
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    descriptionProfile.textContent = jobInput.value;
    closePopup(popupProfile)

}
editButton.addEventListener('click', function() {
  //используем функция открытия попапа при нажатии на кнопку добавления нововй карточки
   nameInput.value = nameProfile.textContent;
   jobInput.value = descriptionProfile.textContent;
  openedPopup(popupProfile);
});

formProfile.addEventListener('submit', handleProfileFormSubmit);

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
const escButtonCardPopup = addCardPopup.querySelector('.popup__button-esc');//находим кнопку закрытия попапа добавления карточек
const popupButtonСreate = addCardPopup.querySelector('.popup__button-save');//находим кнопку сохранение новых карточек
const formCard = addCardPopup.querySelector('#popup__form-card');//находим форму добавления карточек
const popupOpenImg = document.querySelector('#popup__image');//находим попап открытия картинок
const popupImg = popupOpenImg.querySelector('.popup__img');//находим открытые картинки
const popupTitleImg = popupOpenImg.querySelector('.popup__img-title');//находим заголовок открытой картинки
const imgButtonEsc = popupOpenImg.querySelector('.popup__button-esc_image');//находим кнопку закрытия картинки
const titleInput = document.querySelector('.popup__input_type_title');
const linkInput = document.querySelector('.popup__input_type_src');


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
      cardLike.classList.toggle('card__button-like_active');
    })

    cardRemove.addEventListener('click', function() {
      //функция удаления карточки при нажатии на корзину
      card.remove();
    })
 
    imgCard.addEventListener('click', function () {
      //используем функцию открытия попапа при нажатии на картинку
      openedPopup(popupOpenImg);
      popupImg.src = imgCard.src
      popupImg.alt = cardTitle.textContent;
      popupTitleImg.textContent = cardTitle.textContent;
    }); 

 
    return card;

}




addButton.addEventListener('click', function() {
  //используем функция открытия попапа при нажатии на кнопку добавления нововй карточки
  disabledButton(popupButtonСreate, config); //вызываем функцию блокировки кнопки сохранения при каждом открытии попапа
  openedPopup(addCardPopup);
});



function handleCardFormSubmit (evt) {
  //функция добавления новой карточки на страницу
  evt.preventDefault();
  const newCreateCard = {name:titleInput.value, link:linkInput.value};
  renderCard(newCreateCard, elementCard, 'prepend')
  closePopup(addCardPopup)
  formCard.reset()

}

formCard.addEventListener('submit', handleCardFormSubmit)//при сохранении формы добавления новой карточки добавляем на страницу

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




 