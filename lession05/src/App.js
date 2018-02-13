import React, {
    Component
} from 'react';
import PropTypes from 'prop-types'
import Panel from './components/Panel.js'
import Locale from './locales/Locale.js'
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.locale = new Locale('en')
    }
    static childContextTypes = {
        locale: PropTypes.object
    }
    componentWillUpdate(nextProps, nextState) {
        this.locale.setLanguage(nextState.currentLocale)
    }
    getChildContext() {
        return {
            locale: this.locale
        }
    }
    changeLocale(locale) {
        this.locale.setLanguage(locale)
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