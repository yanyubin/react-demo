import React from 'react'
import PropTypes from 'prop-types'

import WithLocaleHOC from './WithLocaleHOC.js'

class ContentPanle extends React.Component {
    static propTypes = {
        locale: PropTypes.object
    }
    render() {
        const {
            locale
        } = this.props
        return (
            <div className="contentPanel">
            	<h1>{locale.strings.header }</h1>
            	<p>{locale.strings.text}</p>
            	<button>{locale.strings.buttonLabel}</button>
            	<footer>ContentPanle.js</footer>
            </div>
        );
    }
}

export default WithLocaleHOC(ContentPanle)