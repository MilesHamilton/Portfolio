import React from 'react';

export default function Cotripper() {
  return (
    <div>
      <div className='modal-contents' style={{ backgroundColor: 'white' }}>
        <h4>Cotripper</h4>
        <div class='modal_cotripper'>
          <a href='https://cotripper.netlify.app/home' target='_blank'>
            <img
              style={{ width: '800px' }}
              src={require('./CSS/cotrip.gif')}
            ></img>
          </a>
          <p>
            a collaborative open sourced, full stack, client project for
            traveling single mothers built using react and django
          </p>
        </div>
      </div>
    </div>
  );
}
