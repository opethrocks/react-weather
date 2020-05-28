import React from 'react';
import logo from './logo.svg';
import Logo from './components/Logo/Logo';
import './App.css';
import Forecast from "./components/Forecast/Forecast";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <h1>React Weather App</h1>
      </header>
      <main>
        <Forecast />
      </main>
      <footer>
        Page created by Matt LeBleu
      </footer>
    </div>
  );
}


export default App;
