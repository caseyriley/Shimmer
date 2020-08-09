import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { NavLink, Route } from 'react-router-dom';

// import { imageUrl } from '../config';
import LogoutButton from './LogoutButton';
import PokemonDetail from './PokemonDetail';
import PokemonForm from './PokemonForm';
// import Fab from './Fab';
import { getPokemon, showForm } from '../actions/pokemon';
import Explore from './Explore';

const PokemonBrowser = ({
  token,
  match,
  pokemonList,
  formVisible,
  getPokemon,
  showForm, 
}) => {
  const { pokemonId } = match.params;

  useEffect(() => {
    getPokemon();
  }, [getPokemon]);

  if (!pokemonList) {
    return null;
  }

  return (
    <main>
      {/* <LogoutButton token={token} /> */}
      <Explore token={token}></Explore>
      <nav>
        {/* <Explore></Explore> */}
        {/* <Fab hidden={formVisible} onClick={showForm} />
        {pokemonList.map(pokemon => {
          return (
            <NavLink key={pokemon.name} to={`/pokemon/${pokemon.id}`}>
              <div className={(Number.parseInt(pokemonId) === pokemon.id) ? 'nav-entry is-selected' : 'nav-entry'}>
                <div className="nav-entry-image"
                  style={{ backgroundImage: `url('${imageUrl}${pokemon.imageUrl}')` }}>
                </div>
                <div>
                  <div className="primary-text">{pokemon.name}</div>
                  <div className="secondary-text">Born {new Date(pokemon.updatedAt).toDateString()}</div>
                </div>
              </div>
            </NavLink>
          );
        })} */}
      </nav>

      {formVisible ?
        <PokemonForm token={token} /> :
        <Route path="/pokemon/:id" render={(props) => <Explore {...props} token={token} />} />
      }
    </main>
  );
};

const mapStateToProps = state => {
  return {
    pokemonList: state.pokemon.list,
    formVisible: state.pokemon.formVisible,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getPokemon: () => dispatch(getPokemon()),
    showForm: () => dispatch(showForm()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonBrowser);
