import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from '../constants'

let nextTodoId = 0

export const addTodo = (text) => ({
    type: ADD_TODO,
    id: nextTodoId++,
    completed: false,
    text
})

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id
})

export const setVisibilityFilter = (filter) => ({
    type: SET_VISIBILITY_FILTER,
    filter
})