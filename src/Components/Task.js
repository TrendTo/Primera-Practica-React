import React, { Component } from 'react'

class Task extends Component{

    upd(){
        return {
            background : this.props.task.done ? 'green' : 'none',
            color : this.props.task.done ? 'gray' : 'black'
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

const rm = {
    background: '#ee0000',
    color: '#fff'
}

export default Task