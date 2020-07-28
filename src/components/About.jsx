import React, { Component } from 'react';
import './CSS/about.css';
import Fade from 'react-reveal/Fade';

export class About extends Component {
  render() {
    return (
      <div>
        <Fade duration={3000}>
          <div className='about'>
            <h5>
              <i>
                “To know how much there is to know is the beginning of learning
                to live.”
              </i>
              <br></br>
              <br></br>
              -Dorothy West
            </h5>
          </div>
        </Fade>
        <div className='test'>
          <Fade duration={2000} distance={'50%'} top={true}>
            <div className='about-contents'>
              <i class='material-icons small a'>build</i>
              <p className='flow-text'>
                A lifelong <span>tinkerer</span>, I have always been tearing
                things apart and building them anew ever since I was a child. In
                high school I became fascinated with virtual machines, booting
                up operating systems just to learn how they worked.
              </p>
            </div>

            <div className='about-contents'>
              <i class='material-icons small a'>star</i>
              <p className='flow-text'>
                While serving in the National Guard I have learned about 
                niche
                <span> skills and expertise</span> along the way. My deployment
                to Kuwait brought on a lot of challenges, but the opportunity to
                grow came with it.
              </p>
            </div>
            <div className='about-contents'>
              <i className='material-icons small a'>landscape</i>
              <p className='flow-text'>
                Motivated by my exposure to surveying technologies and
                operations I pursued and graduated with a Bachelor's degree in
                <span> Geology </span>and found interest in research based work.
              </p>
            </div>
            <div className='about-contents'>
              <i className='material-icons small a'>polymer</i>
              <p className='flow-text'>
                Working as a<span> research scientist </span> for the past two
                years, learning all that I could, I was suddenly faced with my
                own from of an existential crisis: in-adversity. I yearned for
                the child like passions and creativity that had brought me so
                much joy as a kid.
              </p>
            </div>
            <div className='about-contents'>
              <i className='material-icons small a'>laptop_mac</i>
              <p className='flow-text'>
                Now returning to my inquisitive roots in the form of software
                engineering! My dream is to untangle and fix the problems of the
                future through my own refined and minimalistic code. What
                <span> solutions</span> can I build for you?
              </p>
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}

export default About;
