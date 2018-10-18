import React, {
    Component
} from 'react';
import logo from './logo.svg';
import './App.scss';
import Background from './Background';

class App extends Component {
    render() {
        return (
            <div>
                <Background />
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <p>
                            Sample gh-page.
                        </p>
                    </header>
                </div>
            </div>

        );
    }
}

export default App;
