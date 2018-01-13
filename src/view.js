const createForm = () => `<div>
      <form>
      <label>Name of Task: </label>
      <input class='toDoName' name='toDoName'></input>
      <label>Task Description: </label>
      <input class='toDoDesc' name='toDoDesc'></input>
      <input type='submit' class='addToDo'/>
      </form>
      </div>`;

const createBoard = (cards) => (cards.length >0 ? 'hello' : 'Add Card to Trello');

class View {
  constructor(model) {
    this.model = model;
  }
  render() {
    const domId = document.getElementById('root');
    const form = createForm();
    const board = createBoard(this.model.cards);
    domId.innerHTML = `<div>${form}<br /> ${board}</div>`;
  }
}


export default View;
