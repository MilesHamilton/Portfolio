import React, { Component } from 'react';
import './CSS/about.css';
import Fade from 'react-reveal/Fade';

export class About extends Component {
  render() {
    return (
      <div>
        <Fade duration={2500}>
          <div className='about'>
            <h5>
              <p>
                <i>
                  “To know how much there is to know is the beginning of
                  learning to live.”
                </i>
              </p>
              <br></br>
              -Dorothy West
            </h5>
          </div>
        </Fade>
        <div className='test'>
          <Fade duration={1500} distance={'50%'} top={true}>
            <div className='about-contents'>
              <i className='material-icons small a'>build</i>
              <p className='flow-text'>
                Ever since I was a child I have always been a
                <span> Tinkerer</span>. I loved tearing gadgets apart to see how
                they work. That fascination turned digital in Highschool when I
                booted up my very first linux distro on my home computer.
              </p>
            </div>

            <div className='about-contents'>
              <i class='material-icons small a'>star</i>
              <p className='flow-text'>
                While serving in the<span> Ohio National Guard</span> I was a
                builder tasked with building pathways and roads. It was on my
                deployment to Kuwait that I discovered my interest in the
                natural sciences, using surveying and geospatial equipment.
              </p>
            </div>
            <div className='about-contents'>
              <i className='material-icons small a'>landscape</i>
              <p className='flow-text'>
                While pursuing my Bachelors in<span> Geology</span> I found
                satisfaction in the intricacies of lab work, coupled with the
                excitement in collecting and observing data in the field.
              </p>
            </div>
            <div className='about-contents'>
              <i className='material-icons small a'>polymer</i>
              <p className='flow-text'>
                Carrying on my interest in research, I landed my first job out
                of college as a<span> Research Scientist</span>. Working
                diligently for two years I found that I have hit a knowledge
                ceiling. I explored several outlets for creativity before I
                discovered the posibilities in Software Engineering
              </p>
            </div>
            <div className='about-contents'>
              <i className='material-icons small a'>laptop_mac</i>
              <p className='flow-text'>
                Here I am now, combining my passion to create with my love of
                science as a software engineer! As a developer I untangle the
                problems of the future one refined piece of code at a time. What
                <span> Solutions</span> can I build for you?
              </p>
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}

export default About;
