import React from 'react';
import { arrayOf, number } from 'prop-types';

import { pokemonType } from '../types';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    const { pokemonList, pkmnIndex } = this.props;
    return (
      <>
        <h1> Pokédex </h1>
        <div className="pokedex">
          {pokemonList
            .map((pkmn) => <Pokemon key={ pkmn.id } pokemon={ pkmn } />)[pkmnIndex]}
        </div>
      </>
    );
  }
}

Pokedex.defaultProps = {
  pokemonList: [],
  pkmnIndex: 0,
};

Pokedex.propTypes = {
  pokemonList: arrayOf(pokemonType),
  pkmnIndex: number,
};

export default Pokedex;
