import React, { Component } from 'react';
import './CSS/about.css';

export class About extends Component {
  render() {
    return (
      <div className='about'>
        <h1>Passion is Everything</h1>
        <div className='test'>
          <div className='about-contents'>
            <i class='material-icons small a'>build</i>
            <p>
              I've always been <strong> tickering </strong>, tearing things
              apart, and building them anew. As a child, I enjoyed figuring out
              how things worked, from gaming consoles like my N64 to my very
              first computer. In high school I became fascinated with virtual
              machines, booting up operating systems I had litte knowledge of
              just to learn how they worked.
            </p>
          </div>
          <div className='about-contents'>
            <i class='material-icons small a'>star</i>
            <p>
              After highschool I enlisted in the Ohio National Guard in order to
              pay for school. While serving I ended up learning alot of
              different niche
              <strong> skills and expertise</strong> along the way. My
              deployment to kuwait brought on a lot of challenges, but came with
              it the oppurtity to grow.
            </p>
          </div>
          <div className='about-contents'>
            <i className='material-icons small a'>landscape</i>
            <p>
              Motivated by my exposure to surveying technologies and operations
              I pursued and graduated with a Bachelor's degree in
              <strong> Geology</strong> and found my passion in research based
              work
            </p>
          </div>
          <div className='about-contents'>
            <i className='material-icons small a'>polymer</i>
            <p>
              Working as a <strong>research scientist </strong> for the past two
              years, learning all that I could, I was suddenly faced with my own
              from of an existential crisis. in-adversity. I yearned for the
              child like passions and creativity that had brought me so much joy
              as a kid.
            </p>
          </div>
          <div className='about-contents'>
            <i className='material-icons small a'>laptop_mac</i>
            <p>
              Now returning to my inquisitive roots in the form of software
              engineering! My dream is to untangle and fix the problems of the
              future through my own refined and minimalistic code. what
              <strong> solutions</strong> can i solve for you?
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
