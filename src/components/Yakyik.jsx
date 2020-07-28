import React from 'react';

export default function Yakyik() {
  return (
    <div>
      {' '}
      <div className='modal-contents' style={{ backgroundColor: 'white' }}>
        <h4>Yak Yik</h4>
        <div className='modal_yakyik'>
          <a href='http://yak-yik.surge.sh/' target='_blank'>
            <img
              style={{ width: '750px' }}
              src={require('./CSS/YakYik.gif')}
            ></img>
          </a>
        </div>
        <p>
          Developed a mock application of the anonymous social media platform
          Yikyak. Utilizing the MERN stack and built with full CRUD capabilities
          this app was build in 4.5 days with a team of 4 people
        </p>
      </div>
    </div>
  );
}
