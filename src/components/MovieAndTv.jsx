import React from 'react';

export default function MovieAndTv() {
  return (
    <div>
      <div className='modal-contents' style={{ backgroundColor: 'white' }}>
        <div className='modal_movietv'>
          <h4>Movie and TV Finder</h4>
          <a href='https://movieandtvfinder.vercel.app/' target='_blank'>
            <img
              style={{ width: '800px' }}
              src={require('./CSS/MovieTv.gif')}
            ></img>
          </a>
        </div>
        <p>
          A static website built in react that fetches A random movie or tv show
          from The Movie DataBase API
        </p>
      </div>
    </div>
  );
}
