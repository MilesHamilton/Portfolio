import React, { Component } from 'react';
import './CSS/layout.css';
import { CSSTransition } from 'react-transition-group';

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
          <h1>Development Driven.</h1>
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
                <h1>Forward Thinking.</h1>
                <p>
                  <strong>Hello</strong> my name is Miles Hamilton, I am a
                  Fullstack Software Developer based in Washington DC.
                </p>
              </div>
            </CSSTransition>
          )}
        </div>
      </div>
    );
  }
}

export default Layout;
