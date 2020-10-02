import React, { Component } from 'react'

export default class TaskForm extends Component{
    
    state = {
        title: '',
        description: ''
    }

    Submit = e => {
        this.props.addTask(this.state)
        e.preventDefault()
    }

    Change = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return <form onSubmit={this.Submit}>
            <input type="text" name="title" placeholder="Write a text" onChange={this.Change}/><br/>
            <textarea name="description" placeholder="Send a message" onChange={this.Change}></textarea><br/>
            <input type="submit"/>
        </form>
    }
}