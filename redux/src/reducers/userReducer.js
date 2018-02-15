const userReducer = (state = {
    name: "斌斌",
    age: 29
}, action) => {
    switch (action.type) {
        case "SET_NAME_FULFILLED":
            return {
                ...state,
                name: action.payload
            }
        case "SET_AGE":
            return {
                ...state,
                age: action.payload
            }
        default:
            return state
    }
}

export default userReducer