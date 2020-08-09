import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
// import { composeWithDevTools } from "redux-devtools-extension" //for chrome plugin//
import App from './App';

import './styles/index.css';
import './styles/navBar.css'
import './styles/pics.css'
import './styles/belowNav.css'
import './styles/LoginNav.css'
import './styles/LoginSearch.css'
import './styles/fullScreen.css'
import './styles/yourGallery.css'
import './styles/mScreenLrg.css'
import './styles/mScreen1200.css'
import './styles/mScreen1080.css'
import './styles/mScreen890.css'
import './styles/mScreen820.css'
import './styles/mScreen565.css'


const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
