import React from 'react';
import ProjectContent from '../components/ProjectContent';

export default function MovieAndTv() {
  return (
    <div>
      <ProjectContent
        title='Movie and Tv Finder'
        link='https://movieandtvfinder.vercel.app/'
        gif={require('../components/CSS/MovieTv.gif')}
        description='MERN stack application that shows country happiness information from a backend MongoDB database built with CSV data from the World Happiness Report.'
        challenge=''
        tech='MongoDB, Mongoose, Node.js, Express.js, React.js, Victory Charts'
        github='https://github.com/MilesHamilton/Movies-and-Tv-Finder'
        link='https://movieandtvfinder.vercel.app/'
      />
    </div>
  );
}
