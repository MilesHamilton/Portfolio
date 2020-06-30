import React from 'react';
import './App.css';
import 'materialize-css';
import { Link, animateScroll as scroll } from 'react-scroll';
import Nav from './components/Nav';
import Projects from './components/Projects';
import About from './components/About';
import Layout from './components/Layout';
import Skills from './components/Skills';

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
            <Projects
              name={'Country Happiness Frontend'}
              contents={
                <div className='modal-content'>
                  <h4>Modal Header</h4>
                  <p>A bunch of text lmao woo</p>
                </div>
              }
            />
            <Projects
              name={'Country Happiness Frontend'}
              contents={
                <div className='modal-content'>
                  <h4>Modal Header</h4>
                  <p>A bunch of text lmao woo</p>
                </div>
              }
            />
            <Projects
              name={'Country Happiness Frontend'}
              contents={
                <div className='modal-content'>
                  <h4>Modal Header</h4>
                  <p>A bunch of text lmao woo</p>
                </div>
              }
            />
            <Projects
              name={'Country Happiness Frontend'}
              contents={
                <div className='modal-content'>
                  <h4>Modal Header</h4>
                  <p>A bunch of text lmao woo</p>
                </div>
              }
            />
            <Projects
              name={'Country Happiness Frontend'}
              contents={
                <div className='modal-content'>
                  <h4>Modal Header</h4>
                  <p>A bunch of text lmao woo</p>
                </div>
              }
            />
          </div>
        </div>
      </div>
      <div className='main'>
        <div className='container'>
          <div className='col s12'>
            <About />
          </div>
        </div>
      </div>
      <div className='footer'>
        <div className='container'>
          <div className='col s12'>
            <Skills />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
