import React from 'react'

import ContentPanel from './ContentPanel.js'

class InternalPanel extends React.Component {
    render() {
        return (
            <div className="internalPanel">
				<ContentPanel></ContentPanel>
				<footer>InternalPanel.js</footer>
            </div>
        );
    }
}

export default InternalPanel