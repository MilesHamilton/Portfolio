import React, { Component } from 'react';
import './CSS/skills.css';
import Fade from 'react-reveal/Fade';

export class Skills extends Component {
  render() {
    return (
      <div className='skills'>
        <Fade bottom={true} duration={2000} distance={'50%'}>
          <div className='skills-contents front'>
            <p className='flow-text'>
              HTML ✦ CSS ✦ JavaScript ✦ React ✦ Materialize ✦ Storybook ✦ Surge
              ✦ Responsive Design
            </p>
            <h5>Front-end</h5>
            <i class='material-icons medium b'>code</i>
          </div>

          <div className='skills-contents front'>
            <p className='flow-text'>
              Node.js ✦ Express ✦ MongoDB ✦ Mongoose ✦ Python ✦ Flask ✦ Django ✦
              Django REST Framework ✦ Peewee ✦ PostgreSQL ✦ RESTful API ✦ Heroku
            </p>
            <h5>Back-end</h5>
            <i class='material-icons medium b'>http</i>
          </div>

          <div className='skills-contents misc' data-aos='fade-left'>
            <p className='flow-text'>
              Ubuntu Linux ✦ Git ✦ GitHub ✦ Rapid Prototyping ✦ Visual Studio
              Code ✦ MERN Stack
            </p>
            <h5>Miscellaneous</h5>
            <i class='material-icons medium b'>filter_list</i>
          </div>
        </Fade>
      </div>
    );
  }
}

export default Skills;
