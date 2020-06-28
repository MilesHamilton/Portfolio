import React, { Component } from 'react';
import M from 'materialize-css';

export class Projects extends Component {
  componentDidMount() {
    const options = {
      // onOpenStart: () => {
      //   console.log('Open Start');
      // },
      // onOpenEnd: () => {
      //   console.log('Open End');
      // },
      // onCloseStart: () => {
      //   console.log('Close Start');
      // },
      // onCloseEnd: () => {
      //   console.log('Close End');
      // },
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: true,
      startingTop: '10%',
      endingTop: '10%',
    };
    M.Modal.init(this.Modal, options);
  }

  render() {
    const modalContents = (
      <div class='modal-content'>
        <h4>Modal Header</h4>
        <p>A bunch of text</p>
      </div>
    );

    return (
      <>
        <a class='waves-effect waves-light btn modal-trigger' href='#modal1'>
          Modal
        </a>
        <div
          ref={(Modal) => {
            this.Modal = Modal;
          }}
          id='modal1'
          className='modal'
        >
          <div className='modal-contents'>{this.props.contents}</div>

          <div class='modal-footer'>
            <a href='#!' class='modal-close waves-effect waves-green btn-flat'>
              Exit
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default Projects;
