import React from 'react';
import ProjectContent from '../components/ProjectContent';

export default function CountryHappiness() {
  return (
    <div className='page'>
      <ProjectContent
        title='Country Happiness Index'
        link='https://country-happiness.web.app/'
        gif={require('../components/CSS/Salmen.jpg')}
        descriptionTitle='Victory to the Rescue'
        description='Using the MERN (MongoDB, Express.js, React.js, Node.js) stack and the data visualization tool "Victory Charts" I created the this project order to visually display 2019 country happiness data in a visually appealing way. Sourced from a mongoDB database created using CSV data from the World Happiness Report.'
        challenge=''
        tech='MongoDB, Mongoose, Node.js, Express.js, React.js, Victory Charts'
        github='https://github.com/MilesHamilton/Country-Happiness-APP'
        link='https://country-happiness.web.app/'
      />
    </div>
  );
}
