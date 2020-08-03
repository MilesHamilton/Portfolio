import React, { Component } from 'react';
import './CSS/nav.css';
import { Link } from 'react-scroll';

export class Nav extends Component {
  render() {
    return (
      <div className='navbar-fixed nav'>
        <nav className=' z-depth-1'>
          <Link
            activeClass='active'
            to='about'
            spy={true}
            smooth={true}
            offset={-1400}
            duration={500}
          >
            <a className=' btn-flat logo-wrapper'>
              <div className='logo'>MH</div>
            </a>
          </Link>

          <ul id='nav-mobile' className='right '>
            <Link
              activeClass='active'
              to='about'
              spy={true}
              smooth={true}
              offset={-1400}
              duration={500}
            >
              Home
            </Link>
            <Link
              activeClass='active'
              to='about'
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              About
            </Link>
            <Link
              activeClass='active'
              to='skills'
              spy={true}
              smooth={true}
              offset={-200}
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

            <a
              href='https://drive.google.com/file/d/1_55vVFghkdIpwEzyubH-hhbZEmwRzJpB/view?usp=sharing'
              target='_blank'
            >
              Resume
            </a>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
