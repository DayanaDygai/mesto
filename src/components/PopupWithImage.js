import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup{
    constructor({popupSelector}, img, title){
        super(popupSelector)
        this._popupImg = img;
       this._titleImg = title;

    }

    //метод открытия попапа
    openedPopup(title, src) {
        super.openedPopup();
        this._popupImg.src = src;
        this._popupImg.alt = title;
        this._titleImg.textContent = title;
   
       
	}

    setEventListeners() {
       super.setEventListeners();
    }

}