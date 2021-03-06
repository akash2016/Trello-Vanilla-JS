import Controller from './controller';
import View from './view';
import Model from './model';

class App {
  constructor() {
    this.model = new Model();
    this.view = new View(this.model);
    this.controller = new Controller(this.model, this.view);
  }
}
const myTrello = new App();

window.addEventListener('click', (e) => {
  e.preventDefault();
  myTrello.controller.handleChange(e);
});

myTrello.view.render();
