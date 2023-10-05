export class Popup {

    constructor(popupSelector) {
      this._popup = document.querySelector(popupSelector);
       this._closeButtons =  this._popup.querySelector('.popup__button-esc');
       this._handleEscClose = this._handleEscClose.bind(this);
   
    }

   openPopup () {
        //функция для открытия попаповthis._popup
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose );

       
      }
      
    closePopup () {
        //функция закрытия попапов
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose );
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
      this._closeButtons.addEventListener('click', () => this.closePopup())
        
      this._popup.addEventListener('mousedown', (e) => {
          if  ((e.currentTarget === e.target)) {
            this.closePopup();
          }
      })
    
      
      }
      
  
}