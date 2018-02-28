import { ADD_TODO, TOGGLE_TODO } from '../constants'

const todos = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.todo]
        case TOGGLE_TODO:
            return state.map(todo => (todo.id === action.id) ? { ...todo, completed: !todo.completed } : todo)
        default:
            return state
    }
}

export default todos