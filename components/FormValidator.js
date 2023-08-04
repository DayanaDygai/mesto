
export class FormValidator {
    constructor(config, formElement ) {
        this._config = config;
        this._formElement = formElement;
        this._inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
        this._submitButtonElement = this._formElement.querySelector(this._config.submitButtonSelector);
    }

    //метод валидации формы
    enableValidation() {
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });

        this._setEventListener(this._formElement, this._config.inputSelector); // устанавливаем слушатели событий input для полей формы
      }
      
      //метод вешающий слушатели событий
      _setEventListener() {
        this._toogleButtonState(this._formElement.checkValidity()); //проверяем форму на валидность до ввода в инпуты и меняем состояние кнопки
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);// // Проверяем валидность поля              
                this._toogleButtonState(this._formElement.checkValidity()); // Проверяем валидность формы при каждом вводе символа в инпут
            });
        });
      }
      
      
      
    //   метод проверки валидности инпута
      _checkInputValidity (inputElement) {
        const isInputValid = inputElement.validity.valid; //проверяем валидность инпута
        const errorElement = this._formElement.querySelector(`#${inputElement.name}-error`)//находим элемент, который выводит сообщение об ошибке
        if(!isInputValid) {
          this._showError(inputElement, errorElement); //если инпут не валиден выдаем ошибку
        } else {
          this._hideError(inputElement, errorElement); //если валиден скрываем ошибку
        }
      } 
      
      //метод добавления ошибки при не валидном инпуте
      _showError(inputElement) {
        const errorElement = this._formElement.querySelector(`#${inputElement.name}-error`)
        inputElement.classList.add(this._config.inputErrorClass);//если инпут не проходит валидацию добавляем класс невалидного инпута 
        errorElement.textContent = inputElement.validationMessage; //показываем текст ошибки, который встроен в validationApi
      }
      
      //метод скрытия ошибки при валидности инпута
    _hideError(inputElement) {
      const errorElement = this._formElement.querySelector(`#${inputElement.name}-error`)
        inputElement.classList.remove(this._config.inputErrorClass);//если инпут проходит валидацию удаляем класс невалидного инпута
        errorElement.textContent = '';
      }


      resetValidation() {
       this._toogleButtonState(); 
  
        this._inputList.forEach((inputElement) => {
          this._hideError(inputElement) 
        });
  
      }
      
      //метод блокировки кнопки
    _disabledButton() {
      this._submitButtonElement.disabled = 'disabled';//блокируем кнопку если форма не валидна
      this._submitButtonElement.classList.add(this._config.inactiveButtonClass); //добавляем кнопке класс, который делает кнопку не активной
      }
      
      //метод разблокировки кнопки
      _enableButton() {
        this._submitButtonElement.disabled = false;//разблокирем кнопку если форма  валидна
        this._submitButtonElement.classList.remove(this._config.inactiveButtonClass); //удаляем класс, который делает кнопку не активной
      }

      //метод проверки списка инпутов на валидность
      _checkInputListValid() {
        return this._inputList.some(inputElement => {
          return !inputElement.validity.valid;
        });
      }

      //метод изменения состояния кнопки 
     _toogleButtonState() {
          if(this. _checkInputListValid()) {
            this._disabledButton();//вызываем функцию блокировки кнопки если форма не проходит валидацию
          } else {
            this._enableButton(); //вызываем функцию разблокировки кнопки если функция проходит валидацию
          }
      }

      


}

  
  
  
  
  
  
  
  
  
  
  
  
  