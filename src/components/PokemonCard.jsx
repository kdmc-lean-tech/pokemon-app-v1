import React from 'react';
import { useFetchPokemon } from '../hooks/useFetchPokemon';
import { Container, Row, Col, Figure, Card, ListGroup } from 'react-bootstrap';

const PokemonCard = ({ pokemonId }) => {
  const pokemon = useFetchPokemon(pokemonId ? pokemonId : '1');
  return (
    <Container>
      <Row>
        <Card style={{ width: '1024px' }}>
          <Col lg='12' className='d-flex-row'>
            <div className='d-flex flex-row'>
              <Figure>
                <Figure.Image
                  width={371}
                  height={380}
                  src={ pokemon.sprites.other['official-artwork'].front_default }
                />
              </Figure>
              <Card.Body>
                <Card.Title style={{ textTransform: 'capitalize' }}>{ pokemon.name }</Card.Title>
                <Card.Text>
                  It is a pokemon that weighs { pokemon.weight } kg,
                  measures { pokemon.height } meters and has the following movements:
                </Card.Text>
                <ListGroup as='ul' style={{ overflow: 'auto', height: '250px' }}>
                  {
                    pokemon.moves.map((item, idx)=>
                    <ListGroup.Item as='li' key={idx}>{ item.move.name }</ListGroup.Item>)
                  }
                </ListGroup>
              </Card.Body>
            </div>
          </Col>
        </Card>
      </Row>
    </Container>
  );
}

export default PokemonCard;
