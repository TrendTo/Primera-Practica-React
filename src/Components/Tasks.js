import React, { Component } from 'react'
import propTypes from 'prop-types'

import Task from './Task'

class Tasks extends Component{
    render(){
        return this.props.tasks.map(e => <Task task={e} key={e.id} deleteTask={this.props.deleteTask} updateTask={this.props.updateTask}/>)
    }
}

Tasks.propTypes = {
    tasks: propTypes.array.isRequired
}

export default Tasks