import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import './CSS/projects.css';
import { Link } from 'react-router-dom';

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
    }, 700);

    setTimeout(() => {
      this.setState({ showCountryAPI: true });
    }, 1000);

    setTimeout(() => {
      this.setState({ showMovieTvFinder: true });
    }, 1300);

    setTimeout(() => {
      this.setState({ showCotripper: true });
    }, 1600);
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
              <a className=' btn-flat button'>
                <Link to='/work/CountryHappiness'>
                  <div>
                    <img src={require('./CSS/CountryHappiness.gif')} />
                  </div>
                  <blockquote>Country Happiness Index</blockquote>
                </Link>
              </a>
            </CSSTransition>
          )}
        </div>

        <div className='yakyik'>
          {this.state.showCountryAPI && (
            <CSSTransition
              in={true}
              appear={true}
              timeout={2500}
              classNames='fade'
            >
              <a className=' btn-flat button'>
                <Link to='/work/Yakyik'>
                  <div>
                    <img src={require('./CSS/YakYik.gif')} />
                  </div>
                  <blockquote>yakyik</blockquote>
                </Link>
              </a>
            </CSSTransition>
          )}
        </div>

        <div className='movie-tv-finder'>
          {this.state.showMovieTvFinder && (
            <CSSTransition
              in={true}
              appear={true}
              timeout={2500}
              classNames='fade'
            >
              <a className=' btn-flat button'>
                <Link to='/work/MovieAndTv'>
                  <div>
                    <img src={require('./CSS/MovieTv.gif')} />
                  </div>
                  <blockquote>movie tv finder</blockquote>
                </Link>
              </a>
            </CSSTransition>
          )}
        </div>

        <div className='cotripper'>
          {this.state.showCotripper && (
            <CSSTransition
              in={true}
              appear={true}
              timeout={2500}
              classNames='fade'
            >
              <a className='btn-flat button'>
                <Link to='/work/cotripper'>
                  <div>
                    <img src={require('./CSS/cotrip.gif')} />
                  </div>
                  <blockquote>cotripper</blockquote>
                </Link>
              </a>
            </CSSTransition>
          )}
        </div>
      </div>
    );
  }
}

export default Projects;
