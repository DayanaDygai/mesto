const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_invalid',
}

function enableValidation(config) {
  //находим все формы
  const formsList = document.querySelectorAll(config.formSelector);
  //повесим обработчик события сабмит на все формы
  [...formsList].forEach(function(formElement) {
    setEventListener(formElement, config); //вызываем функцию добавления обработчиков события
  });
}

//функция проверки валидности инпута
function checkInputValidity (inputElement, formElement, config) {
  
  const isInputValid = inputElement.validity.valid; //проверяем валидность инпута
  const errorElement = formElement.querySelector(`#${inputElement.name}-error`)//находим элемент, который выводит сообщение об ошибке
  if(!isInputValid) {
    showError(inputElement, errorElement, config); //если инпут не валиден выдаем ошибку
  } else {
    hideError(inputElement, errorElement, config); //если валиден скрываем ошибку
  }
}

function setEventListener(formElement, config) {
  //ищем инпуты внутри каждой формы
  const inputList = formElement.querySelectorAll(config.inputSelector);
  const submitButtonElement = formElement.querySelector(config.submitButtonSelector);//находим кнопку сабмит внутри формы
  toogleButtonState(submitButtonElement, formElement.checkValidity(), config); //проверяем форму на валидность до ввода в инпуты и меняем состояние кнопки
  
  //перебираем список инпутов и вешаем на них обработчики событий
  [...inputList].forEach(function(inputElement){
    inputElement.addEventListener('input', function() {
      toogleButtonState(submitButtonElement, formElement.checkValidity(), config)//проверяем валидность формы перед проверкой каждого инпута для изменения состояния кнопки
      checkInputValidity(inputElement, formElement, config); //вызываем функцию на проверку валидности инпута
    }) //перебираем инпуты и вешаем на них обработчики события
  })

  //повесим обработчик события сабмит на все формы
  formElement.addEventListener('submit', (evt) =>{
    evt.preventDefault();
    if(!formElement.checkValidity()) return; //выходим из функции если форма не валидна
  } );
}

//функция добавление ошибки при не валидном инпуте
function showError(inputElement, errorElement, config) {
  inputElement.classList.add(config.inputErrorClass);//если инпут не проходит валидацию добавляем класс невалидного инпута 
  errorElement.textContent = inputElement.validationMessage; //показываем текст ошибки, который встроен в validationApi
}

//функция скрытия ошибки при валидности инпута
function hideError(inputElement, errorElement, config) {
  inputElement.classList.remove(config.inputErrorClass);//если инпут проходит валидацию удаляем класс невалидного инпута
  errorElement.textContent = inputElement.validationMessage;
}

//функция блокировки кнопки
function disabledButton(buttonElement, config) {
      buttonElement.disabled = 'disabled';//блокируем кнопку если форма не валидна
      buttonElement.classList.add(config.inactiveButtonClass); //добавляем кнопке класс, который делает кнопку не активной
}

//функция разблокировки кнопки
function enableButton(buttonElement,config) {
  buttonElement.disabled = false;//разблокирем кнопку если форма не валидна
  buttonElement.classList.remove(config.inactiveButtonClass); //удаляем класс, который делает кнопку не активной
}

//функция изменения состояния кнопки 
function toogleButtonState(buttonElement, isActive, config) {
    if(!isActive) {
      disabledButton(buttonElement, config);//вызываем функцию блокировки кнопки если форма не проходит валидацию
    } else {
      enableButton(buttonElement, config); //вызываем функцию разблокировки кнопки если функция проходит валидацию
    }
}











enableValidation(config);
