export class Section {
_renderer;
_containerSelector;


  constructor({data, renderer}, selector) {
      this._renderer = renderer;
      this._container = document.querySelector(selector);
      this._items = data;
    
  }


//метод добавления карточки
  addItem(elementNode) {
    this._container.prepend(elementNode);        
      }

  //метод для вызова функции рендерер на всех инпутах формы попапов     
  renderItems() {
    this._items.forEach((item) =>
        this._renderer(item)
      );
    }
  }