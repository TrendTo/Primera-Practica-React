import React, { Component } from 'react'

class Task extends Component{

    render(){

        const {task} = this.props

        return <div>
            {task.title} -
            {task.descripcion} -
            {task.done}
            <button>Edit</button>
            <button style={rm}>Remove</button>
        </div>
    }
}

const rm = {
    background: '#ee0000',
    color: '#fff'
}

export default Task