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
        description='Using the MERN (MongoDB, Express.js, React.js, Node.js) stack and the data visualization tool "Victory Charts" I created this project to visually display the 2019 country happiness report gathered by Gallup, Inc. in a visually appealing way. The front end data is sourced from a mongoDB database. Compiled using CSV data from the World Happiness Report.'
        challenges={[
          { challenge: 'Working with my first data visualization library' },
          {
            challenge:
              'creating and connecting the mongoDB database to Mongo Atlas and Heroku ',
          },
          {
            challenge:
              'Deciding on how the site should look like and what UX i wanted to create',
          },
        ]}
        tech={[
          { tech: 'MongoDB' },
          { tech: 'Mongoose' },
          { tech: 'Node.js' },
          { tech: 'Express.js' },
          { tech: 'React.js' },
          { tech: 'Materialize' },
          { tech: 'VictoryCharts' },
        ]}
        github='https://github.com/MilesHamilton/Country-Happiness-APP'
        link='https://country-happiness.web.app/'
      />
    </div>
  );
}
