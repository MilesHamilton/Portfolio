import React, { Component } from 'react';

export class ProjectContent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className='col s12'>
          <div>
            <div className='ProjectContent_title'>{this.props.title}</div>
            <div className='ProjectContent_img'>
              <img src={this.props.staticImage}></img>
            </div>

            <div className='ProjectContent_gif'>
              <a
                href={this.props.link}
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src={this.props.gif} style={{ width: '800px' }}></img>
              </a>
            </div>
            <div className='ProjectContent_description'>
              {this.props.description}
            </div>
            <div className='PrjectContent_infowrapper'>
              <div className='ProjectContent_challenge-title'>Challenges: </div>
              <div className='ProjectContent_challenge'>
                {this.props.challenge}
              </div>
              <div className='ProjectContent_stack-title'>Tech Stack:</div>
              <div className='ProjectContent_tech'>{this.props.tech}</div>
              <div className='ProjectContent_links'>
                <a
                  href={this.props.github}
                  rel='noopener noreferrer'
                  target='_blank'
                  className='ProjectContent__info'
                >
                  github link
                </a>
                <a
                  href={this.props.link}
                  rel='noopener noreferrer'
                  target='_blank'
                  className='ProjectContent__info'
                >
                  project link
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectContent;
