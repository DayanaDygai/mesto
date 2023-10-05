
export class Card {
    constructor(data, userId,handleCardClick, handleDeleteCard, handleCardLike,
			 templateCard) {
			this._title = data.name;
			this._img = data.link;
			this._handleCardClick = handleCardClick;
			this._templateCard = templateCard;
			this._handleDeleteCard = handleDeleteCard;
			this._handleCardLike = handleCardLike;
			this._userId = userId;
			this._arrLikes = data.likes;
			this._likesLength = data.likes.length;
			this._ownerId = data.owner._id;
			this._cardId = data._id;
			this._cardElement = this._getCard();
			this._imgCard  = this._cardElement.querySelector('.card__img');
			this._cardTitle = this._cardElement.querySelector('.card__title');//находим заголовок карточки    
			this._cardLike = this._cardElement.querySelector('.card__like-button');//находим кнопку лайка карточки
			this._cardRemove = this._cardElement.querySelector('.card__remove-button');//находим кнопку удаления карточки
			this._likesCounter = this._cardElement.querySelector('.card__like-counter')//находим счетчик лайков
    }

	_getCard() {
		return document
		.querySelector(this._templateCard)
		.content.querySelector('.card')
		.cloneNode(true);//находим темплейт карточек
	}

	//метод переключения лайка
	toggleLike(likes) {
		this._cardLike.classList.toggle('card__button-like_active')
		this._likesCounter.textContent = likes.length
	  }

	//метод проверки наличия лайка на карточке
	checkLiked = () => {
		return this._cardLike.classList.contains('card__button-like_active');
	  }

	_handleLike = () => { 
		this._handleCardLike(this.checkLiked(), this._cardId);
	  }

	//метод добавления лайков в счетчик из массива
	_counterLike() {
		this._arrLikes.forEach(item => {
		  if (item._id === this._cardId) {
			this._cardLike.classList.add('card__button-like_active')			
		  }
		  this._likesCounter.textContent = this._likesLength
		})
		
	  }

	  

	//метод удаления карточки
	deleteCard() {
		this._cardElement.remove();
	}

	_handleDelete = () => {
		this._handleDeleteCard(this._cardId);
	  }


	//метод для добавления/блокировки кнопки удления карточки
	_setCardButtonDelete() {
        if(this._userId === this._ownerId) {
		this._cardRemove.style.display = 'block';
	  } else {
		this._cardRemove.style.display = 'none';
	}

    }

	createCard () {
	//функция добавления новых карточек на страницу

		this._imgCard.src = this._img;
		this._imgCard.alt = this._title;
		this._cardTitle.textContent = this._title;
		this._counterLike();
		this._setCardButtonDelete();
		this._setEventListener(); //вешаем обработчики событий на карточки
		return this._cardElement; 
	
	}

	_setEventListener() {
		this._cardLike.addEventListener('click', this._handleLike);
		//слушатель изменения состояния кнопки лайка при нажатии
		

		this._cardRemove.addEventListener('click',this._handleDelete);
		//слушатель удаления карточки при нажатии на корзину

		this._imgCard.addEventListener('click', () => this._handleCardClick( this._title, this._img)); 
		// слушатель открытия попапа при нажатии на картинку
	
	}
}