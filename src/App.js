import React from 'react';
import './App.css';
import 'materialize-css';
import Nav from './components/Nav';
import Projects from './components/Projects';
import About from './components/About';
import Layout from './components/Layout';
import Skills from './components/Skills';
import Contact from './components/Contact';
// import CountryHappiness from './components/CountryHappiness';
// import Yakyik from './components/Yakyik';
// import MovieAndTv from './components/MovieAndTv';
// import Cotripper from './components/Cotripper';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <div className='header'>
        <div className='nav'>
          <Nav />
        </div>
        <div className='container'>
          <div className='col s12'>
            <Layout />
          </div>
          <div className='col s12'>
            <Projects />
          </div>
        </div>
      </div>

      <div className='main'>
        <div className='container'>
          <div className='col s12 '>
            <About />
          </div>
        </div>
      </div>
      <div className='footer'>
        <div className='container'>
          <div className='col s12'>
            <Skills />
          </div>
          <div className='col s12'>
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
