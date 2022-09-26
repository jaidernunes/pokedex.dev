import React from 'react';
import { arrayOf } from 'prop-types';

import { pokemonType } from '../types';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokeIndex: 0,
      pokeType: '',
    };
    this.nextPokemon = this.nextPokemon.bind(this);
    this.typeToFilter = this.typeToFilter.bind(this);
  }

  nextPokemon(pkmnMax) {
    this.setState((state) => ({
      pokeIndex: (state.pokeIndex + 1) % pkmnMax,
    }));
  }

  typeToFilter(type) {
    this.setState(() => ({
      pokeType: type,
      pokeIndex: 0,
    }));
  }

  render() {
    const { pokeIndex, pokeType } = this.state;
    const { pokemonList } = this.props;
    const filteredList = pokemonList.filter((pokemon) => {
      if (pokeType === '') return true;
      return pokemon.type === pokeType;
    });

    return (
      <>
        <h1> Pokédex </h1>
        <div className="pokedex">
          {/* <Pokemon pokemon={ pokemonList[pokeIndex] } /> */}
          {/* <Pokemon
            pokemon={ pokemonList.filter((pokemon) => {
              if (pokeType === '') return true;
              return pokemon.type === pokeType;
            })[pokeIndex] }
          /> */}
          <Pokemon
            pokemon={ filteredList[pokeIndex] }
          />
          <div className="panel">
            <button
              type="button"
              className="buttons"
              onClick={ () => this.nextPokemon(filteredList.length) }
            >
              Próximo pokémon
            </button>

            <button
              className="buttons"
              type="button"
              onClick={ () => this.typeToFilter('Psychic') }
            >
              Tipo Psíquico
            </button>
            <button
              className="buttons"
              type="button"
              onClick={ () => this.typeToFilter('Fire') }
            >
              Tipo Fogo
            </button>
            <button
              className="buttons"
              type="button"
              onClick={ () => this.typeToFilter('') }
            >
              Limpar Filtro
            </button>

          </div>
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
