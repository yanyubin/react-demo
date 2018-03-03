import React, { Component } from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import Footer from '../components/Footer'
import UndoRedo from './UndoRedo'


export default class App extends Component {
    render() {
        return (
            <div className="app">
                <AddTodo />
                <TodoList />
                <Footer />
                <UndoRedo />
            </div >
        )
    }
}
