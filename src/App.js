import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Home from './pages/Home';
import CountryHappiness from './pages/CountryHappiness';
import Yakyik from './pages/Yakyik';
import MovieAndTv from './pages/MovieAndTv';
import Cotripper from './pages/Cotripper';
import './app.css';

export default function App() {
  return (
    <Router>
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} classNames='fade' timeout={1000}>
              <Switch location={location}>
                <Redirect path='/' exact to='home' />
                <Route path='/home' exact component={Home} />
                <Route
                  path='/work/CountryHappiness'
                  exact
                  component={CountryHappiness}
                />
                <Route path='/work/Yakyik' exact component={Yakyik} />
                <Route path='/work/MovieAndTv' exact component={MovieAndTv} />
                <Route path='/work/Cotripper' exact component={Cotripper} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </Router>
  );
}
