class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  handleChange(e) {
    const element = e.target;
    switch (element.classList[0]) {
      case 'addToDo':
      console.log('in controller');
        debugger;
        if (element.form[0].value && element.form[1].value) {
          this.model.addToDoCard(element.form[0].value, element.form[1].value);
          this.view.render();
        }
        break;

        case 'move':
        // console.log(this.model);
        this.model.changeLane(element.parentElement.id,element.name);
        this.view.render();
        break;
    }
    console.log(element, 'here');
  }
}

export default Controller;
