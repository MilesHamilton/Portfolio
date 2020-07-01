import React, { Component } from 'react';
import './CSS/skills.css';

export class Skills extends Component {
  render() {
    return (
      <div className='skills'>
        <div className='skills-contents front'>
          <p className='flow-text'>
            HTML ★ CSS ★ JavaScript ★ React ★ Materialize ★ Surge ★ Responsive
            Design ★ Storybook
          </p>
          <h5>Front-end</h5>
          <div className='icon'>
            <i class='material-icons medium b'>code</i>
          </div>
        </div>

        <div className='skills-contents'>
          <p className='flow-text'>
            Node.js ★ Express ★ MongoDB ★ Mongoose ★ Python ★ Flask ★ Django ★
            Peewee ★ SQL ★ PostgreSQL ★ RESTful API ★ Heroku
          </p>
          <h5>Back-end</h5>
          <div className='icon'>
            <i class='material-icons medium b'>http</i>
          </div>
        </div>

        <div className='skills-contents'>
          <p className='flow-text'>
            Ubuntu Linux ★ Git ★ GitHub ★ Rapid Prototyping ★ Visual Studio Code
            ★ MERN Stack
          </p>
          <h5>Miscellaneous</h5>
          <div className='icon'>
            <i class='material-icons medium b'>filter_list</i>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
