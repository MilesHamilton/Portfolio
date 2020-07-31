import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import './CSS/projects.css';
import { Link } from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';

const TooltipStyle = withStyles({
  tooltip: {
    backgroundColor: 'transparent',
  },
})(Tooltip);

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
        {/* //-----------------------Country Happiness Index----------------------// */}
        <div className='country-happiness-frontend '>
          {this.state.showCountryFront && (
            <CSSTransition
              in={true}
              appear={true}
              timeout={2500}
              classNames='fade'
            >
              <TooltipStyle
                placement='bottom-start'
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 600 }}
                title={
                  <img
                    className='tooltip-img'
                    src={require('./CSS/CountryHappiness.gif')}
                  />
                }
              >
                <a className=' btn-flat button'>
                  <Link to='/work/CountryHappiness'>
                    <blockquote>Country Happiness Index</blockquote>
                  </Link>
                </a>
              </TooltipStyle>
            </CSSTransition>
          )}
        </div>
        {/* //-----------------------YakYik----------------------// */}
        <div className='yakyik'>
          {this.state.showCountryAPI && (
            <CSSTransition
              in={true}
              appear={true}
              timeout={2500}
              classNames='fade'
            >
              <TooltipStyle
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 600 }}
                placement='bottom-start'
                title={
                  <img
                    className='tooltip-img'
                    src={require('./CSS/YakYik.gif')}
                  />
                }
              >
                <a className=' btn-flat button'>
                  <Link to='/work/Yakyik'>
                    <blockquote>yakyik</blockquote>
                  </Link>
                </a>
              </TooltipStyle>
            </CSSTransition>
          )}
        </div>
        {/* //-----------------------MoiveAndTvFinder----------------------// */}
        <div className='movie-tv-finder'>
          {this.state.showMovieTvFinder && (
            <CSSTransition
              in={true}
              appear={true}
              timeout={2500}
              classNames='fade'
            >
              <TooltipStyle
                placement='bottom-start'
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 600 }}
                title={
                  <img
                    className='tooltip-img'
                    src={require('./CSS/MovieTv.gif')}
                  />
                }
              >
                <a className=' btn-flat button'>
                  <Link to='/work/MovieAndTv'>
                    <blockquote>movie tv finder</blockquote>
                  </Link>
                </a>
              </TooltipStyle>
            </CSSTransition>
          )}
        </div>
        {/* //-----------------------Cotripper----------------------// */}
        <div className='cotripper'>
          {this.state.showCotripper && (
            <CSSTransition
              in={true}
              appear={true}
              timeout={2500}
              classNames='fade'
            >
              <TooltipStyle
                placement='bottom-start'
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 600 }}
                title={
                  <img
                    className='tooltip-img'
                    src={require('./CSS/cotrip.gif')}
                  />
                }
              >
                <a className='btn-flat button'>
                  <Link to='/work/cotripper'>
                    <blockquote>cotripper</blockquote>
                  </Link>
                </a>
              </TooltipStyle>
            </CSSTransition>
          )}
        </div>
      </div>
    );
  }
}

export default Projects;
