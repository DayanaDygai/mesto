import {config} from "./config.js"
import {Card} from "./Card.js";
import { FormValidator } from "./FormValidator.js";


const popupProfile = document.querySelector('#popup__profile'); //находим попап изменения информации профиля в DOM  
const editButton = document.querySelector('.profile__edit-button'); //находим кнопку редактирования информации профиля в DOM 
const nameInput = document.querySelector('.popup__input_type_name'); //находим значение формы инпута имени в DOM 
const jobInput = document.querySelector('.popup__input_type_work'); //находим значение формы инпута работы в DOM 
const nameProfile = document.querySelector('.profile__name'); //находим значение имени в DOM 
const descriptionProfile = document.querySelector('.profile__description'); //находим значение работы в DOM 
const formProfile = popupProfile.querySelector('.popup__form'); //находим форму редактирования информации профиля в DOM

const elementCard = document.querySelector('.cards__conteiner');//находим контейнер попапа карточки

const addButton = document.querySelector('.profile__add-button');//находим кнопку добавления новых карточек
const addCardPopup = document.querySelector('#popup__card');//находим попап добавления карточек
const formCard = addCardPopup.querySelector('#popup__form-card');//находим форму добавления карточек
export const popupOpenImg = document.querySelector('#popup__image');//находим попап открытия картинок
export const popupImg = popupOpenImg.querySelector('.popup__img');//находим открытые картинки
export const popupTitleImg = popupOpenImg.querySelector('.popup__img-title');//находим заголовок открытой картинки
const titleInput = document.querySelector('.popup__input_type_title');
const linkInput = document.querySelector('.popup__input_type_src');

const formProfileValidator = new FormValidator(config, formProfile);
formProfileValidator.enableValidation();//создаем экземпляр класса валидация для формы редактирования профиля
const formCardValidator= new FormValidator(config, formCard);//создаем экземпляр класса валидация для формы добавления новых карточек
formCardValidator.enableValidation();

export function openedPopup (popup) {
  //функция для открытия попапов
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
  popup.addEventListener('click', closeOverlay); 
 
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

closePopupButtonClose ();
 


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
  formProfileValidator.resetValidation();
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

addButton.addEventListener('click', () => {
  //используем функция открытия попапа при нажатии на кнопку добавления нововй карточки
  //вызываем функцию блокировки кнопки сохранения при каждом открытии попапа
  openedPopup(addCardPopup);
  formCardValidator.resetValidation();
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
  const cardElement = new Card({name, link}, '#card-item-template').createCard();
  //функция определяющая куда будет добавлена карточка
    switch (position) {
      case "append":
        container.append(cardElement);
        break;
      case "prepend":
        container.prepend(cardElement);
        break;
      case "before":
        container.before(cardElement);
        break;
      case "after":
        container.after(cardElement);
        break;
      default:
        break;
    }
  
  }

  initialCards.forEach((item) => {
    //функция добавления карточки из массива
    renderCard(item, elementCard, 'append');
  })




 