import React, {
    Component
} from 'react'
import PropTypes from 'prop-types'

import InternalPanel from './InternalPanel.js'
import WithLocaleHOC from './WithLocaleHOC.js'
class Panel extends Component {
    static propTypes = {
        locale: PropTypes.object
    }
    render() {
        return (
            <div className="panel">
            	<InternalPanel/>
            	<footer>{this.props.locale.strings.footer}</footer>
            </div>
        );
    }
}

export default WithLocaleHOC(Panel)