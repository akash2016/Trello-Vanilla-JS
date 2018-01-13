import lane from './enum';

const createForm = () => `<div>
      <form>
      <label>Name of Task: </label>
      <input class='toDoName' name='toDoName'></input>
      <label>Task Description: </label>
      <input class='toDoDesc' name='toDoDesc'></input>
      <input type='submit' name='addToDo'class='addToDo'/>
      </form>
      </div>`;

const createBoard = (cards) => {
  if (cards.length > 0) {
    return `<div>
    <div id="TODO">
   <h2> ${lane.TODO}</h2>
    ${cards.filter(card => (card.lane === lane.TODO)).map(card => `<div id=${card.id} class='card'>
    ${card.name}
    ${card.description}
    <button class='move'>Hold</button>
    <button class='move'>In Progress</button>
    <button class='move'>Complete</button>
    </div>`)}
    </div>
    </div>`;
  }
  return 'Add Card to Trello';
};

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
