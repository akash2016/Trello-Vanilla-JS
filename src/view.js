import lane from './enum';

const createForm = () => `<div align="center">
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
    return `<div style="display:grid;grid-template-columns: auto auto auto auto">
    <div id="TODO" >
   <h2 style="color:black"> ${lane.TODO}</h2>
    ${cards.filter(card => (card.lane === lane.TODO)).length > 0 ? cards.filter(card => (card.lane === lane.TODO)).map(card => `<div id=${card.id} class='card'>
    ${card.name}:
    ${card.description}
    <button class='move' name='HOLD'>Hold</button>
    <button class='move' name='INPROGRESS'>In Progress</button>
    <button class='move' name='COMPLETE'>Complete</button>
    </div>`) : 'Nothing new TODO'}
    </div>
    <div id="InProgress">
    <h2> ${lane.INPROGRESS}</h2>
    ${cards.filter(card => (card.lane === lane.INPROGRESS)).length > 0 ? cards.filter(card => (card.lane === lane.INPROGRESS)).map(card => `<div id=${card.id} class='card'>
    ${card.name}:
    ${card.description}
    <button class='move' name='HOLD'>Hold</button>
    <button class='move' name='COMPLETE'>Complete</button>
    </div>`) : 'Nothing in Progress yet'}
    </div>
    <div id="Hold">
    <h2> ${lane.HOLD}</h2>
    ${cards.filter(card => (card.lane === lane.HOLD)).length > 0 ? cards.filter(card => (card.lane === lane.HOLD)).map(card => `<div id=${card.id} class='card'>
    ${card.name}:
    ${card.description}
    <button class='move' name='INPROGRESS'>In Progress</button>
    <button class='move' name='COMPLETE'>Complete</button>
    </div>`) : 'Nothing on hold yet'}
    </div>
    <div id="Complete">
    <h2> ${lane.COMPLETE}</h2>
    ${cards.filter(card => (card.lane === lane.COMPLETE)).length > 0 ? cards.filter(card => (card.lane === lane.COMPLETE)).map(card => `<div id=${card.id} class='card'>
    ${card.name}:
    ${card.description}
    <button class='move' name='INPROGRESS'>In Progress</button>
    <button class='move' name='HOLD'>Hold</button>
    </div>`) : 'Nothing complete yet'}
    </div>
    </div>`;
  }
  return '';
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
