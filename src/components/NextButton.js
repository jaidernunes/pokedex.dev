import React from 'react';

class NextButton extends React.Component {
  render() {
    // const { pokemon } = this.props;
    // const { name, type, averageWeight, image } = pokemon;
    return (
      <button onClick={ infiniteLoopNext } type="button" name="Próximo pokémon">
        Próximo pokémon
      </button>
    );
  }
}

// Button.propTypes = {
//   pokemon: pokemonType.isRequired,
// };

export default NextButton;
