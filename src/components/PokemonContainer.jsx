import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PokemonCard from './PokemonCard';
import SelectPokemon from './SelectPokemon';

const PokemonContainer = () => {
  const [pokemonId, setPokemonId] = useState();
  return (
    <Container>
      <Row>
        <Col lg='12' md='12' xs='12' className='d-flex justify-content-center'>
          <SelectPokemon setPokemonId={ setPokemonId } />
        </Col>
        <Col lg='12' md='12' xs='12' className='d-flex justify-content-center'>
          <PokemonCard pokemonId={ pokemonId }/>
        </Col>
      </Row>
    </Container>
  );
}

export default PokemonContainer;
