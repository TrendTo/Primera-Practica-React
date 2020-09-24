import React, { Component } from 'react';
import './App.css';

import tasks from './sample/tasks.json'
import Tasks from './Components/Tasks'

class NewApp extends Component{
  
  state = {
    tasks : tasks
  }
  
  render(){
    return <div>
      <Tasks tasks={this.state.tasks}/>
    </div>
  }
}

export default NewApp;
