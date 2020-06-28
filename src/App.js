import React from 'react';
import './App.css';
import 'materialize-css';
import Nav from './components/Nav';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <div>
        <Nav />
      </div>
      <div className='container'>
        <div className='col s12'>
          <Projects
            contents={
              <div class='modal-content'>
                <h4>Modal </h4>
                <p>A bunch of text?</p>
              </div>
            }
          />
        </div>
        <div className='col s12'>
          <Projects
            modalContents={
              <div class='modal-content'>
                <h4>Modal Header</h4>
                <p>this should be a different text</p>
              </div>
            }
          />
        </div>
        <div className='col s12'>{/* <About /> */}</div>
      </div>
    </>
  );
}

export default App;
