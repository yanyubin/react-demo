import { combineReducers } from 'redux'
import math from './mathReducer.js'
import user from './userReducer.js'

export default combineReducers({ user, math })