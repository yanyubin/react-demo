import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import { SHOW_ACTIVE, SHOW_ALL, SHOW_COMPLETED } from '../constants'
import Todo from '../components/Todo'

const TodoList = ({ todos, dispatch }) => {
    return (
        <ul>
            {todos.map(todo => <Todo {...todo} key={todo.id} onClick={() => {
                dispatch(toggleTodo(todo.id))
            }} />)}
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
    }).isRequired, ).isRequired,
    dispatch: PropTypes.func.isRequired,
}

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case SHOW_ALL:
            return todos
        case SHOW_ACTIVE:
            return todos.filter(t => !t.completed)
        case SHOW_COMPLETED:
            return todos.filter(t => t.completed)
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}

const mapStateToProps = (state) => ({
    todos: getVisibleTodos(state.todos.present, state.visibilityFilter)
})


export default connect(mapStateToProps, null)(TodoList)
