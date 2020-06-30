import React, { Component } from 'react';
import M from 'materialize-css';
import './CSS/projects.css';

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
    return (
      <>
        <a
          className='waves-effect waves-light modal-trigger btn-flat button'
          href='#modal1'
        >
          {this.props.name}
        </a>
        <div
          ref={(Modal) => {
            this.Modal = Modal;
          }}
          id='modal1'
          className='modal'
        >
          <div className='modal-contents' style={{ backgroundColor: 'white' }}>
            {this.props.contents}
          </div>

          <div className='modal-footer'>
            <a href='#!' className='modal-close waves-effect btn-flat'>
              Exit
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default Projects;
