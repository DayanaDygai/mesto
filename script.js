let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let escButton = document.querySelector('.popup__button-esc');

function openProfileButton() { 
    popup.classList.add('popup_opened');  
  
  }
  
function closeProfileButton() { 
    popup.classList.remove('popup_opened');  
  
  }

editButton.addEventListener('click', openProfileButton);
escButton.addEventListener('click', closeProfileButton);



let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input-name');
let jobInput = document.querySelector('.popup__input-work');


function handleFormSubmit (evt) {
    evt.preventDefault();

    nameInput.value = nameInput.textContent
    jobInput.value = jobInput.textContent

}

formElement.addEventListener('submit', handleFormSubmit);