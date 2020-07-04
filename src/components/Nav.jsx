import React, { Component } from 'react';
import './CSS/nav.css';
import { Link } from 'react-scroll';

export class Nav extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav className='navbar-transition cool-navbar z-depth-0'>
          <div className='nav-wrapper'>
            <a href='#' className='brand-logo'>
              <div className='logo'>MH</div>
            </a>
            <ul id='nav-mobile' className='right hide-on-med-and-down'>
              <Link
                activeClass='active'
                to='about'
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                About
              </Link>
              <Link
                activeClass='active'
                to='skills'
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Skills
              </Link>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
