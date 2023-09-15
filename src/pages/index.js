import './index.css'; 
import {popupProfile, 
  editButton, 
  nameInput, 
  jobInput, 
  formProfile, 
  addButton, 
  addCardPopup, 
  formCard, 
  initialCards,
  popupOpenImg,popupTitleImg, popupImg} from "../utils/constants.js";
import {config} from "../utils/config.js";
import {Card} from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";



//валидация
const formProfileValidator = new FormValidator(config, formProfile);
formProfileValidator.enableValidation();//создаем экземпляр класса валидация для формы редактирования профиля
const formCardValidator= new FormValidator(config, formCard);//создаем экземпляр класса валидация для формы добавления новых карточек
formCardValidator.enableValidation();


//создаем эекземпляр класса ueserInfo
const userInfo = new UserInfo({
  nameProfileSelector:'.profile__name', 
  descriptionProfileSelector: '.profile__description'});

//Функция для создания экземпляров класса Card
  const addCard = ({name, link}) => {
    const card = new Card({name, link}, handleCardClick, '#card-item-template')
    return card.createCard();
    
  }

  //Создаем эекземпляр класса Section для отрисовки карточек
  const cardSection = new Section({data: initialCards, 
      renderer: (item) => {
      const newCard = addCard(item);
      cardSection.addItem(newCard);
  }
  }, ".cards__conteiner")
  
  cardSection.renderItems(); //метод Section для отрисовки карточек

//попапы

//создаем эекземпляр класса PopupWithImage для открытой картинки
const popupImage = new PopupWithImage({popupSelector:'#popup__image'},popupImg, popupTitleImg );
popupImage.setEventListeners();

//создаем эекземпляр класса PopupWithForm для попапа редактирования информации
const profilePopup = new PopupWithForm('#popup__profile',
 {submitHandler: ({name, work}) => {
    userInfo.setUserInfo({name, work});
    
    profilePopup.closePopup();
  
}
});
profilePopup.setEventListeners();//вешаем обработчики на попап редактирования информации



//создаем эекземпляр класса PopupWithForm для попапа редактирования информации
const cardPopup = new PopupWithForm('#popup__card', {
  submitHandler: ({name,link}) => {
  const newCard = addCard({name,link})
  cardSection.addItem(newCard)
  cardPopup.closePopup();


}});

cardPopup.setEventListeners();//вешаем обработчики события на попап добавления карточки

//функции

//функция для открытия попапа картинок
function handleCardClick(title, link) {
  popupImage.openPopup(title, link);
   
}

//функция для открытия попапа редактирования
const opepPopupProfile = ()=> {
  const {name, work} = userInfo.getUserInfo()
  profilePopup.setInputValues({name, work})
  formProfileValidator.resetValidation();
  profilePopup.openPopup();


};

//функция для открытия попапа добавления карточек
const openPopupCardAdd = () => {
  //используем функция открытия попапа при нажатии на кнопку добавления нововй карточки
    //вызываем функцию блокировки кнопки сохранения при каждом открытии попапа
    formCardValidator.resetValidation();
    cardPopup.openPopup();
   

}

//обработчики событий для кнопок

addButton.addEventListener('click',  openPopupCardAdd);//кнопка добавления карточек

editButton.addEventListener('click', opepPopupProfile);//кнопка редактирования информации
















