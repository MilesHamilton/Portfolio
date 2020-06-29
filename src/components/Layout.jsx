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
  appear = () => {};

  render() {
    return (
      <div>
        <CSSTransition in={true} appear={true} timeout={2500} classNames='fade'>
          <h1>this should transition right away!</h1>
        </CSSTransition>

        {this.state.showText && (
          <CSSTransition
            in={true}
            appear={true}
            timeout={1500}
            classNames='fade'
          >
            <h1>this should transition sloooowly</h1>
          </CSSTransition>
        )}
      </div>
    );
  }
}

export default Layout;
