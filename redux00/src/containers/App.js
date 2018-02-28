import React, { Component } from 'react'
import AddTodo from './AddTodo'
import VisibleTodoList from './VisibleTodoList'
export default class App extends Component {
    render() {
        return (
            <div>
                <AddTodo />
                <VisibleTodoList />
            </div>
        )
    }
}
