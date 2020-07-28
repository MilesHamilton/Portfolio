import React from 'react';

export default function CountryHappiness() {
  return (
    <div>
      <div className='modal-contents' style={{ backgroundColor: 'white' }}>
        <div>
          <h4>Country Happiness Index</h4>
          <div>
            <a href='https://country-happiness.web.app/' target='_blank'>
              <img src={require('./CSS/CountryHappiness.gif')}></img>
            </a>
          </div>
          <p>
            MERN stack application that shows country happiness information from
            a backend MongoDB database built with CSV data from the World
            Happiness Report.
          </p>
        </div>
      </div>
    </div>
  );
}
