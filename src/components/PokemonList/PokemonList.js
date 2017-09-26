
import React from 'react';

import PokemonItem from '../PokemonItem/PokemonItem';

import styles from 'PokemonList.css';

export default ({pokemons}) => (
  <div className={styles.pokemonListContainer}>
    {
      pokemons.map((pokemon) =>
        <PokemonItem pokemon={pokemon} />
      )
    }
  </div>
);
