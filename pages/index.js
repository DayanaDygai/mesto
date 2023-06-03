let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let escButton = document.querySelector('.popup__button-esc');
let nameInput = document.querySelector('.popup__input_name');
let jobInput = document.querySelector('.popup__input_work');

function openedPopup() { 
    popup.classList.add('popup_opened');
    inputName.textContent = inputName.value; 
    inputWork.textContent = inputWork.value; 
  
  
  }
  
function closePopup() { 
    popup.classList.remove('popup_opened');  
  
  }

editButton.addEventListener('click', openedPopup);
escButton.addEventListener('click', closePopup);



let formElement = document.querySelector('.popup__form');

function handleFormSubmit (evt) {
    evt.preventDefault();

    nameInput.textContent = nameInput.value
    jobInput.textContent = jobInput.value
    closePopup()

}

formElement.addEventListener('submit', handleFormSubmit);