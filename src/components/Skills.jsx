import React, { Component } from 'react';
import './CSS/skills.css';

export class Skills extends Component {
  render() {
    return (
      <div className='skills'>
        <div
          className='skills-contents front'
          data-aos='fade-left'
          data-aos-duration='300'
          data-aos-delay='300'
          data-aos-easing='ease-in-out'
          data-aos-duration='1000'
          data-aos-once='true'
        >
          <p className='flow-text'>
            HTML ✦ CSS ✦ JavaScript ✦ React ✦ Materialize ✦ Storybook ✦ Surge ✦
            Responsive Design
          </p>
          <h5>Front-end</h5>
          <i class='material-icons medium b'>code</i>
        </div>

        <div
          className='skills-contents front'
          data-aos='fade-left'
          data-aos-duration='300'
          data-aos-delay='200'
          data-aos-easing='ease-in-out'
          data-aos-duration='1000'
          data-aos-once='true'
        >
          <p className='flow-text'>
            Node.js ✦ Express ✦ MongoDB ✦ Mongoose ✦ Python ✦ Flask ✦ Django ✦
            Django REST Framework ✦ Peewee ✦ PostgreSQL ✦ RESTful API ✦ Heroku
          </p>
          <h5>Back-end</h5>
          <i class='material-icons medium b'>http</i>
        </div>

        <div
          className='skills-contents front'
          data-aos='fade-left'
          data-aos-duration='300'
          data-aos-delay='200'
          data-aos-easing='ease-in-out'
          data-aos-duration='1000'
          data-aos-once='true'
        >
          <p className='flow-text'>
            Ubuntu Linux ✦ Git ✦ GitHub ✦ Rapid Prototyping ✦ Visual Studio Code
            ✦ MERN Stack
          </p>
          <h5>Miscellaneous</h5>
          <i class='material-icons medium b'>filter_list</i>
        </div>
      </div>
    );
  }
}

export default Skills;
