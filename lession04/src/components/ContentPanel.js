import React from 'react'
import PropTypes from 'prop-types'

class ContentPanle extends React.Component {
    static contextTypes = {
        locale: PropTypes.object
    }
    render() {
        const {
            locale
        } = this.context
        console.log(this.context)
        return (
            <div className="contentPanel">
            	<h1>{locale.header }</h1>
            	<p>{locale.text}</p>
            	<button>{locale.buttonLabel}</button>
            	<footer>ContentPanle.js</footer>
            </div>
        );
    }
}

export default ContentPanle