import React, { Fragment } from 'react';
import { Jumbotron } from 'react-bootstrap';
import PokemonContainer from './PokemonContainer';

const Navbar = () => {
  return (
    <Fragment>
      <Jumbotron>
        <h1 className='text-center'>Pokemon App</h1>
      </Jumbotron>
      <PokemonContainer />
    </Fragment>
  );
}

export default Navbar;
