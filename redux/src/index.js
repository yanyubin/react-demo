import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'

import App from './App'
import './index.css';

const initialState = {
    result: 1,
    lastValues: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            return {
                ...state,
                result: state.result + action.payload
            }
        case "SUBTRACT":
            return {
                ...state,
                result: state.result - action.payload
            }
        default:
            return state
    }
}


const store = createStore(reducer)

store.subscribe(() => {
    console.log("Store update!", store.getState())
})

store.dispatch({
    type: "ADD",
    payload: 100
})

store.dispatch({
    type: "SUBTRACT",
    payload: 100
})

render(
    <App />,
    document.getElementById('root')
)