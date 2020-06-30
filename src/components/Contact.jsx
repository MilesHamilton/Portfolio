import React, { Component } from 'react';
import './CSS/contact.css';

export class Contact extends Component {
  email = '';
  onClick = () => {
    window.location.href = `mailto:mham7714@gmail.com`;
  };
  render() {
    return (
      <div className='contact'>
        <p>
          <strong>Say Hello</strong>
        </p>

        {/* <button onClick={this.onClick}>EmailButton</button> */}
        <a>330.671.0827</a>
        <a href='https://www.linkedin.com/in/miles-hamilton/'>linkedin</a>
        <a href='https://www.instagram.com/hiles_mammal/'>instagram</a>
      </div>
    );
  }
}

export default Contact;
