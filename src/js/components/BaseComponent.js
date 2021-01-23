export default class BaseComponent {
  constructor() {
  }

  _setHandlers(handlers) {
    handlers.forEach((handler) => {
      this._addHandler(...handler);
    });
  }

  _addHandler(element, event, handler) {
    element.addEventListener(event, handler);
  }

  _removeHandler(element, event, handler) {
    element.removeEventListener(event, handler);
  }
}