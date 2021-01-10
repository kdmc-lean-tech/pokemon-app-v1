
export const getPokemonList = async () => {
  const url = `https://pokeapi.co/api/v2/pokemon`;
  const response = await fetch(url);
  const { results } = await response.json();
  return results;
}
