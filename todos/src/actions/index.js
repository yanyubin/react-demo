import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from "../constants";

let nextId = 0
export const addTodo = (text) => {
    return {
        type: ADD_TODO,
        todo: {
            id: nextId++,
            completed: false,
            text
        }
    }
}

export const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        id: id
    }
}

export const setVisibilityFilter = (filter) => {
    return {
        type: SET_VISIBILITY_FILTER,
        filter
    }
}