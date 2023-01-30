// класс отвечает за отрисовку элементов на странице.
// items — массив данных, которые нужно добавить на страницу при инициализации класса.
// renderer — функция, которая отвечает за создание и отрисовку данных на странице.

export class Section {
  constructor({ items, renderer }, selector) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._container = selector;
  }

  // отрисовка всех элементов
  renderItems() {
    this._renderedItems.forEach((item) => {
      this._renderer(item);
    });
  }

  // принимает DOM-элемент и добавляет его в контейнер
  addItem(element) {
    this._container.prepend(element);
  }
}
