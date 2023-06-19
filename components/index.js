let popup = document.querySelector('#popup__profile'); //находим попап в DOM  
let editButton = document.querySelector('.profile__edit-button'); //находим кнопку редактирования в DOM 
let escButton = document.querySelector('.popup__button-esc'); // находим кнопку закрытия в DOM 
let nameInput = document.querySelector('.popup__input_type_name'); //находим значение формы инпута имени в DOM 
let jobInput = document.querySelector('.popup__input_type_work'); //находим значение формы инпута работы в DOM 
let nameProfile = document.querySelector('.profile__name'); //находим значение имени в DOM 
let descriptionProfile = document.querySelector('.profile__description'); //находим значение работы в DOM 
let formElement = document.querySelector('.popup__form'); //находим форму в DOM

function openedPopup() { 
    popup.classList.add('popup_opened'); //добавляем класс меняющий значение display для попап при нажатии кнопки редактирования
    nameInput.value = nameProfile.textContent; //вставляем данные в value инпута name значение текста из профиля
    jobInput.value = descriptionProfile.textContent; //вставляем данные в value инпута work значение текста из профиля
  
  
  }
  
function closePopup() { 
    popup.classList.remove('popup_opened'); //удаляем класс меняющий значение display для попап при нажатии кнопки закрытия
  
  }


function handleFormSubmit (evt) {
    evt.preventDefault();

    nameProfile.textContent = nameInput.value;
    descriptionProfile.textContent = jobInput.value;
    closePopup()

}
editButton.addEventListener('click', openedPopup);
escButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', handleFormSubmit);