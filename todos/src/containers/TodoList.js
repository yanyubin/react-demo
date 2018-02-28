import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'

const TodoList = ({ todos, onTodoClick }) => (
    <ul>
        {todos.length > 0 && todos.map(todo => <li style={{
            textDecoration: todo.completed ? 'line-through' : 'none'
        }} onClick={() => onTodoClick(todo.id)} key={todo.id}>{todo.text}</li>)}
    </ul>
)

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed)
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed)
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}

const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}

const mapDispatchToProps = {
    onTodoClick: toggleTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
