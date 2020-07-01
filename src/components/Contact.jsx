import React, { Component } from 'react';
import './CSS/contact.css';

export class Contact extends Component {
  email = () => {
    window.location.href = 'mailto:mham7714@gmail.com';
  };

  render() {
    return (
      <div className='contact'>
        <p>
          <strong>Say Hello</strong>
        </p>

        <a href='#' onClick={this.email}>
          Email
        </a>
        <a>330.671.0827</a>
        <a href='https://www.linkedin.com/in/miles-hamilton/'>Linkedin</a>
        <a href='https://www.instagram.com/hiles_mammal/'>Instagram</a>
      </div>
    );
  }
}

export default Contact;
