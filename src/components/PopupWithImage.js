import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup{
    constructor({popupSelector}, img, title){
        super(popupSelector)
        this._popupImg = img;
       this._titleImg = title;

    }

    //метод открытия попапа
    openPopup(title, src) {
        super.openPopup();
        this._popupImg.src = src;
        this._popupImg.alt = title;
        this._titleImg.textContent = title;
	}

}