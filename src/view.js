const createForm = () => `<div>
      <form>
      <label>Name of Task: </label>
      <input class='toDoName' name='toDoName'></input>
      <label>Task Description: </label>
      <input class='toDoDesc' name='toDoDesc'></input>
      <input type='submit' class='addToDo'/>
      </form>
      </div>`;

class View {
  constructor(model) {
    this.model = model;
  }
  render() {
    const domId = document.getElementById('root');
    const form = createForm();
    domId.innerHTML = `<div>${form}</div>`;
  }
}


export default View;
