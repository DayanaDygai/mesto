import './pages/index.css'; 
import {popupProfile, 
  editButton, 
  nameInput, 
  jobInput, 
  formProfile, 
  addButton, 
  addCardPopup, 
  formCard, 
  initialCards,
  popupOpenImg,popupTitleImg, popupImg} from "./utils/constants.js";
import {config} from "./components/config.js";
import {Card} from "./components/Card.js";
import { FormValidator } from "./components/FormValidator.js";
import { Section } from "./components/Section.js";
import { PopupWithImage } from "./components/PopupWithImage.js";
import { PopupWithForm } from "./components/PopupWithForm.js";
import { UserInfo } from "./components/UserInfo.js";



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
  const cardAdd = ({name, link}) => {
    const card = new Card({name, link}, handleCardClick, '#card-item-template')
    return card.createCard();
    
  }

  //Создаем эекземпляр класса Section для отрисовки карточек
  const cardSection = new Section({data: initialCards, 
    renderer: (item) => {
      const newCard = cardAdd(item);
      cardSection.addItem(newCard);
  }
  }, ".cards__conteiner")
  
  cardSection.renderItems(); //метод Section для отрисовки карточек

//попапы

//создаем эекземпляр класса PopupWithImage для открытой картинки
const popupImage = new PopupWithImage({popupSelector:popupOpenImg},popupImg, popupTitleImg );

//создаем эекземпляр класса PopupWithForm для попапа редактирования информации
const profilePopup = new PopupWithForm(popupProfile,
 {submitHandler: () => {
    userInfo.setUserInfo({name:nameInput.value, work:jobInput.value});
    profilePopup.closePopup();
  
}
});
profilePopup.setEventListeners();//вешаем обработчики на попап редактирования информации



//создаем эекземпляр класса PopupWithForm для попапа редактирования информации
const cardPopup = new PopupWithForm(addCardPopup, {
  submitHandler: ({name,link}) => {
  const newCard = cardAdd({name,link})
  cardSection.addItem(newCard)
  cardPopup.closePopup();


}});

cardPopup.setEventListeners();//вешаем обработчики события на попап добавления карточки

//функции

//функция для открытия попапа картинок
function handleCardClick(title, link) {
  popupImage.openedPopup(title, link);
  popupImage.setEventListeners();
   
}

//функция для открытия попапа редактирования
const opepPopupProfile = ()=> {
  const {name, work} = userInfo.getUserInfo()
  nameInput.value =  name.textContent;
  jobInput.value =  work.textContent;
  formProfileValidator.resetValidation();
  profilePopup.openedPopup();


};

//функция для открытия попапа добавления карточек
const openPopupCardAdd = () => {
  //используем функция открытия попапа при нажатии на кнопку добавления нововй карточки
    //вызываем функцию блокировки кнопки сохранения при каждом открытии попапа
    formCardValidator.resetValidation();
    cardPopup.openedPopup();
   

}

//обработчики событий для кнопок

addButton.addEventListener('click',  openPopupCardAdd);//кнопка добавления карточек

editButton.addEventListener('click', opepPopupProfile);//кнопка редактирования информации
















