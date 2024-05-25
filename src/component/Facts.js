import logo from '../logo.svg';
import './Facts.css'

// This is just placeholder content for now

function Facts () {
    return (
        <div className="facts">
            <p>Placeholder text</p>
            <div id="spinning-logo">
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            <p>
            Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
            </a>
        </div>
    );
}

export default Facts;
