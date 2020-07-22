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
    }, 2000);

    setTimeout(() => {
      this.setState({ showCountryAPI: true });
    }, 2300);

    setTimeout(() => {
      this.setState({ showMovieTvFinder: true });
    }, 2600);

    setTimeout(() => {
      this.setState({ showCotripper: true });
    }, 2900);

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
              <a className=' modal-trigger btn-flat button ' href='#modal1'>
                <blockquote>Country Happiness Index</blockquote>
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
              <div className='modal-content'>
                <h4>Country Happiness Index</h4>
                <div className='modal_countryhappiness'>
                  <a
                    href='https://countryhappinessindex.vercel.app/'
                    target='_blank'
                  >
                    <img
                      style={{ width: '700px' }}
                      src={require('./CSS/CountryHappiness.gif')}
                    ></img>
                  </a>
                </div>
                <p>
                  MERN stack application that shows country happiness
                  information from a backend MongoDB database built with CSV
                  data from the World Happiness Report.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='yakyik'>
          {this.state.showCountryAPI && (
            <CSSTransition
              in={true}
              appear={true}
              timeout={2500}
              classNames='fade'
            >
              <a className=' modal-trigger btn-flat button' href='#modal2'>
                <blockquote>yakyik</blockquote>
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
              <h4>Yak Yik</h4>
              <div className='modal_yakyik'>
                <a href='http://yak-yik.surge.sh/' target='_blank'>
                  <img
                    style={{ width: '750px' }}
                    src={require('./CSS/YakYik.gif')}
                  ></img>
                </a>
              </div>
              <p>
                Developed a mock application of the anonymous social media
                platform Yikyak. Utilizing the MERN stack and built with full
                CRUD capabilities this app was build in 4.5 days with a team of
                4 people
              </p>
            </div>
            {/* 
            <div className='modal-footer'>
              <a href='#!' className='modal-close waves-effect btn-flat'>
                Exit
              </a>
            </div> */}
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
                <blockquote>movie tv finder</blockquote>
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
              <div className='modal_movietv'>
                <h4>Movie and TV Finder</h4>
                <a href='https://movieandtvfinder.vercel.app/' target='_blank'>
                  <img
                    style={{ width: '800px' }}
                    src={require('./CSS/MovieTv.gif')}
                  ></img>
                </a>
              </div>
              <p>
                A static website built in react that fetches A random movie or
                tv show from The Movie DataBase API
              </p>
            </div>
            {/* 
            <div className='modal-footer'>
              <a href='#!' className='modal-close waves-effect btn-flat'>
                Exit
              </a>
            </div> */}
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
                <blockquote>cotripper</blockquote>
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
              <h4>Cotripper</h4>
              <div class='modal_cotripper'>
                <a href='https://cotripper.netlify.app/' target='_blank'>
                  <img
                    style={{ width: '800px' }}
                    src={require('./CSS/Cotripper.gif')}
                  ></img>
                </a>
                <p>
                  a collaborative open sourced, full stack, client project for
                  traveling single mothers built using react and django
                </p>
              </div>
            </div>

            {/* <div className='modal-footer'>
              <a href='#!' className='modal-close waves-effect btn-flat'>
                Exit
              </a>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
