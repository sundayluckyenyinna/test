import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src="logo192.png" className="another" alt="logo" width="100" height="100" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React and enjoy yourself. This is a new year.
        </a>
        <h1> Hello world </h1>
      </header>
    </div>
  );
}

export default App;
