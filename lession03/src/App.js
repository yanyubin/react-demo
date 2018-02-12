import React, {
    Component
} from 'react';

import Parent from './components/Parent.js'
import SlideShow from './components/SlideShow.js'
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <SlideShow>
                    <img src="http://placekitten.com/300/202" alt="Cat Pic" />
                    <img src="http://placekitten.com/300/201" alt="Cat Pic" />
                    <img src="http://placekitten.com/300/202" alt="Cat Pic" />
                </SlideShow>
            </div>
        );
    }
}

export default App;