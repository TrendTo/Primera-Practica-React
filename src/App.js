import React, { Component } from 'react';
import './App.css';

import tasks from './sample/tasks.json'

class NewApp extends Component{
  
  state = {
    tasks : tasks
  }
  
  render(){
    return <div>
      {this.state.tasks.map(e => <p key={e.id}>
        {e.title} - {e.descripcion} - {e.done}
      </p>)}
    </div>
  }
}

export default NewApp;
