import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import M from 'materialize-css';
import './CSS/projects.css';

export class Projects extends Component {
  constructor() {
    super();
    this.state = {
      showCountryFront: false,
      showCountryAPI: false,
      showMovieTvFinder: false,
      showCotripper: false,
    };
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ showCountryFront: true });
    }, 1800);

    setTimeout(() => {
      this.setState({ showCountryAPI: true });
    }, 2000);

    setTimeout(() => {
      this.setState({ showMovieTvFinder: true });
    }, 2200);

    setTimeout(() => {
      this.setState({ showCotripper: true });
    }, 2400);

    const options = {
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: true,
      startingTop: '10%',
      endingTop: '10%',
    };
    M.Modal.init(this.Modal1, options);
    M.Modal.init(this.Modal2, options);
    M.Modal.init(this.Modal3, options);
    M.Modal.init(this.Moda14, options);
    M.Modal.init(this.Modal5, options);
  };

  render() {
    return (
      <div className='modals'>
        <div className='country-happiness-frontend '>
          {this.state.showCountryFront && (
            <CSSTransition
              in={true}
              appear={true}
              timeout={2500}
              classNames='fade'
            >
              <a className=' modal-trigger btn-flat button' href='#modal1'>
                Country Happiness Frontend
              </a>
            </CSSTransition>
          )}

          <div
            ref={(Modal) => {
              this.Modal1 = Modal;
            }}
            id='modal1'
            className='modal'
          >
            <div
              className='modal-contents'
              style={{ backgroundColor: 'white' }}
            >
              <div class='modal-content'>
                <h4>Modal Header</h4>
                <p>Some texe...</p>
              </div>
            </div>

            <div className='modal-footer'>
              <a href='#!' className='modal-close waves-effect btn-flat'>
                Exit
              </a>
            </div>
          </div>
        </div>

        <div className='country-happiness-backend'>
          {this.state.showCountryAPI && (
            <CSSTransition
              in={true}
              appear={true}
              timeout={2500}
              classNames='fade'
            >
              <a className=' modal-trigger btn-flat button' href='#modal2'>
                Country Happiness API
              </a>
            </CSSTransition>
          )}

          <div
            ref={(Modal) => {
              this.Modal2 = Modal;
            }}
            id='modal2'
            className='modal'
          >
            <div
              className='modal-contents'
              style={{ backgroundColor: 'white' }}
            >
              <div class='modal-content'>
                <h4>Modal Header</h4>
                <p>please be diff</p>
              </div>
            </div>

            <div className='modal-footer'>
              <a href='#!' className='modal-close waves-effect btn-flat'>
                Exit
              </a>
            </div>
          </div>
        </div>

        <div className='movie-tv-finder'>
          {this.state.showMovieTvFinder && (
            <CSSTransition
              in={true}
              appear={true}
              timeout={2500}
              classNames='fade'
            >
              <a className=' modal-trigger btn-flat button' href='#modal3'>
                movie tv finder
              </a>
            </CSSTransition>
          )}

          <div
            ref={(Modal) => {
              this.Modal3 = Modal;
            }}
            id='modal3'
            className='modal'
          >
            <div
              className='modal-contents'
              style={{ backgroundColor: 'white' }}
            >
              <div class='modal-content'>
                <h4>Modal Header</h4>
                <p>Some texe...</p>
              </div>
            </div>

            <div className='modal-footer'>
              <a href='#!' className='modal-close waves-effect btn-flat'>
                Exit
              </a>
            </div>
          </div>
        </div>

        <div className='cotripper'>
          {this.state.showCotripper && (
            <CSSTransition
              in={true}
              appear={true}
              timeout={2500}
              classNames='fade'
            >
              <a className=' modal-trigger btn-flat button' href='#modal4'>
                cotripper
              </a>
            </CSSTransition>
          )}

          <div
            ref={(Modal) => {
              this.Modal5 = Modal;
            }}
            id='modal4'
            className='modal'
          >
            <div
              className='modal-contents'
              style={{ backgroundColor: 'white' }}
            >
              <div class='modal-content'>
                <h4>Modal Header</h4>
                <p>Some tex</p>
              </div>
            </div>

            <div className='modal-footer'>
              <a href='#!' className='modal-close waves-effect btn-flat'>
                Exit
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
