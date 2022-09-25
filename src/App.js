import React from 'react';

import './App.css';
import Pokedex from './components/Pokedex';

import pokemonList from './data';

// const { state } = this;

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Pokedex
          pokemonList={ pokemonList }
        />
      </div>
    );
  }
}

export default App;
