import "./index.css";
import {
  editButton,
  formProfile,
  addButton,
  formCard,
  popupTitleImg,
  popupImg,
  formAvatar,
  editButtonAvatar,
  apiOptions,
} from "../utils/constants.js";
import { config } from "../utils/config.js";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { Api } from "../components/Api.js";
import { PopupWithConfirmation } from "../components/PopupWithConfirmation.js";

const api = new Api(apiOptions);

let myId;

Promise.all([api.getUserInfo(), api.getAllCards()])
  .then(([dataUser, arrCards]) => {
    myId = dataUser._id;
    userInfo.setUserInfo(dataUser);
    arrCards.reverse();
    cardSection.renderItems(arrCards);
  })
  .catch((error) => console.log(`ошибка: ${error}`));

//валидация
const formProfileValidator = new FormValidator(config, formProfile);
formProfileValidator.enableValidation(); //создаем экземпляр класса валидация для формы редактирования профиля
const formCardValidator = new FormValidator(config, formCard); //создаем экземпляр класса валидация для формы добавления новых карточек
formCardValidator.enableValidation();
const formAvatarValidator = new FormValidator(config, formAvatar);
formAvatarValidator.enableValidation();

//создаем эекземпляр класса ueserInfo
const userInfo = new UserInfo({
  nameProfileSelector: ".profile__name",
  descriptionProfileSelector: ".profile__description",
  avatarProfileSelector: ".profile__avatar",
});

//Функция для создания экземпляров класса Card
const addCard = (data) => {
  const card = new Card(
    data,
    myId,
    handleCardClick,
    (id) => {
      popupDeleteCard.openPopup();
      popupDeleteCard.setSubmit(() => {
        api
          .delete(id)
          .then(() => {
            card.deleteCard();
            popupDeleteCard.closePopup();
          })
          .catch((error) => console.log(`ошибка: ${error}`))
          .finally(() => {
            popupDeleteCard.setTextButton();
          });
      });
    },
    (checkLiked, cardId) => {
      if (checkLiked) {
        api
          .deleteLike(cardId)
          .then((res) => {
            card.toggleLike(res.likes);
          })
          .catch((error) => console.log(`ошибка: ${error}`));
      } else {
        api
          .addLike(cardId)
          .then((res) => {
            card.toggleLike(res.likes);
          })
          .catch((error) => console.log(`ошибка: ${error}`));
      }
    },
    "#card-item-template",
  );
  return card.createCard();
};

//Создаем эекземпляр класса Section для отрисовки карточек
const cardSection = new Section(
  {
    renderer: (item) => {
      const newCard = addCard(item);
      cardSection.addItem(newCard);
    },
  },
  ".cards__conteiner",
);

//попапы

//создаем эекземпляр класса PopupWithImage для открытой картинки
const popupImage = new PopupWithImage(
  { popupSelector: "#popup__image" },
  popupImg,
  popupTitleImg,
);
popupImage.setEventListeners();

//создаем эекземпляр класса PopupWithForm для попапа редактирования информации
const profilePopup = new PopupWithForm("#popup__profile", {
  submitHandler: ({ name, about }) => {
    api
      .setUserInfo({ name, about })
      .then((res) => {
        userInfo.setUserInfo({
          name: res.name,
          about: res.about,
          avatar: res.avatar,
        });
        profilePopup.closePopup();
      })
      .catch((error) => console.log(`ошибка: ${error}`))
      .finally(() => profilePopup.setTextButton());
  },
});
profilePopup.setEventListeners(); //вешаем обработчики на попап редактирования информации

//создаем эекземпляр класса PopupWithForm для попапа добавления карточки
const cardPopup = new PopupWithForm("#popup__card", {
  submitHandler: (data) => {
    api
      .createCard(data)
      .then((res) => {
        cardSection.addItem(addCard(res));
        cardPopup.closePopup();
      })
      .catch((error) => console.log(`ошибка: ${error}`))
      .finally(() => cardPopup.setTextButton());
  },
});

cardPopup.setEventListeners(); //вешаем обработчики события на попап добавления карточки

//создание попапа аватара
const popupAvatar = new PopupWithForm("#popup__avatar", {
  submitHandler: (data) => {
    api
      .editAvatar(data)
      .then((res) => {
        userInfo.setUserInfo({
          name: res.name,
          about: res.about,
          avatar: res.avatar,
        });
        popupAvatar.closePopup();
      })
      .catch((error) => console.log(`ошибка: ${error}`))
      .finally(() => popupAvatar.setTextButton());
  },
});

popupAvatar.setEventListeners();

//создание экземпляра класса удаления карточки
const popupDeleteCard = new PopupWithConfirmation("#popup__delete", {
  submitHandler: (id, card) => {
    api
      .deleteCard(id)
      .then(() => {
        card.deleteCard();
      })
      .catch((error) => console.log(`ошибка: ${error}`));
  },
});
popupDeleteCard.setEventListeners();

//функции

//функция для открытия попапа картинок
function handleCardClick(title, link) {
  popupImage.openPopup(title, link);
}

//функция для открытия попапа редактирования
const opepPopupProfile = () => {
  profilePopup.setInputValues(userInfo.getUserInfo());
  formProfileValidator.resetValidation();
  profilePopup.openPopup();
};

const openPopupAvatar = () => {
  popupAvatar.setInputValues(userInfo.getUserInfo());
  formAvatarValidator.resetValidation();
  popupAvatar.openPopup();
};

//функция для открытия попапа добавления карточек
const openPopupCardAdd = () => {
  //используем функция открытия попапа при нажатии на кнопку добавления нововй карточки
  //вызываем функцию блокировки кнопки сохранения при каждом открытии попапа
  formCardValidator.resetValidation();
  cardPopup.openPopup();
};

//обработчики событий для кнопок

addButton.addEventListener("click", openPopupCardAdd); //кнопка добавления карточек

editButton.addEventListener("click", opepPopupProfile); //кнопка редактирования информации

editButtonAvatar.addEventListener("click", openPopupAvatar); //кнопка редактирования аватара
