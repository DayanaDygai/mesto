import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor(popupSelector,{submitHandler}) {
        super(popupSelector)
        this._form = this._popup.querySelector('.popup__form');
        this._inputList = Array.from(this._form.querySelectorAll('.popup__input'))
        this._submitHandler = submitHandler;

    }

    _getInputValues(){
        this.inputValues = {};
        this._inputList.forEach(input => {
            this.inputValues[input.name] = input.value;

        })
     
        return this.inputValues
    }

    setEventListeners(){
        super.setEventListeners();
        this._form.addEventListener('submit', (e) => {
            e.preventDefault();
            this._submitHandler(this._getInputValues());
        })
    }

    closePopup(){
        super.closePopup();
        this._form.reset();
    }
    
}