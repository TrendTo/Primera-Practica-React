import React, { Component } from 'react'
import propTypes from 'prop-types'

import Task from './Task'

class Tasks extends Component{
    render(){
        return this.props.tasks.map(e => <Task task={e} key={e.id}/>)
    }
}

Tasks.propTypes = {
    tasks: propTypes.array.isRequired
}

export default Tasks