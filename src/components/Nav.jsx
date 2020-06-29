import React, { Component } from 'react';
import './CSS/nav.css';

export class Nav extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className='nav-wrapper'>
            <a href='#' className='brand-logo'>
              MH
            </a>
            <ul id='nav-mobile' className='right hide-on-med-and-down'>
              <li>
                <a href='collapsible.html'>JavaScript</a>
              </li>
              <li>
                <a href='sass.html'>About Me</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
