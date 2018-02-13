import React, { Component } from 'react'

import User from './components/User'
import Main from './components/Main'

class App extends Component {
    state = {
        username: "zhandan"
    }
    changeUsername = (name) => {
        this.setState({
            username: name
        })
    }
    render() {
        return (
            <div className="container">
                <Main changeUsername={this.changeUsername}/>
                <User username={this.state.username}/>
            </div>
        );
    }
}

export default App