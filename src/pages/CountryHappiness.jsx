import React from 'react';
import ProjectContent from '../components/ProjectContent';

export default function CountryHappiness() {
  return (
    <div className='page'>
      <ProjectContent
        title='Country Happiness Index'
        link='https://country-happiness.web.app/'
        gif={require('../components/CSS/CountryHappiness.gif')}
        description='MERN stack application that shows country happiness information from a backend MongoDB database built with CSV data from the World Happiness Report.'
        challenge=''
        tech='MongoDB, Mongoose, Node.js, Express.js, React.js, Victory Charts'
        github='https://github.com/MilesHamilton/Country-Happiness-APP'
        link='https://country-happiness.web.app/'
      />
    </div>
  );
}
