
import React from 'react';
import LocationList from './components/LocationList';
import './App.css';

const cities = [
  'Buenos Aires,ar',
  'Washington,us',
  'Bogota,col',
  'Ciudad de México,mx',
  'Madrid,es',
  'Lima,pe'
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LocationList cities={cities}/>
      </header>
    </div>
  );
}

export default App;
