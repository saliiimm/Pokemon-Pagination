import React from 'react';

const PokeCard = ({ pokemon, showPokemonInfo }) => {
  let pokeCardStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '10px',
    cursor: 'pointer',
    backgroundColor: '#f2f2f2',
  };
  return (
    <div style={pokeCardStyle} onClick={() => showPokemonInfo(pokemon)}>
      <div>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
      <div>{pokemon.name}</div>
    </div>
  );
};

export default PokeCard;
