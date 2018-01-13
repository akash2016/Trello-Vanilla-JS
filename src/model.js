import lane from './enum';

const generateId = () => Math.random().toString(36).substring(7);

class Model {
  constructor() {
    this.cards = [];
  }
  addToDoCard(name, description) {
    console.log(lane.TODO, 'in model');
    this.cards.push({
      id: generateId(), name, description, lane: lane.TODO,
    });
    console.log(this.cards);
  }
}


export default Model;
