import { Popup } from "./Popup.js";

export class PopupWithConfirmation extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._form = this._popup.querySelector('.popup__form')
        this._popupButton = this._form.querySelector('.popup__button-save')
        this._buttonText = this._popupButton.textContent;

    }

    setSubmit(submitForm) {
        this._submitForm = submitForm
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._popupButton.textContent = 'Удаление...';
            this._submitForm();

        });
    }

    setTextButton() {
            this._popupButton.textContent = this._buttonText;
        }
    
    }
