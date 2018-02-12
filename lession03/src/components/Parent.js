import React, {
    Children
} from 'react'
import PropTypes from 'prop-types'

class Parent extends React.Component {
    render() {

        const buttons = Children.map(this.props.children, (button) => (<button>{button}</button>))

        return (
            <div>
				<h1>Total Children: { Children.count(this.props.children) }</h1>
				{buttons}
	        </div>
        )
    }
}

export default Parent