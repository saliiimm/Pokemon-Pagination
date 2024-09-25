import React from 'react';
import PokeCard from '../PokeCard/PokeCard';

const PokeDex = ({ pokemonList, showPokemonInfo }) => {
  let pokemonStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(5,1fr)',
    gap: '10px',
    background: 'linear-gradient(to bottom,#f2f2f2, #d9d9d9)',
    opacity: '0.6',
  };
  return (
    <div style={pokemonStyle}>
      {pokemonList.map((pokemon, index) => (
        <PokeCard
          pokemon={pokemon}
          key={index}
          showPokemonInfo={showPokemonInfo}
        />
      ))}
    </div>
  );
};

export default PokeDex;
