import React, { Component } from 'react';

export class Nav extends Component {
  render() {
    return (
      <div>
        <nav>
          <div class='nav-wrapper'>
            <a href='#' class='brand-logo'>
              Logo
            </a>
            <ul id='nav-mobile' class='right hide-on-med-and-down'>
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
