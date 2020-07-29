import React, { Component } from 'react';
import './CSS/projectContent.css';

export class ProjectContent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <nav className=' z-depth-0 white router-nav'>
          <a href='#' className='brand-logo left'>
            <div className='logo router-logo'>MH</div>
          </a>
          <div className='ProjectContent_title'>
            <h3>{this.props.title}</h3>
          </div>
        </nav>
        <div className='container'>
          <div className='col s12'>
            <div className='ProjectContent_wrapper'>
              <div className='ProjectContent_img'>
                <img src={this.props.staticImage}></img>
              </div>

              <div className='ProjectContent_links'>
                <div className='ProjectContent_github'>
                  <a
                    href={this.props.github}
                    rel='noopener noreferrer'
                    target='_blank'
                    className='ProjectContent__info'
                  >
                    Visit github
                  </a>
                </div>
                <div className='ProjectContent_site'>
                  <a
                    href={this.props.link}
                    rel='noopener noreferrer'
                    target='_blank'
                    className='ProjectContent__info'
                  >
                    Checkout site
                  </a>
                </div>
              </div>

              <div className='ProjectContent_gif'>
                <a
                  href={this.props.link}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img src={this.props.gif}></img>
                </a>
              </div>
              <div className='ProjectContent_description'>
                <p>{this.props.description}</p>
              </div>
              <div className='ProjectContent_infowrapper'>
                <div className='ProjectContent_challenge'>
                  <p>
                    <strong>Challenges:</strong> {this.props.challenge}
                  </p>
                </div>

                <div className='ProjectContent_tech'>
                  <p>
                    <strong>Tech Stack:</strong> {this.props.tech}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectContent;
