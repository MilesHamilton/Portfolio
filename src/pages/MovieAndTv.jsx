import React from 'react';
import ProjectContent from '../components/ProjectContent';

export default function MovieAndTv() {
  return (
    <div className='page'>
      <ProjectContent
        title='Movie and Tv Finder'
        link='https://movieandtvfinder.vercel.app/'
        gif={require('../components/CSS/cinema.jpg')}
        descriptionTitle='For your Viewing Pleasure'
        description='Using data from the API site "The Movie Database", this app spits out a random movie or tv show complete with a description and score whenever you hit the button'
        challenges={[
          { challenge: 'Utilizing and connecting an API for the first time' },
          {
            challenge:
              'In order to have access to 1000s of movies supplied by "The Movie Database" I needed to impliment frontend pagination',
          },
          {
            challenge: 'Implementing a the UX feature "tabs" into the website ',
          },
        ]}
        tech={[{ tech: 'TMDB API' }, { tech: 'React.js' }]}
        github='https://github.com/MilesHamilton/Movies-and-Tv-Finder'
        link='https://movieandtvfinder.vercel.app/'
      />
    </div>
  );
}
