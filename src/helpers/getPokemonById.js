
export const getPokemonById = async (pokemonId) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
  const response = await fetch(url);
  const pokemon = await response.json();
  return pokemon;
}
