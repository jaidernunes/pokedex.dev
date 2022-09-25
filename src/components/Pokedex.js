import React from 'react';
import { arrayOf } from 'prop-types';

import { pokemonType } from '../types';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokeIndex: 0,
    };
    this.nextPokemon = this.nextPokemon.bind(this);
  }

  nextPokemon(pkmnMax) {
    this.setState((state) => ({
      pokeIndex: (state.pokeIndex + 1) % pkmnMax,
    }));
  }

  render() {
    const { pokeIndex } = this.state;
    const { pokemonList } = this.props;

    return (
      <>
        <h1> Pokédex </h1>
        <div className="pokedex">
          <Pokemon pokemon={ pokemonList[pokeIndex] } />
          <button
            type="button"
            onClick={ () => this.nextPokemon(pokemonList.length) }
          >
            Próximo pokémon
          </button>
          {/* {pokemonList
            .map((pokemon) => <Pokemon key={ pokemon.id } pokemon={ pokemon } />)} */}
        </div>
      </>
    );
  }
}

Pokedex.defaultProps = {
  pokemonList: [],
};

Pokedex.propTypes = {
  pokemonList: arrayOf(pokemonType),
};

export default Pokedex;
