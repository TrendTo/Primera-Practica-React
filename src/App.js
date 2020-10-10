import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

import tasks from './sample/tasks.json'
import Tasks from './Components/Tasks'
import TaskForm from './Components/TaskForm';
import Posts from './Components/Posts'

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

  deleteTask = (id) => {
    const newTask = this.state.tasks.filter( task => task.id !== id)
    this.setState({ tasks : newTask})
  }
  
  updateTask = id => {
    const newTask = this.state.tasks.map( task => {
      if (task.id === id) {
        task.done = !task.done
      }
      return task
    })
    this.setState({ tasks : newTask})
  }
  
  render(){
    return <div>
    <Router>
      <Route exact path="/" render={() => {
        return <div>
          <Tasks tasks={this.state.tasks} deleteTask={this.deleteTask} updateTask={this.updateTask}/>
          <TaskForm addTask={this.addTask}/>
        </div>
      }} />
      <Route path="/posts" component={Posts} />
    </Router>
    </div>
  }
}

export default NewApp;
