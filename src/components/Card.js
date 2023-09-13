// import Popup from "./Popup.js" //импортируем функцию открытия попапов
// import { popupOpenImg, popupImg, popupTitleImg } from "./index.js" //импортируем константы попапа открытой карточки

export class Card {
		#cardElement;
		#cardLike;
		#cardTitle;
		#imgCard;
		#cardRemove;
    constructor({name, link}, handleCardClick,
			 templateCard) {
			this._title = name;
			this._img = link;
			this._handleCardClick = handleCardClick;
			this._templateCard = templateCard;

			
    }

	_getCard() {
		return document
		.querySelector(this._templateCard)
		.content.querySelector('.card')
		.cloneNode(true);//находим темплейт карточек
	}

	//метод изменения лайка
	_toggleLike(cardLike){
		cardLike.classList.toggle('card__button-like_active');
	}

	//метод удаления карточки
	_deleteCard(cardElement) {
		cardElement.remove();
	}

	_handleImageCard() {
		this.#imgCard.addEventListener('click', () => {
            this._handleCardClick(this._img, this._title);
        })
	}


	createCard () {
	//функция добавления новых карточек на страницу
		this.#cardElement = this._getCard();//создаем копию темплейта
		this.#imgCard  = this.#cardElement.querySelector('.card__img');//находим картинку карточки 
		this.#imgCard.src = this._img;
		this.#imgCard.alt = this._title;
		this.#cardTitle = this.#cardElement.querySelector('.card__title');//находим заголовок карточки    
		this.#cardLike = this.#cardElement.querySelector('.card__like-button');//находим кнопку лайка карточки
		this.#cardRemove = this.#cardElement.querySelector('.card__remove-button');//находим кнопку удаления карточки
		this.#cardTitle.textContent = this._title;

		this._setEventListener(); //вешаем обработчики событий на карточки


		return this.#cardElement; 
	
	}

	_setEventListener() {
		this.#cardLike.addEventListener('click', () => this._toggleLike(this.#cardLike)
		//слушатель изменения состояния кнопки лайка при нажатии
		
		)

		this.#cardRemove.addEventListener('click', () => this._deleteCard(this.#cardElement)
		//слушатель удаления карточки при нажатии на корзину
	
		);

		this.#imgCard.addEventListener('click', () => this._handleCardClick( this._title, this._img)
		// слушатель открытия попапа при нажатии на картинку
	
		); 
	}
}