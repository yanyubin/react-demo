import React from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import App from './App'
import './index.css';


const mathReducer = (state = {
    result: 1,
    lastValues: [],
}, action) => {
    switch (action.type) {
        case "ADD":
            return {
                ...state,
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            }
        case "SUBTRACT":
            return {
                ...state,
                result: state.result - action.payload,
                lastValues: [...state.lastValues, action.payload]
            }
        default:
            return state
    }
}

const userReducer = (state = {
    name: "斌斌",
    age: 29
}, action) => {
    switch (action.type) {
        case "SET_NAME":
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

const myLogger = (store) => (next) => (action) => {
    console.log("Logged Action:", action)
    next(action)
}

const store = createStore(
    combineReducers({ mathReducer, userReducer }), {},
    applyMiddleware(logger)
)

store.subscribe(() => {
    //console.log("Store update!", store.getState())
})

store.dispatch({
    type: "ADD",
    payload: 100
})

store.dispatch({
    type: "SUBTRACT",
    payload: 50
})

store.dispatch({
    type: "SUBTRACT",
    payload: 20
})

store.dispatch({
    type: "SET_AGE",
    payload: 30
})

store.dispatch({
    type: "SET_NAME",
    payload: "张三"
})

render(
    <App />,
    document.getElementById('root')
)