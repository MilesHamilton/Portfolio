import React, { Component } from 'react';
import './CSS/nav.css';
import { Link } from 'react-scroll';

export class Nav extends Component {
  state = {};
  render() {
    return (
      <div className='navbar-fixed nav'>
        <nav className=' z-depth-0'>
          <a href='#' className='brand-logo'>
            <div className='logo'>MH</div>
          </a>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            <Link
              activeClass='active'
              to='about'
              spy={true}
              smooth={true}
              offset={-1300}
              duration={500}
              link='Projects'
            >
              Home
            </Link>
            <Link
              activeClass='active'
              to='about'
              spy={true}
              smooth={true}
              offset={-50}
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
            <Link
              activeClass='active'
              to='skills'
              spy={true}
              smooth={true}
              offset={200}
              duration={500}
            >
              Contact
            </Link>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
