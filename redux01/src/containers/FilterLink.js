import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { setVisibilityFilter } from '../actions'

const Link = ({ children, active, onClick }) => {
    if (active) {
        return <span>{children}</span>
    }
    return (
        <a onClick={e => {
            e.preventDefault()
            onClick()
        }}>{children}</a>
    )
}

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
}

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => {
        dispatch(setVisibilityFilter(ownProps.filter))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Link)

