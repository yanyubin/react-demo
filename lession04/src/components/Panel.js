import React, {
    Component
} from 'react'
import PropTypes from 'prop-types'

import InternalPanel from './InternalPanel.js'

class Panel extends Component {
    static propTypes = {
        locale: PropTypes.object
    }
    render() {
        return (
            <div className="panel">
            	<InternalPanel/>
            	<footer locale={this.props.locale}> Panel.js</footer>
            </div>
        );
    }
}

export default Panel