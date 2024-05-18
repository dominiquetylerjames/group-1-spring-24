import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar'
import Home from './component/Home'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* These are how comments are made in JSX! */}
        <Navbar />
        <Home />
        <img src={logo} className="App-logo" alt="logo" />
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
      </header>
    </div>
  );
}

export default App;
