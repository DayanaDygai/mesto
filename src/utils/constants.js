export const popupProfile = document.querySelector('#popup__profile'); //находим попап изменения информации профиля в DOM  
export const editButton = document.querySelector('.profile__edit-button'); //находим кнопку редактирования информации профиля в DOM 
export const nameInput = document.querySelector('.popup__input_type_name'); //находим значение формы инпута имени в DOM 
export const jobInput = document.querySelector('.popup__input_type_work'); //находим значение формы инпута работы в DOM 
export const nameProfile = document.querySelector('.profile__name'); //находим значение имени в DOM 
export const descriptionProfile = document.querySelector('.profile__description'); //находим значение работы в DOM 
export const formProfile = popupProfile.querySelector('#popup__form-profile'); //находим форму редактирования информации профиля в DOM
export const elementCard = document.querySelector('.cards__conteiner');//находим контейнер попапа карточки
export const addButton = document.querySelector('.profile__add-button');//находим кнопку добавления новых карточек
export const addCardPopup = document.querySelector('#popup__card');//находим попап добавления карточек
export const formCard = addCardPopup.querySelector('#popup__form-card');//находим форму добавления карточек
export const popupOpenImg = document.querySelector('#popup__image');//находим попап открытия картинок
export const popupImg = popupOpenImg.querySelector('.popup__img');//находим открытые картинки
export const popupTitleImg = popupOpenImg.querySelector('.popup__img-title');//находим заголовок открытой картинки
export const titleInput = addCardPopup.querySelector('.popup__input_type_title');
export const linkInput = addCardPopup.querySelector('.popup__input_type_src');
export const inputValues = document.querySelector('.popup__input')
export const cardTemplate = '#card-item-template';

export const initialCards = [
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

