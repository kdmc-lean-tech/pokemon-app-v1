import { useEffect, useState } from 'react';
import { getPokemonList } from '../helpers/getPokemonList';
import { getPokemonId } from '../shared/utils/pokemon';

export const useFetchPokemons = () => {
  const [ state, setState ] = useState([]);
  useEffect(() => {
    getPokemonList()
    .then(response => {
      const pokemons = response?.map(({ name, url }) => {
        return {
          id: getPokemonId(url),
          name
        };
      });
      setState(pokemons);
    });
  }, []);
  return state;
}
