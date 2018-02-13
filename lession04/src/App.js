import React, {
    Component
} from 'react';
import PropTypes from 'prop-types'
import Panel from './components/Panel.js'

import './App.css';

import en from './locales/en.json'
import pt from './locales/pt.json'

const locales = {
    en,
    pt
}
class App extends Component {
    static childContextTypes = {
        locale: PropTypes.object
    }

    state = {
        currentLocale: 'en'
    }
    getChildContext() {
        return {
            locale: locales[this.state.currentLocale]
        }
    }

    changeLocale(locale) {
        this.setState({
            currentLocale: locale
        })
    }
    render() {
        return (
            <div className="App">
                <nav>
                    <span>Change locale :  </span>
                    <a onClick={() => this.changeLocale('en')}>en</a>
                    <a onClick={() => this.changeLocale('pt')}>pt</a>
                </nav>
                <Panel></Panel>
            </div>
        );
    }
}

export default App;