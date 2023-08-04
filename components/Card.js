import {openedPopup} from "./index.js" //импортируем функцию открытия попапов
import { popupOpenImg, popupImg, popupTitleImg } from "./index.js" //импортируем константы попапа открытой карточки

export class Card {
		#name;
		#link;
		#cardElement;
		#templateCard;
		#cardLike;
		#cardTitle;
		#imgCard;
		#cardRemove;
		#getCard() {
			return document
			.querySelector(this.#templateCard)
			.content.querySelector('.card')
			.cloneNode(true);//находим темплейт карточек
		}
    constructor({name, link, cardLike, cardTitle, imgCard, cardRemove},
			 templateCard) {
			this.#name = name;
			this.#link = link;
			this.#cardLike = cardLike;
			this.#cardTitle = cardTitle;
			this.#imgCard = imgCard;
			this.#cardRemove = cardRemove;

			this.#templateCard = templateCard;
			
    }
	//метод изменения лайка
	_toggleLike(cardLike){
		cardLike.classList.toggle('card__button-like_active');
	}

	//метод удаления карточки
	_deleteCard(cardElement) {
		cardElement.remove();
	}

	//метод открытия попапа с картинкой
	_handleImageClick(imgCard, cardTitle) {
		openedPopup(popupOpenImg);
		popupImg.src = imgCard.src
		popupImg.alt = cardTitle.textContent;
		popupTitleImg.textContent = cardTitle.textContent;
	}


	//метод установки слушателей 
	_setEventListener() {
		this.#cardLike.addEventListener('click', () => this._toggleLike(this.#cardLike)
		//слушатель изменения состояния кнопки лайка при нажатии
		
		)

		this.#cardRemove.addEventListener('click', () => this._deleteCard(this.#cardElement)
		//слушатель удаления карточки при нажатии на корзину
	
		);

		this.#imgCard.addEventListener('click', () => this._handleImageClick(this.#imgCard, this.#cardTitle)
		//слушатель открытия попапа при нажатии на картинку
	
		); 
	}

	createCard () {
	//функция добавления новых карточек на страницу
		this.#cardElement = this.#getCard();//создаем копию темплейта
		this.#imgCard  = this.#cardElement.querySelector('.card__img');//находим картинку карточки 
		this.#cardTitle = this.#cardElement.querySelector('.card__title');//находим заголовок карточки    
		this.#cardLike = this.#cardElement.querySelector('.card__like-button');//находим кнопку лайка карточки
		this.#cardRemove = this.#cardElement.querySelector('.card__remove-button');//находим кнопку удаления карточки

		this.#cardTitle.textContent = this.#name;
		this.#imgCard.src = this.#link ;
		this.#imgCard.alt = this.#name;


		this._setEventListener(); //вешаем обработчики событий на карточки


		return this.#cardElement; 
	
	}
}