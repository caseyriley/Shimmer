import React, { useState, useEffect, useReducer } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import YourGallery from './components/YourGallery';
import LoginPanel from './components/LoginPanel';
import PokemonBrowser from './components/PokemonBrowser';
import { loadToken } from './actions/authentication';





const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    rest.needLogin === true
      ? <Redirect to='/login' />
      : <Component {...props} />
  )} />
)

let largePic = '';
let starGallery = ['flazooo'];
export const ACTIONS = {
  ADDTOGALLERY: 'addToGallery'
} 

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADDTOGALLERY:
     return { gallery: [...state.starGallery, ...largePic]}
  }
}

const App = ({ needLogin, loadToken }) => {

  const [state, dispatch] = useReducer(reducer, { starGallery: ['boopaloop'] })
  // console.log(state)
  // console.log(dispatch)

  // function addToGallery(largePic) {
  //   dispatch({ type: ACTIONS.ADDTOGALLERY, payload: {largePic: largePic}});
  // }

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    loadToken();
  }, [loadToken]);

  if (!loaded) {
    return null;
  }
  
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={LoginPanel} dispatch={dispatch} starGallery={state.starGallery}/>
        <Route path="/gallery" render={() => <YourGallery dispatch={dispatch} starGallery={state.starGallery}/>}></Route>
        <PrivateRoute path="/"
          exact={true}
          needLogin={needLogin}
          component={PokemonBrowser} 
          dispatch={dispatch} starGallery={state.starGallery}
          />
        <PrivateRoute path="/pokemon/:pokemonId"
          exact={true}
          needLogin={needLogin}
          component={PokemonBrowser} 
          dispatch={dispatch} starGallery={state.starGallery}
          />
      </Switch>
    </BrowserRouter>
  );
};


const mapStateToProps = state => {
  return {
    needLogin: !state.authentication.token,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadToken: () => dispatch(loadToken()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  App
);
