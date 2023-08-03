
export class FormValidator {
    constructor(config, formElement, inputList, submitButtonElement ) {
        this.config = config;
        this.formElement = formElement;
        this.inputList = inputList;
        this.submitButtonElement = submitButtonElement;
    }

    enableValidation() {
        this.formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });

        this._setEventListener(this.formElement, this.config.inputSelector); // устанавливаем слушатели событий input для полей формы
      }
      
      _setEventListener() {
        //ищем инпуты внутри каждой формы
        this.inputList = this.formElement.querySelectorAll(this.config.inputSelector);
        this.submitButtonElement = this.formElement.querySelector(this.config.submitButtonSelector);//находим кнопку сабмит внутри формы
        this._toogleButtonState(this.formElement.checkValidity()); //проверяем форму на валидность до ввода в инпуты и меняем состояние кнопки
        this.inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);// // Проверяем валидность поля              
                this._toogleButtonState(this.formElement.checkValidity()); // Проверяем валидность формы при каждом вводе символа в инпут
            });
        });
      }
      
      
      
    //   функция проверки валидности инпута
      _checkInputValidity (inputElement) {
        const isInputValid = inputElement.validity.valid; //проверяем валидность инпута
        const errorElement = this.formElement.querySelector(`#${inputElement.name}-error`)//находим элемент, который выводит сообщение об ошибке
        if(!isInputValid) {
          this._showError(inputElement, errorElement); //если инпут не валиден выдаем ошибку
        } else {
          this._hideError(inputElement, errorElement); //если валиден скрываем ошибку
        }
      } 
      
      //функция добавление ошибки при не валидном инпуте
      _showError(inputElement, errorElement) {
        inputElement.classList.add(this.config.inputErrorClass);//если инпут не проходит валидацию добавляем класс невалидного инпута 
        errorElement.textContent = inputElement.validationMessage; //показываем текст ошибки, который встроен в validationApi
      }
      
      //функция скрытия ошибки при валидности инпута
    _hideError(inputElement, errorElement) {
        inputElement.classList.remove(this.config.inputErrorClass);//если инпут проходит валидацию удаляем класс невалидного инпута
        errorElement.textContent = inputElement.validationMessage;
      }
      
      //функция блокировки кнопки
    _disabledButton(buttonElement) {
            buttonElement.disabled = 'disabled';//блокируем кнопку если форма не валидна
            buttonElement.classList.add(this.config.inactiveButtonClass); //добавляем кнопке класс, который делает кнопку не активной
      }
      
      //функция разблокировки кнопки
      _enableButton(buttonElement) {
        buttonElement.disabled = false;//разблокирем кнопку если форма не валидна
        buttonElement.classList.remove(this.config.inactiveButtonClass); //удаляем класс, который делает кнопку не активной
      }
      
      //функция изменения состояния кнопки 
     _toogleButtonState(isActive) {
          if(!isActive) {
            this._disabledButton(this.submitButtonElement);//вызываем функцию блокировки кнопки если форма не проходит валидацию
          } else {
            this._enableButton(this.submitButtonElement); //вызываем функцию разблокировки кнопки если функция проходит валидацию
          }
      }


}

  
  
  
  
  
  
  
  
  
  
  
  
  