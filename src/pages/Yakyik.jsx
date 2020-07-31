import React from 'react';
import ProjectContent from '../components/ProjectContent';

export default function Yakyik() {
  return (
    <div className='page'>
      <ProjectContent
        title='Yak Yik'
        link='http://yak-yik.surge.sh/'
        gif={require('../components/CSS/Yak.jpg')}
        descriptionTitle="There's No I In TEAM"
        description='A mock application of the anonymous social media platform Yik Yak. Utilizing the MERN stack and built with full CRUD capabilities this app was build in 4.5 days on a team of 4 developers'
        challenges={[
          {
            challenge:
              'Working on a team with 3 other developers of varying skill, and deviding up responsibilites and deciding on how the site would function',
          },
          {
            challenge: 'Creating text forms inside of another developers code',
          },
          {
            challenge:
              'Organizing zoom calls and code updates in order track the progress of the app',
          },
        ]}
        tech={[
          { tech: 'Node,js' },
          { tech: 'MongoDB' },
          { tech: 'Mongoose' },
          { tech: 'Express.js' },
          { tech: 'React.js' },
          { tech: 'Bootstrap' },
        ]}
        github='https://github.com/Las6103/Yak-Yik-Front-End'
        link='http://yak-yik.surge.sh/'
      />
    </div>
  );
}
