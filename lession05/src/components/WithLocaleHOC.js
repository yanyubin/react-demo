import React from 'react'
import PropTypes from 'prop-types'

const WithLocaleHOC = (WrappedComponent) => {
    return class WithLocaleHOC extends React.Component {
        static contextTypes = {
            locale: PropTypes.object
        }
        componentDidMount() {
            this.context.locale.subscribe(() => {
                this.forceUpdate()
            })
        }
        render() {
            const {
                locale
            } = this.context
            return <WrappedComponent {...this.props} locale={locale}/>
        }
    }
}

export default WithLocaleHOC