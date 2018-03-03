import { ADD_TODO, TOGGLE_TODO } from '../constants'
import undoable, { includeAction } from 'redux-undo'


const todo = (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                id: action.id,
                text: action.text,
                completed: action.completed
            }
        case TOGGLE_TODO: {
            if (state.id !== action.id) {
                return state
            }
            return {
                ...state,
                completed: !state.completed
            }
        }
        default:
            return state
    }
}

const todos = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                todo(null, action)
            ]
        case TOGGLE_TODO:
            return state.map(t => todo(t, action))
        default:
            return state
    }
}

export default undoable(todos, { filter: includeAction([ADD_TODO, TOGGLE_TODO]) })