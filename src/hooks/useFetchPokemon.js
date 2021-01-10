import { useState, useEffect } from 'react';
import { getPokemonById } from '../helpers/getPokemonById';

const initialState = {
  name: null,
  weight: null,
  base_experience: null,
  height: null,
  moves: [
    {
      move: { name: null, url: null }
    }
  ],
  sprites: {
    other: {
      'official-artwork': {}
    }
  }
}

export const useFetchPokemon = (pokemonId) => {
  const [ state, setState ] = useState(initialState);
  useEffect(() => {
    getPokemonById(pokemonId)
      .then(response => {
        setState(response);
      });
  }, [ pokemonId ]);
  return state;
}
