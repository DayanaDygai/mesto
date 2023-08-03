export class Card {
		#name;
		#link;
		#cardElement;
		#templateCard;
		#handleClickDelete;
		#handleClickLike;
		#handeClickImg;
		#cardLike
		#getCard() {
			return document
			.querySelector(this.#templateCard)
			.content.querySelector('.card')
			.cloneNode(true);//находим темплейт карточек
		}
    constructor({name, link, cardLike, handleClickDelete, handleClickLike, handeClickImg},
			 templateCard) {
			this.#name = name;
			this.#link = link;
			this.#cardLike = cardLike;
			this.#templateCard = templateCard;
			this.#handleClickDelete = handleClickDelete;
			this.#handleClickLike = handleClickLike;
			this.#handeClickImg = handeClickImg;
			
    }

	createCard () {
	//функция добавления новых карточек на страницу
		this.#cardElement = this.#getCard();//создаем копию темплейта
		const imgCard  = this.#cardElement.querySelector('.card__img');//находим картинку карточки 
		const cardTitle = this.#cardElement.querySelector('.card__title');//находим заголовок карточки    
		this.#cardLike = this.#cardElement.querySelector('.card__like-button');//находим кнопку лайка карточки
		const cardRemove = this.#cardElement.querySelector('.card__remove-button');//находим кнопку удаления карточки

		cardTitle.textContent = this.#name;
		imgCard.src = this.#link ;
		imgCard.alt = this.#name;


		this.#cardLike.addEventListener('click', () => this.#handleClickLike(this.#cardLike)
		//функция изменения состояния кнопки лайка при нажатии
		
		)

		cardRemove.addEventListener('click', () => this.#handleClickDelete(this.#cardElement)
		//функция удаления карточки при нажатии на корзину
	
		);

		imgCard.addEventListener('click', () => this.#handeClickImg(imgCard, cardTitle)
		//используем функцию открытия попапа при нажатии на картинку
	
		); 


		return this.#cardElement;
	
	}
}