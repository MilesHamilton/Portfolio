import React from 'react';
import ProjectContent from '../components/ProjectContent';

export default function Yakyik() {
  return (
    <div>
      <ProjectContent
        title='Yak Yik'
        link='http://yak-yik.surge.sh/'
        gif={require('../components/CSS/YakYik.gif')}
        description='Developed a mock application of the anonymous social media platform Yikyak. Utilizing the MERN stack and built with full CRUD capabilities this app was build in 4.5 days with a team of 4 people'
        challenge=''
        tech='MongoDB, Mongoose, Node.js, Express.js, React.js, Victory Charts'
        github='https://github.com/Las6103/Yak-Yik-Front-End'
        link='http://yak-yik.surge.sh/'
      />
    </div>
  );
}
