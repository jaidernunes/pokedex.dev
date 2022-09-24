import React from 'react';

class NextButton extends React.Component {
  render() {
    // const { pokemon } = this.props;
    // const { name, type, averageWeight, image } = pokemon;
    const infiniteLoopNext = (i, l) => {
      if (i >= l) i = 0;
      i += 1;

      return i;
      // from https://stackoverflow.com/questions/14388291/how-to-get-the-previous-and-next-elements-of-an-array-loop-in-javascript
    };
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
