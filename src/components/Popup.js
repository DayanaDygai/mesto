export class Popup {

    constructor(popupSelector) {
      this._selectorPopup = popupSelector;
       this._closeButtons =  document.querySelectorAll('.popup__button-esc');
       this._handleEscClose = this._handleEscClose
    }

   openedPopup () {
        //функция для открытия попапов
        this._selectorPopup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose );
        this._selectorPopup.addEventListener('click', this.closeOverlay); 
       
      }
      
    closePopup () {
        //функция закрытия попапов
        this._selectorPopup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose );
        this._selectorPopup.removeEventListener('click', this.closeOverlay);
      }
      
    closeOverlay (evt) {
        //функция закрытия попапов при клике на оверлей
        if(evt.target.classList.contains('popup_opened')) {
         this.closePopup();
        };
      }
      
      _handleEscClose(evt) {
        if (evt.key === 'Escape') {
          this.closePopup();
        }
      }
      
      setEventListeners() {     
        this._closeButtons.forEach((button) => {
        button.addEventListener('click', () => this.closePopup())
      });
        
        this._selectorPopup.addEventListener('mousedown', (e) => {
          if  ((e.currentTarget === e.target) || (e.target === this._closeButtons)) {
            this.closePopup();
          }
      })
      
      }
      
  
}