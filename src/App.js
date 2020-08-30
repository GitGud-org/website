import React from 'react';
import GitGud from './GitGud.jpg';
import './App.css';
import {LogoGithubIcon} from '@primer/octicons-react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={GitGud} className="App-image" alt="" />
        <p>
          A better git experience.
        </p>
        <a
          className="App-link"
          href="https://github.com/GitGud-org/GitGud"
        >
          <LogoGithubIcon size={16} />
        </a>
      </header>
    </div>
  );
}

export default App;
