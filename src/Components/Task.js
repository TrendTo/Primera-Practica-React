import React, { Component } from 'react'
import propTypes from 'prop-types'

class Task extends Component{

    upd(){
        return {
            background : this.props.task.done ? 'green' : 'none',
            color : this.props.task.done ? 'white' : 'black'
        }
    }

    render(){

        const {task} = this.props

        return <div>
            {task.title} -
            {task.descripcion} -
            {task.done}
            <button style={this.upd()}>Edit</button>
            <button style={rm}>Remove</button>
        </div>
    }
}

Task.propTypes = {
    task: propTypes.object.isRequired
}

const rm = {
    background: '#ee0000',
    color: '#fff'
}

export default Task