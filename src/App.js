import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Frontend is currently <code>in development</code> .
        </p>
        <a
          className="App-link"
          href="https://www.benwyw.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Outdated site
        </a>
        <ul>
          <li>Testing</li>
          <li>1 2 3</li>
          <li>Testing</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
