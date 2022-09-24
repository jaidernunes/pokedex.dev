import React from 'react';

import './App.css';
import Pokedex from './components/Pokedex';

import pokemonList from './data';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Pokedex pokemonList={ pokemonList } pokemonIndex="0" />
      </div>
    );
  }
}

export default App;
