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
    }, 2000);
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
              <h1>Forward Thinking.</h1>
            </CSSTransition>
          )}
        </div>
      </div>
    );
  }
}

export default Layout;
