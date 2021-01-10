import React from 'react';
import { useFetchPokemons } from '../hooks/useFetchPokemons';
import { Form } from 'react-bootstrap';

const SelectPokemon = ({ setPokemonId }) => {
  const pokemons = useFetchPokemons();

  const handleSetPokemonId = (e) => {
    setPokemonId(e.target.value);
  }

  return (
    <Form>
      <Form.Group>
        <Form.Control
          as="select"
          custom
          onChange={ handleSetPokemonId }
          >
          {
            pokemons?.map(({ id, name }) => <option key={ id } value={ id }>{ name }</option>)
          }
        </Form.Control>
      </Form.Group>
    </Form>
  );
}

export default SelectPokemon;
