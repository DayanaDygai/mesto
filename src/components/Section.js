export class Section {
_renderer;
_containerSelector;


  constructor({renderer}, selector) {
      this._renderer = renderer;
      this._container = document.querySelector(selector);
  
    
  }


//метод добавления карточки
  addItem(elementNode) {
    this._container.prepend(elementNode);        
      }

  //метод для вызова функции рендерер на всех инпутах формы попапов     
  renderItems(items) {
    items.forEach((item) =>
        this._renderer(item)
      );
    }
  }