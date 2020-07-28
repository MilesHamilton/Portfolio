import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'materialize-css/dist/css/materialize.min.css';
import CountryHappiness from './components/CountryHappiness';
import Yakyik from './components/Yakyik';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import MovieAndTv from './components/MovieAndTv';
import Cotripper from './components/Cotripper';

const routing = (
  <Router>
    <Route path='/' component={App} />
  </Router>
);

ReactDOM.render(
  <React.StrictMode>{routing}</React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
