class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  handleChange(e) {
    const element = e.target;
    console.log(element.classList[0],'there');
    switch (element.classList[0]) {
      case 'addToDo':
      console.log('in controller');
        if (element.form[0].value && element.form[1].value) {
          this.model.addToDoCard(element.form[0].value, element.form[1].value);
          this.view.render();
        }
        break;
    }
    console.log(element, 'here');
  }
}

export default Controller;
