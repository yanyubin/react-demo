import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({ dispatch }) => {
    let input
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            if (!input.value.trim()) {
                return
            }
            dispatch(addTodo(input.value.trim()))
            input.value = ''
        }} >
            <input type="text" ref={node => input = node} />
            <button>Add Todo</button>
        </form>
    )
}

export default connect()(AddTodo)