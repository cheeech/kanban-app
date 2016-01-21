import uuid from 'node-uuid';
import React from 'react';

export default class App extends React.Component 
{
  constructor(props) {
    super(props);
    
    this.addNote = this.addNote.bind(this);

    this.state = {
      notes: [
        {
          id: uuid.v4(),
          task: 'Learn Webpack'
        },
        {
          id: uuid.v4(),
          task: 'Learn React'
        },
        {
          id: uuid.v4(),
          task: 'Do laundry'
        }
      ]
    };
  }

  render() {
    const notes = this.state.notes;
   
    return (
      <div>
      <button onClick={this.addNote}>+</button>
        <ul>{notes.map((note) =>
          <li key={note.id}>{note.task}</li>
          )}</ul>
      </div>
    );
  }
  addNote(state) {
    this.setState({
      notes: this.state.notes.concat([{
        id: uuid.v4(),
        task: 'New Task'
      }])
    }, () => console.log('set state!'));
  };

}
  
//   addNote = () => {
//     this.setState({
//       notes: this.state.notes.concat([{
//         id: uuid.v4(),
//         task: 'New Task'
//       }])
//     });
//   };
// }