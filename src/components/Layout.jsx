import React, { Component } from 'react';
import './CSS/layout.css';
import { CSSTransition } from 'react-transition-group';
import pic from './CSS/me.jpg';

export class Layout extends Component {
  constructor() {
    super();
    this.state = { showText: false };
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ showText: true });
    }, 1800);
  };

  render() {
    return (
      <div className='layout'>
        <CSSTransition in={true} appear={true} timeout={2500} classNames='fade'>
          <div>
            <h1 className='title'>Development Driven.</h1>
          </div>
        </CSSTransition>
        <div className='sub-text'>
          {this.state.showText && (
            <CSSTransition
              in={true}
              appear={true}
              timeout={1500}
              classNames='fade'
            >
              <div>
                <div className='title'>
                  <h1>Forward Thinking.</h1>
                </div>
                <div className='card-wrapper '>
                  <div className='card '>
                    <div class='card-image'>
                      <img src={pic} alt=''></img>
                    </div>
                    <div className='card-content white-text'>
                      <p>
                        My name is Miles Hamilton, I am a Fullstack Software
                        Developer based in Washington DC with a head for
                        creative design and smart solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CSSTransition>
          )}
        </div>
      </div>
    );
  }
}

export default Layout;
