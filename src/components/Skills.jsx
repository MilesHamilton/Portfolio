import React, { Component } from 'react';
import './CSS/skills.css';

export class Skills extends Component {
  render() {
    return (
      <div className='skills'>
        <div>
          <h5>Front-end</h5>
          <p>
            HTML ★ CSS ★ JavaScript ★ React ★ Materialize ★ Surge ★ Responsive
            Design ★ Storybook
          </p>
          <i class='material-icons b'>code</i>
        </div>
        <div>
          <h5>Back-end</h5>
          <p>
            Node.js ★ Express ★ MongoDB ★ Mongoose ★ Python ★ Flask ★ Django ★
            Peewee ★ SQL ★ PostgreSQL ★ RESTful API ★ Heroku
          </p>
          <i class='material-icons b'>http</i>
        </div>
        <div>
          <h5>Miscellaneous</h5>
          <p>
            Ubuntu Linux ★ Git ★ GitHub ★ Rapid Prototyping ★ Visual Studio Code
            ★ MERN Stack
          </p>
          <i class='material-icons b'>filter_list</i>
        </div>
      </div>
    );
  }
}

export default Skills;
