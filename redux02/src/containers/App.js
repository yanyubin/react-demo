import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import * as TodoActions from '../actions'

import Header from '../components/Header'
import MainSection from '../components/MainSection'

import { connect } from 'react-redux'

const App = ({ todos, actions }) => {
    return (
        <div>
            <Header addTodo={actions.addTodo} />
            <MainSection todos={todos} actions={actions} />
        </div>
    )
}

App.propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    todos: state.todos
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
