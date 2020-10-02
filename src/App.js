import React, { Component } from 'react';
import './App.css';

import tasks from './sample/tasks.json'
import Tasks from './Components/Tasks'
import TaskForm from './Components/TaskForm';

class NewApp extends Component{
  
  state = {
    tasks : tasks
  }

  addTask = (task) => {
    const newTask = {
      title: task.title,
      descripcion: task.description,
      id : this.state.tasks.length
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }
  
  render(){
    return <div>
      <Tasks tasks={this.state.tasks}/>
      <TaskForm addTask={this.addTask}/>
    </div>
  }
}

export default NewApp;
