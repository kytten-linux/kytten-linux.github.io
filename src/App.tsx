import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          A Linux distro targetting both power-users and beginners.
        </p>
        <a
          className="App-link"
          href="https://github.com/kytten-linux/kytten-linux.github.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          View source code on Github.
        </a>
      </header>
    </div>
  );
}

export default App;
