import React, { Component } from 'react'

class Task extends Component{

    render(){

        const {task} = this.props

        return <div>
            {task.title} -
            {task.descripcion} -
            {task.done}
            <button>Edit</button>
            <button>Remove</button>
        </div>
    }
}

export default Task