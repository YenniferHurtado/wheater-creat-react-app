import React from 'react';
import WeatherLocation from './components/WeatherLocation'
import './App.css';

// arrow function de una linea:no colocamos return
// const miFunction = () => (material.length + 1);
// en casa de más lineas llaves y el return

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WeatherLocation />
      </header>
    </div>
  );
}

export default App;
